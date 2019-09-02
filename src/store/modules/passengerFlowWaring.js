const state = {
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
  date_val: '1'
}

const mutations = {
  XIANWANG_SELECT_VAL: (state, val) => {
    state.xianwang_val = val
  },
  DATE_SELECT_VAL: (state, val) => {
    state.date_val = val
  }
}

// const actions = {
//   xianwangStateVal ({commit}, val) {
//     commit('XIANWANG_SELECT_VAL', val)
//   },
//   dateSelectVal ({commit}, val) {
//     debugger
//     commit('DATE_SELECT_VAL', val)
//   }
// }

export default {
  namespaced: true,
  state,
  mutations
  // actions
}
