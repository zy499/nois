/*
 * @Description: file content
 * @Author: zy
 * @Date: 2019-09-06 10:34:17
 * @LastEditors: zy
 * @LastEditTime: 2019-09-06 10:46:02
 */
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
