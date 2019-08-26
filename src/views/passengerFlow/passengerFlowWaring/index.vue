<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-08-24 17:01:27
 * @LastEditors: zy
 * @LastEditTime: 2019-08-25 20:27:42
 -->
<template>
  <div class="passengerFlowWaringBody">
    <!-- header start -->
    <div class="header margin-bottom30">
      <div class="header-body">
        <el-row type="flex" justify="space-between">
          <el-col :span="8">
            <p class="title">客流监测与预警</p>
            <el-row>
              <el-col :span="12">
                <span class="keliu-title-Font">维度：</span>
                <el-select v-model="xianwang_val" placeholder="请选择">
                  <el-option
                    v-for="item in xianwang_option"
                    :label="item.label"
                    :value="item.value"
                    :key="item.value"
                  ></el-option>
                </el-select>
              </el-col>
              <el-col :span="12">
                <span class="keliu-title-Font">时间：</span>
                <el-select v-model="date_val" @change="changeDate" placeholder="请选择">
                  <el-option
                    v-for="item in date_option"
                    :label="item.label"
                    :value="item.value"
                    :key="item.value"
                  ></el-option>
                </el-select>
              </el-col>
            </el-row>
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
    <el-card class="yujingbiaoge">
      <div slot="header">
        <span class="yj_biaoge_title">1号线</span>
        <span class="yj_biaoge_date">{{yj_biaoge_date}}</span>
        <el-tag class="yj_biaoge_tag" type="info">{{yj_biaoge_tag}}</el-tag>
      </div>
    </el-card>
    <!-- content end -->
  </div>
</template>

<script>
import { parseTime } from '@/utils'
export default {
  data () {
    return {
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
      yj_biaoge_date: '',
      yj_biaoge_tag: '实时'
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
    changeDate (val) {
      const item = this.date_option.filter(item => {
        if (item.value === val) {
          return item
        }
      })
      this.yj_biaoge_tag = item[0]['label']
    }
  }
}
</script>
<style lang='scss' scoped>
.passengerFlowWaringBody {
  .header {
    .header-body {
      .title {
        color: #101010;
        font-size: 20px;
        font-family: Roboto-regular;
        margin-bottom: 10px;
      }
      /deep/ .el-select--medium {
        // width: 80px;
        // margin-left: -8px;
        .el-input--medium,
        .el-input--suffix {
          background: #fff;
          .el-input__inner {
            background: #fff;
            border: none;
            height: 12px;
            line-height: 12px;
            text-align: center;
            padding-left: 0px;
            color: #101010;
          }
          .el-input__suffix {
            right: 12px;
            .el-input__icon {
              font-size: 10px;
            }
          }
        }
      }
    }
  }
  .yujingbiaoge {
    min-height: 272px;
    /deep/ .el-card__header {
      border-bottom: none;
    }
    .yj_biaoge_title {
      color: rgba(16, 16, 16, 1);
      font-size: 16px;
      text-align: left;
      font-family: Roboto-regular;
      margin-right: 30px;
    }
    .yj_biaoge_date {
      color: rgba(16, 16, 16, 0.5);
      font-size: 12px;
      text-align: left;
      font-family: Roboto-regular;
      margin-right: 10px;
    }
    .yj_biaoge_tag {
      min-width: 70px;
      text-align: center;
    }
  }
  p {
    margin: 0;
  }
  .keliu-title-Font {
    color: rgba(16, 16, 16, 0.5);
    font-size: 12px;
    font-family: Roboto-regular;
  }
  .tianqiFont {
    color: rgba(16, 16, 16, 0.5);
    font-size: 12px;
    font-family: Roboto-regular;
  }
  .pub-yujing-font {
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    font-family: Roboto-regular;
  }
}
</style>