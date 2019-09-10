<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-09-10 14:07:10
 * @LastEditors: zy
 * @LastEditTime: 2019-09-10 15:01:37
 -->
<template>
  <el-tabs v-model="activeName" class="xianwang_keliu_cont">
    <el-tab-pane label="进站量" name="first">
      <ul>
        <li
          v-for="(item,index) in xianlukeliu_jz_options"
          :key="item.id"
          class="flexStart justify-content-space-between align-items-center"
        >
          <div class="flexStart align-items-center">
            <el-tag
              v-if="item['name'] === frm_jz_colour[index]['name']"
              class="xianlu_keliu_pm_style margin_right_10"
              :style="{ backgroundColor: frm_jz_colour[index]['colour'][0], color: frm_jz_colour[index]['colour'][1]}"
            >{{item.name}}</el-tag>
            <p class="margin_right_4 color_949EA8">{{item.typeNum}}</p>
            <icon-svg v-if="item.type === 'top' " name="kltop"></icon-svg>
            <icon-svg v-else name="klbottom"></icon-svg>
          </div>
          <p class="color_556270">{{item.keyunliang}}</p>
        </li>
      </ul>
    </el-tab-pane>
    <el-tab-pane label="出站量" name="second">
    </el-tab-pane>
    <el-tab-pane label="换乘量" name="third">
    </el-tab-pane>
    <el-tab-pane label="客运量" name="fourth">
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first',
      xianlukeliu_jz_options: [
        {
          id: '1',
          name: '1号线',
          keyunliang: '9,19,233',
          typeNum: '+355,466',
          type: 'top'
        },
        {
          id: '2',
          name: '2号线',
          keyunliang: '9,19,233',
          typeNum: '-3,545',
          type: 'bottom'
        },
        {
          id: '3',
          name: '3号线',
          keyunliang: '9,19,233',
          typeNum: '+355',
          type: 'top'
        },
        {
          id: '7',
          name: '7号线',
          keyunliang: '9,19,233',
          typeNum: '+355',
          type: 'top'
        },
        {
          id: '10',
          name: '10号线',
          keyunliang: '9,19,233',
          typeNum: '-255',
          type: 'bottom'
        },
        {
          id: '4',
          name: '4号线',
          keyunliang: '9,19,233',
          typeNum: '-255',
          type: 'bottom'
        }
      ],
      backgrounds_and_corols: [
        { name: '1号线', colour: ['rgba(34,42,140,.1)', 'rgba(34,42,140,1)'] },
        { name: '2号线', colour: ['rgba(235,90,53,.1)', 'rgba(235,90,53,1)'] },
        { name: '3号线', colour: ['rgba(213,0,106,.1)', 'rgba(213,0,106,1)'] },
        { name: '4号线', colour: ['rgba(0,170,88,.1)', 'rgba(0,170,88,1)'] },
        { name: '7号线', colour: ['rgba(109,198,214,.1)', 'rgba(109,198,214,1)'] },
        { name: '10号线', colour: ['rgba(0,80,162,.1)', 'rgba(0,80,162,1)'] }
      ]
    }
  },
  computed: {
    // 格式化 线路颜色
    frm_jz_colour () {
      let self = this
      const newArr = []
      self.xianlukeliu_jz_options.forEach(i => {
        self.backgrounds_and_corols.forEach(n => {
          if (i['name'] === n['name']) {
            newArr.push(n)
          }
        })
      })
      return newArr
    },
    frm_cz_colour () {
      let self = this
      const newArr = []
      self.xianlukeliu_cz_options.forEach(i => {
        self.backgrounds_and_corols.forEach(n => {
          if (i['name'] === n['name']) {
            newArr.push(n)
          }
        })
      })
      return newArr
    },
    frm_hc_colour () {
      let self = this
      const newArr = []
      self.xianlukeliu_hc_options.forEach(i => {
        self.backgrounds_and_corols.forEach(n => {
          if (i['name'] === n['name']) {
            newArr.push(n)
          }
        })
      })
      return newArr
    },
    frm_ky_colour () {
      let self = this
      const newArr = []
      self.xianlukeliu_ky_options.forEach(i => {
        self.backgrounds_and_corols.forEach(n => {
          if (i['name'] === n['name']) {
            newArr.push(n)
          }
        })
      })
      return newArr
    }
  }
}
</script>

<style lang="scss" scoped>
.xianwang_keliu_cont {
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      padding: 19px 0;
    }
    // li:last-child {
    //   margin-bottom: 0;
    // }
    // li:first-child {
    //   margin-top: 20px;
    // }
  }
  /deep/ .el-tag--medium {
    line-height: 24px;
    text-align: center;
    width: 48px;
    height: 24px;
    background: rgba(237, 236, 246, 1);
    border-radius: 4px;
  }
}
.xianlu_keliu_pm_style {
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  border: none;
}
</style>