<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-09-05 14:05:56
 * @LastEditors: zy
 * @LastEditTime: 2019-09-11 17:19:41
 -->
<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
import resize from '../../resize'
const chartData = {
  dizhi: [
    '成都东客站',
    '天府广场',
    '火车南站',
    '犀浦',
    '犀浦',
    '犀浦',
    '犀浦',
    '犀浦',
    '犀浦',
    '犀浦'
  ],
  keliu: [
    1393, 3530, 2923, 1723, 3792, 4593, 2703, 3200, 1878, 2655
  ],
  zuida: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000]
}
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
      default: '430px'
    }
  },
  data () {
    return {
      chart: null
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
      chartData.keliu.sort((a, b) => a - b)
      this.chart = echarts.init(document.getElementById(this.id))

      this.chart.setOption({
        grid: {
          top: '1%',
          left: '1%',
          right: '2%',
          bottom: '1%'
        },
        tooltip: {
          show: false
        },
        backgroundColor: '#fff', // 背景色
        xAxis: {
          show: false, // 是否显示x轴
          type: 'value'
        },
        yAxis: {
          type: 'category',
          inverse: false, // 让y轴数据逆向
          axisLabel: {
            show: false
          },
          splitLine: { show: false }, // 横向的线
          axisTick: { show: false }, // y轴的端点
          axisLine: { show: false }, // y轴的线
          data: chartData.dizhi.reverse()
        },
        series: [
          {
            name: '数据内框',
            type: 'bar',
            itemStyle: {
              normal: {
                barBorderRadius: 10,
                color (params) {
                  var colorList = [
                    {
                      colorStops: [
                        {
                          offset: 0,
                          color: '#8FD6FF'
                        },
                        {
                          offset: 1,
                          color: '#005DFF'
                        }
                      ]
                    }
                  ]
                  return colorList[0]
                }
              }
            },
            label: {
              z: 2,
              normal: {
                show: true,
                position: [0, -20],
                fontSize: 20,
                distance: 10,
                formatter (param) {
                  return `{a| ${param.name}}`
                },
                rich: {
                  a: {
                    color: '#354052',
                    fontSize: 14
                  }
                }
              }
            },
            barWidth: 8,
            data: chartData.keliu
          },
          {
            name: '外框',
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#E2E7EE',
                barBorderRadius: 10
              }
            },
            emphasis: {
              itemStyle: {color: '#E2E7EE'}
            },
            barGap: '-100%',
            z: 0,
            barWidth: 8,
            data: chartData.zuida
          },
          {
            name: '数量',
            type: 'bar',
            color: 'rgba(0,0,0,0)',
            z: 2,
            label: {
              normal: {
                show: true,
                position: [270, -20],
                textStyle: {
                  color: '#7F8FA4',
                  fontSize: '14'
                }
              }
            },
            barGap: '-100%',
            barWidth: 8,
            data: chartData.keliu
          }
        ]
      })
    }
  }
}
</script>
