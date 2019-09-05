/*
 * @Description: file content
 * @Author: zy
 * @Date: 2019-08-29 10:26:16
 * @LastEditors: zy
 * @LastEditTime: 2019-09-05 17:28:53
 */
import Vue from 'vue'
import axios from 'axios'
import router from '@/router'
import qs from 'qs'
import merge from 'lodash/merge'
import { clearLoginInfo } from '@/utils'
import { Message } from 'element-ui'
const http = axios.create({
  timeout: 1000 * 30,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

/**
 * 请求拦截
 */
http.interceptors.request.use(config => {
  config.headers['token'] = Vue.cookie.get('token') // 请求头带上token
  return config
}, error => {
  return Promise.reject(error)
})

/**
 * 响应拦截
 */
http.interceptors.response.use(response => {
  if (response.status === 200) {
    if (response.data && response.data.code === '00000002') { // 00000002 token失效
      clearLoginInfo()
      Message({
        message: '登录失效，请重新登录',
        type: 'warning',
        duration: 1000
      })
      setTimeout(() => {
        router.push({ name: 'login' })
      }, 2000)
    } else if (response.data && response.data.code !== '00000000') {
      Message({
        message: response.data.msg,
        type: 'error',
        duration: 2000
      })
      return Promise.reject(response)
    } else {
      return Promise.resolve(response.data)
    }
  } else {
    return Promise.reject(response)
  }
}, error => {
  if (error.response.status) {
    switch (error.response.status) {
      // 401: 未登录
      // 未登录则跳转登录页面，并携带当前页面的路径
      // 在登录成功后返回当前页面，这一步需要在登录页操作。
      case 401:
        clearLoginInfo()
        router.push({ name: 'login' })
        break
      // 403 token过期
      // 登录过期对用户进行提示
      // 清除本地token和清空vuex中token对象
      // 跳转登录页面
      case 403:
        Message({
          message: '登录过期，请重新登录',
          duration: 1000,
          type: 'warning'
        })
        // 清除token
        clearLoginInfo()
        // router.push({ name: 'login' })
        // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
        setTimeout(() => {
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          })
        }, 1000)
        break

      // 404请求不存在
      case 404:
        Message({
          message: '网络请求不存在',
          duration: 1500,
          type: 'warning'
        })
        break
      // 其他错误，直接抛出错误提示
      default:
        Message({
          message: error.response.data.message,
          duration: 1500,
          type: 'error'
        })
    }
    return Promise.reject(error.response)
  }
})

/**
 * 请求地址处理
 * @param {*} actionName action方法名称
 */
http.adornUrl = (actionName) => {
  // 非生产环境 && 开启代理, 接口前缀统一使用[/proxyApi/]前缀做代理拦截!
  return (process.env.NODE_ENV !== 'production' && process.env.OPEN_PROXY ? '/proxyApi/' : window.SITE_CONFIG.baseUrl) + actionName
}

/**
 * get请求参数处理
 * @param {*} params 参数对象
 * @param {*} openDefultParams 是否开启默认参数?
 */
http.adornParams = (params = {}, openDefultParams = false) => {
  var defaults = {
    't': new Date().getTime()
  }
  return openDefultParams ? merge(defaults, params) : params
}

/**
 * post请求数据处理
 * @param {*} data 数据对象
 * @param {*} openDefultdata 是否开启默认数据?
 * @param {*} contentType 数据格式
 *  json: 'application/json; charset=utf-8'
 *  form: 'application/x-www-form-urlencoded; charset=utf-8'
 */
http.adornData = (data = {}, openDefultdata = false, contentType = 'json') => {
  var defaults = {
    't': new Date().getTime()
  }
  data = openDefultdata ? merge(defaults, data) : data
  return contentType === 'json' ? JSON.stringify(data) : qs.stringify(data)
}

export default http
