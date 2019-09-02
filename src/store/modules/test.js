/*
 * @Description: file content
 * @Author: zy
 * @Date: 2019-09-02 23:41:51
 * @LastEditors: zy
 * @LastEditTime: 2019-09-03 00:52:48
 */
const state = {
  paerson: {
    name: '貂蝉',
    age: '18'
  },
  count: 5
}
const getters = {
  getCount: state => state.count * 2
}
const mutations = {
  UPDATEPAERSONNAME (state, val) {
    state.paerson.name = val
  },
  ADDCOUNT (state) {
    state.count++
  },
  ACTIONADDCOUNT (state, val) {
    state.count += val
  }
}
const actions = {
  setCount ({ commit }, num) {
    commit('ACTIONADDCOUNT', num)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
