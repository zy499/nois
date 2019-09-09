<!--
 * @Description: 客流监测与预警  主页
 * @Author: zy
 * @Date: 2019-08-24 17:01:27
 * @LastEditors: zy
 * @LastEditTime: 2019-09-10 00:54:19
 -->
<template>
  <div class="passengerFlowWaringBody">
    <!-- header start -->
    <div class="header margin-bottom30">
      <div class="header-body">
        <el-row type="flex" justify="space-between">
          <el-col :span="8" class="flexStart flex-direction-column justify-content-center">
            <p class="title">客流监测与预警</p>
            <p class="font-size12 color_556270">
              <span
                class="yj_biaoge_date"
              >{{yj_biaoge_date}}&emsp;{{"星期"+"日一二三四五六".charAt(new Date().getDay())}}</span>
            </p>
          </el-col>
          <el-col :span="8" class="flexStart flex-flow-reverse">
            <div class="rifht flexStart">
              <div v-if="condition > 0" class="container">
                <div class="wave solid danger">
                  <div class="circle"></div>
                  <div class="content">
                    <icon-svg name="gaojing"></icon-svg>
                  </div>
                </div>
              </div>
              <div
                v-else
                style="font-size: 40px;
              width:70px;
              height: 70px;
              display: flex;
              justify-content: center;
              align-items: center;"
              >
                <icon-svg name="gaojing"></icon-svg>
              </div>
              <div class="flexStart flex-direction-column justify-content-center">
                <p class="font-size24">1</p>
                <p class="font-size12 color color_949EA8">客流告警</p>
              </div>
            </div>
            <div class="left flexStart margin_right_24">
              <div v-if="condition > 0" class="container">
                <div class="wave solid warning">
                  <div class="circle"></div>
                  <div class="content">
                    <icon-svg name="yujing"></icon-svg>
                  </div>
                </div>
              </div>
              <div
                v-else
                style="
              height: 70px;
              width:70px;
              font-size: 40px;
              display: flex;
              justify-content: center;
              align-items: center;"
              >
                <icon-svg name="yujing"></icon-svg>
              </div>
              <div class="flexStart flex-direction-column justify-content-center">
                <p class="font-size24">26</p>
                <p class="font-size12 color color_949EA8">客流预警</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- header end -->
    <!-- content start -->
    <el-row class="margin-bottom30">
      <el-col :span="16">
        <el-card style="height:440px;">
          <KlYjChart id="klyjChart" />
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card style="height:440px;">客流告警</el-card>
      </el-col>
    </el-row>
    <!-- 指标表格 start -->
    <LineNetworkIndexTable />
    <!-- 指标表格 end -->
    <!-- 线网地图 start -->
    <el-row class="xianwang_map_box margin-bottom30">
      <!-- 线网地图 start -->
      <el-col :span="24">
        <el-card style="height:650px">
          <div slot="header">
            <span class="yj_biaoge_title">线网地图</span>
            <el-tag class="yj_biaoge_tag" type="info">{{yj_biaoge_tag}}</el-tag>
          </div>
          <div class="xianwang_map_cont"></div>
        </el-card>
      </el-col>
      <!-- 线网地图 end -->
    </el-row>
    <!-- 线网地图 end -->
    <!-- 线路客流排名/线网断面客流量排名 start -->
    <el-row type="flex" justify="space-between" class="margin-bottom30">
      <!-- 线路客流排名 start -->
      <el-col :span="8" style="width:32.16667%">
        <el-card style="height:495px">
          <div slot="header">
            <span class="yj_biaoge_title">线路客流排名</span>
            <el-tag class="yj_biaoge_tag" type="info">{{yj_biaoge_tag}}</el-tag>
          </div>
          <el-tabs v-model="activeName" class="xianwang_keliu_cont">
            <el-tab-pane label="进站量" name="first">
              <ul>
                <li
                  v-for="(item,index) in xianlukeliu_options"
                  :key="item.id"
                  class="flexStart justify-content-space-between"
                >
                  <div class="flexStart align-items-center">
                    <el-tag
                      v-if="index === 0"
                      style="background-color:#00A6FF;color:#fff;border:none;"
                      class="margin_right_20"
                    >{{index+1}}</el-tag>
                    <el-tag
                      v-else-if="index === 1"
                      style="background-color:rgba(0, 166, 255, 0.75);color:#fff;border:none;"
                      class="margin_right_20"
                    >{{index+1}}</el-tag>
                    <el-tag
                      v-else-if="index === 2"
                      style="background-color:rgba(0, 166, 255, 0.5);color:#fff;border:none;"
                      class="margin_right_20"
                    >{{index+1}}</el-tag>
                    <el-tag
                      v-else
                      style="background-color:#F5F6F7;color:#949EA8;border:none;"
                      class="margin_right_20"
                    >{{index+1}}</el-tag>
                    <div>
                      <p class="font-size14 font_weight_bold padding-bottom2">{{item.name}}</p>
                      <div class="flexStart font-size14 color_909399">
                        <span class="margin_right_10">{{item.keyunliang}}</span>
                        <div v-if="yj_biaoge_tag !== '实时'">
                          <span style="color:red;">⬆</span>
                          <span>{{item.shangshen}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <el-tag
                    v-if="item['name'] === frm_backgrounds_and_corols[index]['name']"
                    class="xianlu_keliu_pm_style"
                    :style="{ backgroundColor: frm_backgrounds_and_corols[index]['colour'][0], color: frm_backgrounds_and_corols[index]['colour'][1]}"
                  >{{item.name}}</el-tag>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="出站量" name="second">
              <ul>
                <li
                  v-for="(item,index) in xianlukeliu_options"
                  :key="item.id"
                  class="flexStart justify-content-space-between"
                >
                  <div class="flexStart align-items-center">
                    <el-tag
                      v-if="index === 0"
                      style="background-color:#00A6FF;color:#fff;border:none;"
                      class="margin_right_20"
                    >{{index+1}}</el-tag>
                    <el-tag
                      v-else-if="index === 1"
                      style="background-color:rgba(0, 166, 255, 0.75);color:#fff;border:none;"
                      class="margin_right_20"
                    >{{index+1}}</el-tag>
                    <el-tag
                      v-else-if="index === 2"
                      style="background-color:rgba(0, 166, 255, 0.5);color:#fff;border:none;"
                      class="margin_right_20"
                    >{{index+1}}</el-tag>
                    <el-tag
                      v-else
                      style="background-color:#F5F6F7;color:#949EA8;border:none;"
                      class="margin_right_20"
                    >{{index+1}}</el-tag>
                    <div>
                      <p class="font-size14 font_weight_bold padding-bottom2">{{item.name}}</p>
                      <div class="flexStart font-size14 color_909399">
                        <span class="margin_right_10">{{item.keyunliang}}</span>
                        <div v-if="yj_biaoge_tag !== '实时'">
                          <span style="color:red;">⬆</span>
                          <span>{{item.shangshen}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <el-tag
                    v-if="item['name'] === frm_backgrounds_and_corols[index]['name']"
                    class="xianlu_keliu_pm_style"
                    :style="{ backgroundColor: frm_backgrounds_and_corols[index]['colour'][0], color: frm_backgrounds_and_corols[index]['colour'][1]}"
                  >{{item.name}}</el-tag>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="换乘量" name="third">
              <ul>
                <li
                  v-for="(item,index) in xianlukeliu_options"
                  :key="item.id"
                  class="flexStart justify-content-space-between"
                >
                  <div class="flexStart align-items-center">
                    <el-tag
                      v-if="index === 0"
                      style="background-color:#00A6FF;color:#fff;border:none;"
                      class="margin_right_20"
                    >{{index+1}}</el-tag>
                    <el-tag
                      v-else-if="index === 1"
                      style="background-color:rgba(0, 166, 255, 0.75);color:#fff;border:none;"
                      class="margin_right_20"
                    >{{index+1}}</el-tag>
                    <el-tag
                      v-else-if="index === 2"
                      style="background-color:rgba(0, 166, 255, 0.5);color:#fff;border:none;"
                      class="margin_right_20"
                    >{{index+1}}</el-tag>
                    <el-tag
                      v-else
                      style="background-color:#F5F6F7;color:#949EA8;border:none;"
                      class="margin_right_20"
                    >{{index+1}}</el-tag>
                    <div>
                      <p class="font-size14 font_weight_bold padding-bottom2">{{item.name}}</p>
                      <div class="flexStart font-size14 color_909399">
                        <span class="margin_right_10">{{item.keyunliang}}</span>
                        <div v-if="yj_biaoge_tag !== '实时'">
                          <span style="color:red;">⬆</span>
                          <span>{{item.shangshen}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <el-tag
                    v-if="item['name'] === frm_backgrounds_and_corols[index]['name']"
                    class="xianlu_keliu_pm_style"
                    :style="{ backgroundColor: frm_backgrounds_and_corols[index]['colour'][0], color: frm_backgrounds_and_corols[index]['colour'][1]}"
                  >{{item.name}}</el-tag>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="换乘量" name="fourth">
              <ul>
                <li
                  v-for="(item,index) in xianlukeliu_options"
                  :key="item.id"
                  class="flexStart justify-content-space-between"
                >
                  <div class="flexStart align-items-center">
                    <el-tag
                      v-if="index === 0"
                      style="background-color:#00A6FF;color:#fff;border:none;"
                      class="margin_right_20"
                    >{{index+1}}</el-tag>
                    <el-tag
                      v-else-if="index === 1"
                      style="background-color:rgba(0, 166, 255, 0.75);color:#fff;border:none;"
                      class="margin_right_20"
                    >{{index+1}}</el-tag>
                    <el-tag
                      v-else-if="index === 2"
                      style="background-color:rgba(0, 166, 255, 0.5);color:#fff;border:none;"
                      class="margin_right_20"
                    >{{index+1}}</el-tag>
                    <el-tag
                      v-else
                      style="background-color:#F5F6F7;color:#949EA8;border:none;"
                      class="margin_right_20"
                    >{{index+1}}</el-tag>
                    <div>
                      <p class="font-size14 font_weight_bold padding-bottom2">{{item.name}}</p>
                      <div class="flexStart font-size14 color_909399">
                        <span class="margin_right_10">{{item.keyunliang}}</span>
                        <div v-if="yj_biaoge_tag !== '实时'">
                          <span style="color:red;">⬆</span>
                          <span>{{item.shangshen}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <el-tag
                    v-if="item['name'] === frm_backgrounds_and_corols[index]['name']"
                    class="xianlu_keliu_pm_style"
                    :style="{ backgroundColor: frm_backgrounds_and_corols[index]['colour'][0], color: frm_backgrounds_and_corols[index]['colour'][1]}"
                  >{{item.name}}</el-tag>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
      <!-- 线路客流排名 end -->
      <!-- 线网断面客流量排名 start -->
      <el-col :span="16">
        <el-card style="height:495px">
          <div slot="header">
            <span class="yj_biaoge_title">线网断面客流量排名</span>
            <el-tag class="yj_biaoge_tag" type="info">{{yj_biaoge_tag}}</el-tag>
          </div>
          <XianwangDuanMianKeliu />
        </el-card>
      </el-col>
      <!-- 线网断面客流量排名 end -->
    </el-row>
    <!-- 线路客流排名/线网断面客流量排名 end -->
    <!-- 车站客流排名/线网断面最大拥挤度/线网断面客流量排名 start -->
    <el-row type="flex" justify="space-between">
      <!-- 车站客流排名 start -->
      <el-col :span="8" style="width:32.16667%">
        <el-card style="min-height:577px">
          <div slot="header">
            <span class="yj_biaoge_title">{{yj_biaoge_title}}车站客流排名</span>
            <el-tag class="yj_biaoge_tag" type="info">{{yj_biaoge_tag}}</el-tag>
          </div>
          <el-tabs v-model="activeName">
            <el-tab-pane label="进站量" name="first" class="chezhan_keliu_cont">
              <CzKlchart />
            </el-tab-pane>
            <el-tab-pane label="出站量" name="second" class="chezhan_keliu_cont">
              <!-- <CzKlchart /> -->
            </el-tab-pane>
            <el-tab-pane label="换乘量" name="third" class="chezhan_keliu_cont">
              <!-- <CzKlchart /> -->
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
      <!-- 车站客流排名 end -->
      <!-- 线网断面最大拥挤度 start -->
      <el-col :span="16">
        <el-card style="min-height:577px">
          <div slot="header">
            <span class="yj_biaoge_title">{{yj_biaoge_title}}断面最大拥挤度</span>
            <el-tag class="yj_biaoge_tag" type="info">{{yj_biaoge_tag}}</el-tag>
          </div>
          <div class="chezhan_keliu_cont"></div>
        </el-card>
      </el-col>
      <!-- 线网断面最大拥挤度 end -->
    </el-row>
    <!-- 车站客流排名/线网断面最大拥挤度/线网断面客流量排名 end -->
    <!-- content end -->
    <el-button
      type="primary"
      @click="$router.push({name:'stationDetails',params:{stationName:'火车南站',routeObj:$route}})"
    >车站详情</el-button>
    <el-button type="primary" @click="test">test</el-button>
  </div>
</template>

<script>
import { parseTime } from '@/utils'
import { createNamespacedHelpers } from 'vuex'
import LineNetworkIndexTable from '@/components/passengerFlow/passengerWarning/LineNetworkIndexTable'
import XianwangDuanMianKeliu from '@/components/passengerFlow/passengerWarning/XwDmKlChart'
import CzKlchart from '@/components/passengerFlow/passengerWarning/CzKlchart'
import KlYjChart from '@/components/passengerFlow/passengerWarning/KlYjChart'
const { mapState } = createNamespacedHelpers('passengerFlowWaring')
export default {
  components: {
    LineNetworkIndexTable,
    XianwangDuanMianKeliu,
    CzKlchart,
    KlYjChart
  },
  data () {
    return {
      condition: 1,
      activeName: 'first',
      xianlukeliu_options: [
        {
          id: '1',
          name: '1号线',
          keyunliang: '9,19,233',
          shangshen: '3.7%'
        },
        {
          id: '2',
          name: '2号线',
          keyunliang: '9,19,233',
          shangshen: '3.7%'
        },
        {
          id: '3',
          name: '3号线',
          keyunliang: '9,19,233',
          shangshen: '3.7%'
        },
        {
          id: '7',
          name: '7号线',
          keyunliang: '9,19,233',
          shangshen: '3.7%'
        },
        {
          id: '10',
          name: '10号线',
          keyunliang: '9,19,233',
          shangshen: '3.7%'
        },
        {
          id: '4',
          name: '4号线',
          keyunliang: '9,19,233',
          shangshen: '3.7%'
        }
      ],
      chezhankeliu_options: [
        {
          name: '火车南站',
          keyunliang: '9,19,233'
        },
        {
          name: '高新',
          keyunliang: '9,19,233'
        },
        {
          name: '天府广场',
          keyunliang: '9,19,233'
        },
        {
          name: '火车南站',
          keyunliang: '9,19,233'
        },
        {
          name: '高新',
          keyunliang: '9,19,233'
        },
        {
          name: '天府广场',
          keyunliang: '9,19,233'
        },
        {
          name: '天府广场',
          keyunliang: '9,19,233'
        },
        {
          name: '天府广场',
          keyunliang: '9,19,233'
        },
        {
          name: '天府广场',
          keyunliang: '9,19,233'
        },
        {
          name: '天府广场',
          keyunliang: '9,19,233'
        }
      ],
      backgrounds_and_corols: [
        { name: '1号线', colour: ['rgba(34,42,140,.1)', 'rgba(34,42,140,1)'] },
        { name: '2号线', colour: ['rgba(235,90,53,.1)', 'rgba(235,90,53,1)'] },
        { name: '3号线', colour: ['rgba(213,0,106,.1)', 'rgba(213,0,106,1)'] },
        { name: '4号线', colour: ['rgba(0,170,88,.1)', 'rgba(0,170,88,1)'] },
        {
          name: '7号线',
          colour: ['rgba(109,198,214,.1)', 'rgba(109,198,214,1)']
        },
        { name: '10号线', colour: ['rgba(0,80,162,.1)', 'rgba(0,80,162,1)'] }
      ],
      yj_biaoge_date: ''
    }
  },
  computed: {
    ...mapState({
      yj_biaoge_title: 'xianlu_type',
      yj_biaoge_tag: 'date_type'
    }),
    // 格式化 线路颜色
    frm_backgrounds_and_corols () {
      let self = this
      const newArr = []
      self.xianlukeliu_options.forEach(i => {
        self.backgrounds_and_corols.forEach(n => {
          if (i['name'] === n['name']) {
            newArr.push(n)
          }
        })
      })
      return newArr
    }
  },
  mounted () {
    var _this = this // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(function () {
      _this.yj_biaoge_date = parseTime(
        new Date(),
        '{y}年{m}月{d}日 {h}:{i}:{s}'
      ) // 修改数据date
    }, 1000)
  },
  // 实例销毁之前调用。主要解绑一些使用addEventListener监听的事件等
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer) // 在Vue实例销毁前，清除我们的定时器
    }
  },
  methods: {
    test () {
      this.$router.push({ name: 'test' })
    }
  }
}
</script>
<style lang='scss' scoped>
.passengerFlowWaringBody {
  p {
    margin: 0;
  }
  font-family: Roboto-regular;
  .header {
    .header-body {
      .title {
        color: #101010;
        font-size: 20px;
        margin-bottom: 10px;
        font-weight: 600;
      }
    }
  }
  /deep/ .el-card__header {
    padding-bottom: 0;
    border-bottom: none;
  }
  /deep/ .el-tabs__header {
    border-left: none;
  }
  // .xianwang_map_box {
  //   height: 600px;
  //   .xianwang_map_cont {
  //     height: 500px;
  //     background-color: #f5f6f7;
  //   }
  // }
  .xianwang_keliu_cont {
    ul {
      margin: 0;
      padding: 0;
      li {
        list-style: none;
        margin-bottom: 40px;
      }
      li:last-child {
        margin-bottom: 0;
      }
      li:first-child {
        margin-top: 20px;
      }
    }
    /deep/ .el-tag--medium {
      width: 34px;
      height: 34px;
      line-height: 34px;
      text-align: center;
    }
  }
  .chezhan_keliu_cont {
    ul {
      margin: 0;
      padding: 0;
      li {
        line-height: 30px;
        list-style: none;
        margin-bottom: 15px;
        /deep/ .el-tag--medium {
          width: 28px;
        }
      }
      li:last-child {
        margin-bottom: 0;
      }
    }
  }
  .text-decoration {
    text-decoration: underline;
    cursor: pointer;
  }
  .keliu-title-Font {
    color: rgba(16, 16, 16, 0.5);
    font-size: 12px;
  }
  .tianqiFont {
    color: rgba(16, 16, 16, 0.5);
    font-size: 12px;
  }
  .pub-yujing-font {
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
  }
  .xianlu_keliu_pm_style {
    min-width: 80px;
    font-size: 16px;
    text-align: center;
    border: none;
  }
}
</style>
<style lang="scss">
.yj_biaoge_title {
  color: #202e3d;
  font-size: 14px;
  text-align: left;
  margin-right: 4px;
  font-weight: 600;
}
.yj_biaoge_date {
  color: #202e3d;
  font-size: 12px;
  text-align: left;
  margin-right: 10px;
}
.yj_biaoge_tag {
  min-width: 70px;
  text-align: center;
}

/************预警波纹************/

.wave {
  position: relative;
  width: 70px;
  height: 70px;
  text-align: center;
  // line-height: 50px;
  font-size: 40px;
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 70px;
  }
}

.wave .circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0;
}
/* 波纹效果 */
// .wave.ripple .circle {
//   width: calc(100% - 6px); /* 减去边框的大小 */
//   height: calc(100% - 6px); /* 减去边框的大小 */
//   border: 3px solid #fff;
// }

// .wave.ripple .circle:first-child {
//   animation: circle-opacity 2s infinite;
// }

// .wave.ripple .circle:nth-child(2) {
//   animation: circle-opacity 2s infinite;
//   animation-delay: 0.3s;
// }

// .wave.ripple .circle:nth-child(3) {
//   animation: circle-opacity 2s infinite;
//   animation-delay: 0.6s;
// }

// .wave.ripple.danger {
//   color: red;
// }

// .wave.ripple.danger .circle {
//   border-color: red;
// }

// .wave.ripple.warning {
//   color: orange;
// }

// .wave.ripple.warning .circle {
//   border-color: orange;
// }
/* 波动效果 */
.wave.solid .circle {
  width: 100%;
  height: 100%;
  background: #fff;
}

.wave.solid .circle:first-child {
  animation: circle-opacity 2s infinite;
}

.wave.solid.danger {
  color: red;
}

.wave.solid.danger .circle {
  background: red;
}

.wave.solid.warning {
  color: orange;
}

.wave.solid.warning .circle {
  background: orange;
}

@keyframes circle-opacity {
  from {
    opacity: 1;
    transform: scale(0);
  }
  to {
    opacity: 0;
    transform: scale(1);
  }
}
</style>