/*
 * @Description: file content
 * @Author: zy
 * @Date: 2019-09-02 21:09:11
 * @LastEditors: zy
 * @LastEditTime: 2019-09-03 21:44:03
 */
import Vue from 'vue'
import Vuex from 'vuex'
import cloneDeep from 'lodash/cloneDeep'
Vue.use(Vuex)
const modulesFiles = require.context('./modules', true, /\.js$/)

// 用此方法请把文件创建在modules下
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

export default new Vuex.Store({
  modules,
  mutations: {
    // 重置vuex本地储存状态
    resetStore (state) {
      Object.keys(state).forEach((key) => {
        state[key] = cloneDeep(window.SITE_CONFIG['storeState'][key])
      })
    }
  },
  strict: process.env.NODE_ENV !== 'production'
})
