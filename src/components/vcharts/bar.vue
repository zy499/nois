<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-07-17 15:01:23
 * @LastEditors: zy
 * @LastEditTime: 2019-09-08 22:45:41
 -->
<template>
  <ve-bar :data="chartData" :extend="chartextend"></ve-bar>
</template>

<script>
export default {
  props: {},

  data () {
    const _self = this
    this.chartextend = {
      xAxis: {
        show: false
      },
      grid: {
        // left: '5%',
        top: '1%',
        bottom: '1%'
        // right: '10%'
      },
      tooltip: {
        show: false
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
      series (v) {
        v.forEach((i, index) => {
          v[0].barWidth = 8
          v[0].itemStyle = {
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
            },
            barBorderRadius: 10
          }
          v[0].label = {
            show: true,
            fontSize: 20,
            distance: 10,
            position: [0, '-100%'],
            formatter: function (param) {
              if (param.dataIndex < 3) {
                return `{yuanquan2| } {a|${
                          _self.chartData.rows[param.dataIndex]['地址'].split('|')[0]
                        }} {b|···} {a|${
                          _self.chartData.rows[param.dataIndex]['地址'].split('|')[1]
                        }}`
              } else {
                return `{yuanquan| } {a|${
                          _self.chartData.rows[param.dataIndex]['地址'].split('|')[0]
                        }} {b|···} {a|${
                          _self.chartData.rows[param.dataIndex]['地址'].split('|')[1]
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
            },
            offset: [0, -20],
            color: 'black'
          }
          v[1].itemStyle = {
            color: 'rgba(0, 0, 0, 0)'
          }
          v[1].label = {
            show: true,
            position: ['95%', '-60%'],
            fontSize: 14,
            color: '#7F8FA4'
          }
          v[2].type = 'bar'
          v[2].barGap = '-100%'
          v[2].animation = false
          v[2].barWidth = 8
          v[2].z = -1
          v[2].itemStyle = {
            color: '#E2E7EE',
            barBorderRadius: 10,
            emphasis: {
              color: '#E2E7EE'
            }
          }
        })
        return v
      }
    }
    return {
      chartData: {
        columns: ['地址', '客流量', '数据', '默认'],
        rows: [
          { 地址: '高新|火车南站', 客流量: 1393, 数据: 1393, 默认: 5000 },
          { 地址: '高新|火车南站', 客流量: 3530, 数据: 3530, 默认: 5000 },
          { 地址: '高新|火车南站', 客流量: 2923, 数据: 2923, 默认: 5000 },
          { 地址: '高新|火车南站', 客流量: 1723, 数据: 1723, 默认: 5000 },
          { 地址: '高新|火车南站', 客流量: 3792, 数据: 3792, 默认: 5000 },
          { 地址: '高新|火车南站', 客流量: 4593, 数据: 4593, 默认: 5000 },
          { 地址: '高新|火车南站', 客流量: 4593, 数据: 4593, 默认: 5000 }
        ]
      }
    }
  },
  created () {
    this.sortChartData()
  },
  methods: {
    sortChartData () {
      this.chartData.rows.sort((a, b) => {
        return a['客流量'] - b['客流量']
      })
      console.log(this.chartData)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
