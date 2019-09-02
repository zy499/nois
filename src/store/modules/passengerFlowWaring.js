/*
 * @Description: file content
 * @Author: zy
 * @Date: 2019-08-31 01:42:29
 * @LastEditors: zy
 * @LastEditTime: 2019-09-02 23:39:22
 */
export default {
  namespaced: true,
  state: {
    xianwang_option: [
      {
        label: '线网',
        value: '1'
      },
      {
        label: '1号线',
        value: '2'
      },
      {
        label: '2号线',
        value: '3'
      },
      {
        label: '3号线',
        value: '4'
      },
      {
        label: '4号线',
        value: '5'
      },
      {
        label: '7号线',
        value: '6'
      },
      {
        label: '10号线',
        value: '7'
      }
    ],
    date_option: [
      {
        label: '实时',
        value: '1'
      },
      {
        label: '未来15分钟',
        value: '2'
      },
      {
        label: '未来30分钟',
        value: '3'
      },
      {
        label: '未来60分钟',
        value: '4'
      }
    ],
    xianwang_val: '1',
    date_val: '1',
    yj_biaoge_tag: '实时',
    yj_biaoge_title: '线网'
  },
  mutations: {
    update_xianwang_val: (state, value) => {
      state.xianwang_val = value
    },
    update_date_val: (state, value) => {
      state.date_val = value
    },
    update_yj_biaoge_title: (state, val) => {
      state.xianwang_option.forEach(item => {
        if (item.value === val) {
          state.yj_biaoge_title = item.label
        }
      })
    },
    update_yj_biaoge_tag: (state, val) => {
      state.date_option.forEach(item => {
        if (item.value === val) {
          state.yj_biaoge_tag = item.label
        }
      })
    }
  }
}
