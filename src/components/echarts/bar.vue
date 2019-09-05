<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-09-05 14:05:56
 * @LastEditors: zy
 * @LastEditTime: 2019-09-05 15:53:42
 -->
<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
import resize from './mixins/resize'

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
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
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
      let arr = [11, 33, 77, 39, 55].sort((a, b) => a - b)
      this.chart = echarts.init(document.getElementById(this.id))

      this.chart.setOption({
        grid: {
          show: 'true',
          borderWidth: '0',
          height: '80%',
          width: '80%',
          x: '12%'
          // y:"20%",
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
          data: [
            '高新/火车南站',
            '高新/火车南站',
            '高新/火车南站',
            '高新/火车南站',
            '高新/火车南站'
          ]
        },
        series: [
          {
            name: '数据内框',
            type: 'bar',
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color (params) {
                  var colorList = [
                    {
                      colorStops: [
                        {
                          offset: 0,
                          color: '#f0515e'
                        },
                        {
                          offset: 1,
                          color: '#ef8554'
                        }
                      ]
                    },
                    {
                      colorStops: [
                        {
                          offset: 0,
                          color: '#3c38e4'
                        },
                        {
                          offset: 1,
                          color: '#24a5cd'
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
                textStyle: {
                  color: '#ccc',
                  fontSize: 14
                },
                formatter (param) {
                  var str = `{yuanquan|}  {a|${
                    param.name.split('/')[0]
                  }} {b|···} {a|${param.name.split('/')[1]}}`
                  return str
                },
                rich: {
                  yuanquan: {
                    width: 10,
                    height: 10,
                    borderWidth: 2,
                    borderColor: 'red',
                    borderType: 'solid',
                    borderRadius: 5
                  },
                  a: {
                    color: '#666',
                    fontSize: 14
                  },
                  b: {
                    fontSize: 30,
                    fontWeight: '800',
                    color: '#ccc'
                  }
                }
              }
            },
            barWidth: 15,
            data: arr
          },
          {
            name: '外框',
            type: 'bar',
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: '#eee' // rgba设置透明度0.14
              }
            },
            barGap: '-100%',
            z: 0,
            barWidth: 15,
            data: [100, 100, 100, 100, 100]
          }
        ]
      })
    }
  }
}
</script>
