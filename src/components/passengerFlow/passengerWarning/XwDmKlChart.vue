<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-09-05 14:05:56
 * @LastEditors: zy
 * @LastEditTime: 2019-09-10 15:40:30
 -->
<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
import resize from '../../resize'
const chartData = {
  dizhi: [
    '高新/火车南站',
    '高新/火车南站',
    '高新/火车南站',
    '高新/火车南站',
    '高新/火车南站',
    '高新/火车南站',
    '高新/火车南站'
  ],
  keliu: [
    1393, 3530, 2923, 1723, 3792, 4593, 2703
  ],
  zuida: [5000, 5000, 5000, 5000, 5000, 5000, 5000]
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
          right: '1%',
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
          data: chartData.dizhi
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
                          color: '#FFCCB0'
                        },
                        {
                          offset: 1,
                          color: '#FE789D'
                        }
                      ]
                    },
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
                  if (params.dataIndex < 3) {
                    return colorList[1]
                  } else {
                    return colorList[0]
                  }
                }
              }
            },
            label: {
              z: 2,
              normal: {
                show: true,
                position: [0, '-30px'],
                fontSize: 20,
                distance: 10,
                formatter (param) {
                  if (param.dataIndex < 3) {
                    return `{yuanquan2| } {a|${
                      param.name.split(
                        '/'
                      )[0]
                    }} {b|···} {a|${
                      param.name.split(
                        '/'
                      )[1]
                    }}`
                  } else {
                    return `{yuanquan| } {a|${
                      param.name.split(
                        '/'
                      )[0]
                    }} {b|···} {a|${
                      param.name.split(
                        '/'
                      )[1]
                    }}`
                  }
                },
                rich: {
                  yuanquan: {
                    width: 10,
                    height: 10,
                    borderWidth: 2,
                    borderColor: '#FF2F78',
                    borderType: 'solid',
                    borderRadius: 5
                  },
                  yuanquan2: {
                    width: 10,
                    height: 10,
                    borderWidth: 2,
                    borderColor: '#0091F2',
                    borderType: 'solid',
                    borderRadius: 5
                  },
                  a: {
                    color: '#354052',
                    fontSize: 14
                  },
                  b: {
                    fontSize: 30,
                    fontWeight: '800',
                    color: '#C5CDD6'
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
                position: 'right',
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
