/*
 * @Description: file content
 * @Author: zy
 * @Date: 2019-09-02 21:09:11
 * @LastEditors: zy
 * @LastEditTime: 2019-09-02 22:17:50
 */
import Vue from 'vue'
import Vuex from 'vuex'
import cloneDeep from 'lodash/cloneDeep'
import common from './modules/common'
import user from './modules/user'
import passengerFlowWaring from './modules/passengerFlowWaring'
Vue.use(Vuex)
// const modulesFiles = require.context('./modules', true, /\.js$/)

// // you do not need `import app from './modules/app'`
// // it will auto require all vuex module from modules file
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   // set './app.js' => 'app'
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const value = modulesFiles(modulePath)
//   modules[moduleName] = value.default
//   debugger
//   return modules
// }, {})

export default new Vuex.Store({
  modules: {
    common,
    user,
    passengerFlowWaring
  },
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
