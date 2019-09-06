/*
 * @Description: file content
 * @Author: zy
 * @Date: 2019-09-02 21:09:11
 * @LastEditors: zy
 * @LastEditTime: 2019-09-06 12:44:08
 */
import Vue from 'vue'
import Vuex from 'vuex'
import cloneDeep from 'lodash/cloneDeep'
Vue.use(Vuex)
// 用此方法请把文件创建在modules下
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  let moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  if (moduleName.indexOf('/') !== -1) {
    moduleName = moduleName.split('/')[0]
    const value = modulesFiles('./' + moduleName + '/index.js')
    modules[moduleName] = value.default
  } else {
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
  }
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
