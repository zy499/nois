<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-09-09 22:32:42
 * @LastEditors: zy
 * @LastEditTime: 2019-09-10 00:59:43
 -->
<template>
  <!-- <div> -->
  <!-- <ve-line :data="chartData" :extend="chartsextend" :settings="chartSettings"></ve-line> -->
  <div :id="id" :class="className" :style="{height:height,width:width}" />
  <!-- </div> -->
</template>

<script>
import echarts from 'echarts'
import resize from '../../resize'
var dataIPSxAxis = [
  '09:00',
  '09:05',
  '09:10',
  '09:15',
  '09:20',
  '09:25'
]
var dataIPS = [2, 6, 5, 8, 12, 10]
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
      this.chart = echarts.init(document.getElementById(this.id))
      this.chart.setOption({
        color: '#FF2F78',
        grid: {
          left: '5%',
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
            boundaryGap: true,
            data: dataIPSxAxis,
            axisLabel: {
              show: true,
              textStyle: {
                color: '#6ba1bb',
                fontSize: 12
              },
              formatter: function (value) {
                return value
              }
            },
            axisLine: {
              lineStyle: {
                color: '#0a2b52',
                width: 0.5 // 这里是为了突出显示加上的
              }
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
            name: '最高水量',
            type: 'line',
            smooth: true,
            //  symbol: "none", //去掉折线点
            stack: 100, // 线条样式
            symbolSize: 10, // 折线点的大小
            areaStyle: {
              color: {
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(255, 47, 120, .4)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(255, 47, 120, .1)'
                  }
                ]
              }
            },
            data: dataIPS
          },
          {
            name: '最高水量',
            type: 'bar',
            barWidth: 1,
            data: dataIPS,
            z: 99,
            label: {
              normal: {
                show: true,
                lineHeight: 30,
                width: 80,
                height: 30,
                backgroundColor: '#FA852E',
                borderRadius: 5,
                position: ['-41', '-60'],
                distance: 1,
                formatter: function (param) {
                  console.log(param)
                  return `{a|预警 :}{a| ${param.data} 条} \n {b| }`
                },
                rich: {
                  d: {
                    color: '#3CDDCF'
                  },
                  a: {
                    color: '#fff',
                    align: 'center',
                    fontSize: 12
                  },
                  b: {
                    width: 1,
                    height: 30,
                    borderWidth: 1,
                    borderColor: '#FF2F78',
                    align: 'center'
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