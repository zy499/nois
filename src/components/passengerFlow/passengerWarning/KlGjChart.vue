<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-09-09 22:32:42
 * @LastEditors: zy
 * @LastEditTime: 2019-09-11 17:19:51
 -->
<template>
  <div>
    <div :id="id" :class="className" :style="{height:height,width:width}" />
    <p class="yj_title flexStart align-items-center">
      <icon-svg name="gaojing" class="yj_icon-svg margin_right_8"></icon-svg>
      <span class="font-size14 color_FF2F78">请注意，火车南站正在遭遇大客流</span>
    </p>
  </div>
</template>

<script>
import echarts from 'echarts'
import resize from '../../resize'
import bgImg from '@/assets/img/warning_gaoj_zhibiao_bg_icon.png'
var dataIPSxAxis = [{ name: '火车南站', value: 103.45 }]
var xAxisData = ['火车南站']
// var dataIPS = [0, 6, 5, 8, 12, 10]
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
    }
  },
  data () {
    return {
      chart: null,
      showDate: ''
    }
  },
  mounted () {
    this.initChart()
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart () {
      this.chart = echarts.init(document.getElementById(this.id))
      this.chart.setOption({
        title: {
          text: '拥挤度(%)',
          textStyle: {
            align: 'center',
            color: '#949EA8',
            fontSize: 12
          },
          top: '3%',
          left: '2%'
        },
        color: '#FF2F78',
        grid: {
          left: '8%',
          top: '18%',
          bottom: '10%',
          right: '5%',
          y2: 10
        },
        legend: {
          show: false
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: xAxisData,
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#6ba1bb',
                fontSize: 12
              }
              // formatter: ['{c}'].join(',')
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            padding: [0, 0, 0, 20],
            axisLine: {
              onZero: false,
              lineStyle: {
                color: '#0a2b52',
                width: 1 // 这里是为了突出显示加上的
              }
            },
            axisLabel: {
              formatter: function (val) {
                return val + ''
              },
              show: true,
              textStyle: {
                color: '#6ba1bb' // 字体颜色
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed'
              }
            }
          }
        ],
        series: [
          {
            name: '预警条数bar',
            type: 'bar',
            barWidth: 6,
            data: dataIPSxAxis,
            z: 99,
            label: {
              normal: {
                show: true,
                position: 'top',
                distance: 0,
                fontSize: 12,
                backgroundColor: {
                  image: bgImg
                },
                padding: [10, 10, 15, 10],
                borderRadius: 100,
                formatter: function (param) {
                  return `{a|${param.value}%}`
                },
                rich: {
                  a: {
                    color: '#fff',
                    align: 'center',
                    fontSize: 12
                  }
                }
              }
            }
          }
        ]
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.yj_title {
  margin: 0;
  padding-left: 16px;
  .yj_icon-svg {
    font-size: 24px;
  }
}
</style>