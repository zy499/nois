<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-09-09 22:32:42
 * @LastEditors: zy
 * @LastEditTime: 2019-09-12 14:16:22
 -->
<template>
  <div style>
    <div class="titleBox">
      <p class="title">{{dataTitle.zuida}}%</p>
      <p class="subTitle">{{dataTitle.type}}</p>
    </div>
    <div :id="id" :class="className" :style="{height:height,width:width}" />
    <p class="dizhi flexStart align-items-center">{{dataTitle.dizhi.start}}<icon-svg name="youjiantou" style="margin:0 6px"></icon-svg>{{dataTitle.dizhi.end}}</p>
  </div>
</template>

<script>
import echarts from 'echarts'
import resize from '../resize'

var dataIPSxAxis = ['09:00', '09:05', '09:10', '09:15', '09:20', '09:25']
var dataIPS = [77, 88, 99, 66, 103, 116.2]
// var dizhi = ['高新|火车南站', '高新|火车南站', '高新|火车南站', '高新|火车南站', '高新|火车南站', '高新|火车南站']
export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '400px'
    },
    dataTitle: {
      type: Object,
      default: () => {
        return {
          zuida: 116.2,
          type: '上行',
          dizhi: {
            start: '高新',
            end: '火车南站'
          }
        }
      }
    }
  },
  data () {
    return {
      chart: null,
      showDate: ''
    }
  },
  mounted () {
    this.showChart()
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    showChart () {
      if (this.dataTitle.zuida > 100) {
        this.initChart(
          'rgba(255, 47, 120, 1)',
          'rgba(255, 47, 120, .4)',
          'rgba(255, 47, 120, .1)'
        )
      } else if (this.dataTitle.zuida < 100 && this.dataTitle.zuida > 80) {
        this.initChart(
          'rgba(250, 133, 46, 1)',
          'rgba(250, 133, 46, .4)',
          'rgba(250, 133, 46, .1)'
        )
      } else if (this.dataTitle.zuida < 80 && this.dataTitle.zuida > 60) {
        this.initChart(
          'rgba(250, 192, 3, 1)',
          'rgba(250, 192, 3, .4)',
          'rgba(250, 192, 3, .1)'
        )
      } else {
        this.initChart(
          'rgba(59, 209, 159, 1)',
          'rgba(59, 209, 159, .4)',
          'rgba(59, 209, 159, .1)'
        )
      }
    },
    initChart (color, colorStops, colorStops2) {
      this.chart = echarts.init(document.getElementById(this.id))
      this.chart.setOption({
        color: color,
        grid: {
          top: 0,
          bottom: 0
        },
        legend: {
          show: false
        },
        yAxis: {
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        toolTip: {
          show: true
        },
        xAxis: {
          axisLabel: {
            show: false
          },
          type: 'category',
          boundaryGap: false,
          data: dataIPSxAxis,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        series: [
          {
            name: '拥挤度',
            type: 'line',
            smooth: true,
            symbol: 'none', // 去掉折线点
            stack: 100, // 线条样式
            symbolSize: 10, // 折线点的大小
            areaStyle: {
              color: {
                colorStops: [
                  {
                    offset: 0,
                    color: colorStops
                  },
                  {
                    offset: 1,
                    color: colorStops2
                  }
                ]
              }
            },
            data: dataIPS
          }
        ]
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.titleBox {
  padding-left: 20px;
  .title {
    font-size: 24px;
    font-weight: 600;
  }
  .subTitle {
    font-size: 14px;
    color: #7f8fa4;
    line-height: 30px;
  }
}
.dizhi {
  font-size: 12px;
  color: #556270;
  padding-left: 22px;
  margin-top: 20px;
}
</style>