<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-08-24 17:01:27
 * @LastEditors: zy
 * @LastEditTime: 2019-09-02 23:41:29
 -->
<template>
  <div class="passengerFlowWaringBody">
    <!-- header start -->
    <div class="header margin-bottom30">
      <div class="header-body">
        <el-row type="flex" justify="space-between">
          <el-col :span="8">
            <p class="title">客流监测与预警</p>
            
          </el-col>
          <el-col :span="8" class="text_right margin-top3 flexStart flex-flow-reverse">
            <div style="width:36px;height:36px;background:rgba(0,0,0,0.05);margin-left:10px;"></div>
            <div class="tianqiFont">
              <p class="margin-bottom10">晴31℃</p>
              <p>降雨概率10%</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- header end -->
    <!-- content start -->
    <el-row type="flex" justify="space-between" class="margin-bottom30">
      <el-col :span="11">
        <el-card>
          <div class="flexStart justify-content-space-between align-items-center">
            <p class="pub-yujing-font">客流预警</p>
            <p class="pub-yujing-font font-size20">0</p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="11">
        <el-card>
          <div class="flexStart justify-content-space-between align-items-center">
            <p class="pub-yujing-font">警告预警</p>
            <p class="pub-yujing-font font-size20">0</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-card class="yujingbiaoge margin-bottom30">
      <div slot="header">
        <span class="yj_biaoge_title">{{yj_biaoge_title}}指标</span>
        <span class="yj_biaoge_date">{{yj_biaoge_date}}</span>
        <el-tag class="yj_biaoge_tag" type="info">{{yj_biaoge_tag}}</el-tag>
      </div>
      <div class="cont">
        <LintTable />
      </div>
    </el-card>
    <el-row class="xianwang_map_box margin-bottom30" type="flex" justify="space-between">
      <el-col :span="15">
        <el-card style="min-height:600px">
          <div slot="header">
            <span class="yj_biaoge_title">线网地图</span>
            <el-tag class="yj_biaoge_tag" type="info">{{yj_biaoge_tag}}</el-tag>
          </div>
          <div class="xianwang_map_cont"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card style="min-height:600px">
          <div slot="header">
            <span class="yj_biaoge_title">线路客流排名</span>
            <el-tag class="yj_biaoge_tag" type="info">{{yj_biaoge_tag}}</el-tag>
          </div>
          <el-tabs v-model="activeName" class="xianwang_keliu_cont">
            <el-tab-pane label="进站量" name="first">
              <ul>
                <li
                  v-for="item in xianlukeliu_options"
                  :key="item.id"
                  class="flexStart justify-content-space-between"
                >
                  <div class="flexStart">
                    <el-tag
                      type="info"
                      class="margin_right_10"
                    >{{item.name.split('号')[0].length !== 2 ? '0'+item.name.split('号')[0] : item.name.split('号')[0]}}</el-tag>
                    <div>
                      <p class="font-size12 font_weight_bold padding-bottom2">{{item.name}}</p>
                      <div class="flexStart font-size12 corol_909399">
                        <span class="margin_right_10">客运量：{{item.keyunliang}}</span>
                        <span>⬆️</span>
                        <span>{{item.shangshen}}</span>
                      </div>
                    </div>
                  </div>
                  <el-tag
                    type="info"
                    style="min-width: 80px;font-size: 16px;text-align: center;background-color:#ccc"
                  >{{item.name}}</el-tag>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="出站量" name="second">
              <ul>
                <li
                  v-for="item in xianlukeliu_options"
                  :key="item.id"
                  class="flexStart justify-content-space-between"
                >
                  <div class="flexStart">
                    <el-tag
                      type="info"
                      class="margin_right_10"
                    >{{item.name.split('号')[0].length !== 2 ? '0'+item.name.split('号')[0] : item.name.split('号')[0]}}</el-tag>
                    <div>
                      <p class="font-size12 font_weight_bold padding-bottom2">{{item.name}}</p>
                      <div class="flexStart font-size12 corol_909399">
                        <span class="margin_right_10">客运量：{{item.keyunliang}}</span>
                        <span>⬆️</span>
                        <span>{{item.shangshen}}</span>
                      </div>
                    </div>
                  </div>
                  <el-tag
                    type="info"
                    style="min-width: 80px;font-size: 16px;text-align: center;background-color:#ccc"
                  >{{item.name}}</el-tag>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="换乘量" name="third">
              <ul>
                <li
                  v-for="item in xianlukeliu_options"
                  :key="item.id"
                  class="flexStart justify-content-space-between"
                >
                  <div class="flexStart">
                    <el-tag
                      type="info"
                      class="margin_right_10"
                    >{{item.name.split('号')[0].length !== 2 ? '0'+item.name.split('号')[0] : item.name.split('号')[0]}}</el-tag>
                    <div>
                      <p class="font-size12 font_weight_bold padding-bottom2">{{item.name}}</p>
                      <div class="flexStart font-size12 corol_909399">
                        <span class="margin_right_10">客运量：{{item.keyunliang}}</span>
                        <span>⬆️</span>
                        <span>{{item.shangshen}}</span>
                      </div>
                    </div>
                  </div>
                  <el-tag
                    type="info"
                    style="min-width: 80px;font-size: 16px;text-align: center;background-color:#ccc"
                  >{{item.name}}</el-tag>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="换乘量" name="fourth">
              <ul>
                <li
                  v-for="item in xianlukeliu_options"
                  :key="item.id"
                  class="flexStart justify-content-space-between"
                >
                  <div class="flexStart">
                    <el-tag
                      type="info"
                      class="margin_right_10"
                    >{{item.name.split('号')[0].length !== 2 ? '0'+item.name.split('号')[0] : item.name.split('号')[0]}}</el-tag>
                    <div>
                      <p class="font-size12 font_weight_bold padding-bottom2">{{item.name}}</p>
                      <div class="flexStart font-size12 corol_909399">
                        <span class="margin_right_10">客运量：{{item.keyunliang}}</span>
                        <span>⬆️</span>
                        <span>{{item.shangshen}}</span>
                      </div>
                    </div>
                  </div>
                  <el-tag
                    type="info"
                    style="min-width: 80px;font-size: 16px;text-align: center;background-color:#ccc"
                  >{{item.name}}</el-tag>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-between">
      <el-col :span="7">
        <el-card style="min-height:456px">
          <div slot="header">
            <span class="yj_biaoge_title">{{yj_biaoge_title}}车站客流排名</span>
            <el-tag class="yj_biaoge_tag" type="info">{{yj_biaoge_tag}}</el-tag>
          </div>
          <el-tabs v-model="activeName">
            <el-tab-pane label="进站量" name="first" class="chezhan_keliu_cont">
              <ul>
                <li
                  v-for="(item,index) in chezhankeliu_options"
                  :key="index"
                  class="flexStart justify-content-space-between"
                >
                  <div class="flexStart">
                    <el-tag type="info" class="margin_right_10">{{index+1}}</el-tag>
                    <div>
                      <p class="font-size14 font_weight_bold">{{item.name}}</p>
                    </div>
                  </div>
                  <div class="margin_right_10 font-size10">客运量：{{item.keyunliang}}</div>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="出站量" name="second" class="chezhan_keliu_cont">
              <ul>
                <li
                  v-for="(item,index) in chezhankeliu_options"
                  :key="index"
                  class="flexStart justify-content-space-between"
                >
                  <div class="flexStart">
                    <el-tag type="info" class="margin_right_10">{{index+1}}</el-tag>
                    <div>
                      <p class="font-size14 font_weight_bold">{{item.name}}</p>
                    </div>
                  </div>
                  <div class="margin_right_10 font-size10">客运量：{{item.keyunliang}}</div>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="换乘量" name="third" class="chezhan_keliu_cont">
              <ul>
                <li
                  v-for="(item,index) in chezhankeliu_options"
                  :key="index"
                  class="flexStart justify-content-space-between"
                >
                  <div class="flexStart">
                    <el-tag type="info" class="margin_right_10">{{index+1}}</el-tag>
                    <div>
                      <p class="font-size14 font_weight_bold">{{item.name}}</p>
                    </div>
                  </div>
                  <div class="margin_right_10 font-size10">客运量：{{item.keyunliang}}</div>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
      <el-col :span="7">
        <el-card style="min-height:456px">
          <div slot="header">
            <span class="yj_biaoge_title">{{yj_biaoge_title}}断面最大拥挤度</span>
            <el-tag class="yj_biaoge_tag" type="info">{{yj_biaoge_tag}}</el-tag>
          </div>
          <div class="border"></div>
          <div class="chezhan_keliu_cont">
            <ul>
              <li v-for="(item,index) in zuidayongji_options" :key="index">
                <div>
                  <p class="font-size14">{{item.start}}  →  {{item.end}} &nbsp; ({{item.satus}})</p>
                </div>
                <div class="font_weight_bold">{{item.shangshen}}</div>
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card style="min-height:456px">
          <div slot="header">
            <span class="yj_biaoge_title">{{yj_biaoge_title}}断面客流量排名</span>
            <el-tag class="yj_biaoge_tag" type="info">{{yj_biaoge_tag}}</el-tag>
          </div>
          <div class="border"></div>
          <div class="chezhan_keliu_cont">
            <ul>
              <li v-for="(item,index) in zuidayongji_options" :key="index">
                <div>
                  <p class="font-size14">{{item.start}}  →  {{item.end}} &nbsp; ({{item.satus}})</p>
                </div>
                <div class="font_weight_bold">{{item.shangshen}}</div>
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- content end -->
    <el-button type="primary" @click="$router.push({name:'stationDetails',params:{stationName:'火车南站',routeObj:$route}})">车站详情</el-button>
    <el-button type="primary" @click="test">test</el-button>
  </div>
</template>

<script>
import { parseTime } from '@/utils'
import LintTable from '@/components/passengerFlow/passengerWarning/LineTable'
export default {
  components: {
    LintTable
  },
  data () {
    return {
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
        }
      ],
      zuidayongji_options: [
        {
          start: '高新',
          end: '火车南站',
          satus: '下行',
          shangshen: '45.84%'
        },
        {
          start: '孵化园',
          end: '金融城',
          satus: '下行',
          shangshen: '45.84%'
        },
        {
          start: '桐梓林',
          end: '火车南站',
          satus: '上行',
          shangshen: '45.84%'
        },
        {
          start: '高新',
          end: '火车南站',
          satus: '上行',
          shangshen: '45.84%'
        }
      ],
      yj_biaoge_date: ''
    }
  },
  computed: {
    yj_biaoge_title: {
      get () {
        return this.$store.state.passengerFlowWaring.yj_biaoge_title
      }
    },
    yj_biaoge_tag: {
      get () {
        return this.$store.state.passengerFlowWaring.yj_biaoge_tag
      }
    }
  },
  mounted () {
    var _this = this // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(function () {
      _this.yj_biaoge_date = parseTime(new Date(), '{y}/{m}/{d} {h}:{i}:{s}') // 修改数据date
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
  .yujingbiaoge {
    min-height: 272px;
    .yj_biaoge_title {
      color: rgba(16, 16, 16, 1);
      font-size: 16px;
      text-align: left;
      margin-right: 30px;
    }
    .yj_biaoge_date {
      color: rgba(16, 16, 16, 0.5);
      font-size: 12px;
      text-align: left;
      margin-right: 10px;
    }
    .yj_biaoge_tag {
      min-width: 70px;
      text-align: center;
    }
  }
  .xianwang_map_box {
    height: 600px;
    .xianwang_map_cont {
      height: 500px;
      background-color: #f1f4f5;
    }
  }
  .xianwang_keliu_cont {
    ul {
      padding: 0;
      li {
        list-style: none;
        margin-bottom: 20px;
      }
    }
  }
  .border{
    margin-top: 34px;
    border: 1px solid #e4e7ed
  }
  .chezhan_keliu_cont {
    ul {
      padding: 0;

      li {
        line-height: 30px;
        list-style: none;
        margin-bottom: 20px;
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
}
</style>