/*
 * @Description: file content
 * @Author: zy
 * @Date: 2019-09-06 10:35:44
 * @LastEditors: zy
 * @LastEditTime: 2019-09-06 14:01:22
 */
import type from './types'
const mutations = {
  /**
   * @name: 更新select线路组件选中值
   */
  [type.UPDATE_XIANLU_VAL] (state, val) {
    state.xianlu_val = val
    state.xianlu_option.forEach(item => {
      if (item.value === val) {
        state.xianlu_type = item.label
      }
    })
  },
  /**
   * @name: 更新select时间组件选中值
   */
  [type.UPDATE_DATE_VAL] (state, val) {
    state.date_val = val
    state.date_option.forEach(item => {
      if (item.value === val) {
        state.date_type = item.label
      }
    })
  }
}

export default mutations
