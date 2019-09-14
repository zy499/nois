<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-09-09 22:32:42
 * @LastEditors: zy
 * @LastEditTime: 2019-09-14 17:23:24
 -->
<template>
  <div>
    <div :id="id" :class="className" :style="{height:height,width:width}" />
  </div>
</template>

<script>
import echarts from 'echarts'
import resize from '../resize'
var rows = [
  {
    时间: '05:00',
    进站量: 3489,
    出站量: 1489,
    换乘量: 2489,
    客运量: 12541
  },
  {
    时间: '06:00',
    进站量: 6489,
    出站量: 7489,
    换乘量: 9489,
    客运量: 22541
  },
  {
    时间: '07:00',
    进站量: 9489,
    出站量: 8489,
    换乘量: 8489,
    客运量: 32541
  },
  {
    时间: '08:00',
    进站量: 41489,
    出站量: 36589,
    换乘量: 10489,
    客运量: 45632
  },
  {
    时间: '09:00',
    进站量: 22978,
    出站量: 20989,
    换乘量: 9489,
    客运量: 44444
  },
  {
    时间: '10:00',
    进站量: 13567,
    出站量: 9489,
    换乘量: 7000,
    客运量: 20354
  },
  {
    时间: '11:00',
    进站量: 12456,
    出站量: 8489,
    换乘量: 10489,
    客运量: 19563
  },
  {
    时间: '12:00',
    进站量: 35632,
    出站量: 20489,
    换乘量: 11189,
    客运量: 40639
  },
  {
    时间: '13:00',
    进站量: 28945,
    出站量: 19889,
    换乘量: 10489,
    客运量: 33333
  },
  {
    时间: '14:00',
    进站量: 14890,
    出站量: 13689,
    换乘量: 12189,
    客运量: 19820
  },
  {
    时间: '15:00',
    进站量: 19870,
    出站量: 10489,
    换乘量: 16987,
    客运量: 22222
  },
  {
    时间: '16:00',
    进站量: 16541,
    出站量: 11089,
    换乘量: 9999,
    客运量: 19802
  },
  {
    时间: '17:00',
    进站量: 36541,
    出站量: 26089,
    换乘量: 18997,
    客运量: 33365
  },
  {
    时间: '18:00',
    进站量: 65423,
    出站量: 36589,
    换乘量: 32511,
    客运量: 73250
  },
  {
    时间: '19:00',
    进站量: 41230,
    出站量: 40039,
    换乘量: 12365,
    客运量: 65201
  },
  {
    时间: '20:00',
    进站量: 33333,
    出站量: 31489,
    换乘量: 19365,
    客运量: 32415
  },
  {
    时间: '21:00',
    进站量: 31258,
    出站量: 29489,
    换乘量: 11111,
    客运量: 40304
  },
  {
    时间: '22:00',
    进站量: 12365,
    出站量: 9489,
    换乘量: 8603,
    客运量: 22310
  },
  {
    时间: '23:00',
    进站量: 9365,
    出站量: 7489,
    换乘量: 4603,
    客运量: 12310
  },
  {
    时间: '24:00',
    进站量: 2365,
    出站量: 6489,
    换乘量: 2603,
    客运量: 6310
  }
]
var dataIPSxAxis = []
var dataJz = []
var dataCz = []
var dataHc = []
var dataKy = []
rows.forEach(item => {
  dataIPSxAxis.push(item['时间'])
  dataJz.push(item['进站量'])
  dataCz.push(item['出站量'])
  dataHc.push(item['换乘量'])
  dataKy.push(item['客运量'])
})
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
        backgroundColor: '#fff',
        tooltip: {
          trigger: 'axis',
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#E8ECEF',
          axisPointer: {
            lineStyle: {
              color: '#57617B'
            }
          },
          textStyle: {
            color: '#556270',
            fontSize: '12px'
          },
          formatter (param) {
            return `<div style="width:160px;">
                      <p style="border-bottom:1px solid rgba(232,236,239,1); padding-left:10px;">${param[0].axisValue}</p>
                      <p style="border-bottom:1px solid rgba(232,236,239,1);padding:10px 0">
                        <span style="display: inline-block;width:10px;height:10px;background-color:#3BD19F;border-radius:5px;margin:0 6px"></span>
                        <span>${param[0].seriesName}:&nbsp;&nbsp;${param[0].value}</span>
                        <span></span>
                      </p>
                       <p style="border-bottom:1px solid rgba(232,236,239,1);padding:10px 0">
                        <span style="display: inline-block;width:10px;height:10px;background-color:#FF2F78;border-radius:5px;margin:0 6px"></span>
                        <span>${param[1].seriesName}:&nbsp;&nbsp;${param[1].value}</span>
                        <span></span>
                      </p>
                       <p style="border-bottom:1px solid rgba(232,236,239,1);padding:10px 0">
                        <span style="display: inline-block;width:10px;height:10px;background-color:#3553FF;border-radius:5px;margin:0 6px"></span>
                        <span>${param[2].seriesName}:&nbsp;&nbsp;${param[2].value}</span>
                        <span></span>
                      </p>
                       <p style="padding:10px 0">
                        <span style="display: inline-block;width:10px;height:10px;background-color:#FA852E;border-radius:5px;margin:0 6px"></span>
                        <span>${param[3].seriesName}:&nbsp;&nbsp;${param[3].value}</span>
                        <span></span>
                      </p>
                    </div>`
          },
          rich: {
            a: {

            }
          }
        },
        legend: {
          icon: 'circle',
          itemWidth: 10,
          itemHeight: 10,
          data: ['进站量', '出站量', '换乘量', '客运量'],
          right: '2%',
          textStyle: {
            fontSize: 14,
            color: '#354052',
            padding: [0, 20, 0, 0]
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: 'rgba(148, 158, 168, 1)'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#000'
            },
            data: dataIPSxAxis
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              margin: 20,
              textStyle: {
                fontSize: 12,
                color: 'rgba(148, 158, 168, 1)'
              }
            },
            splitLine: {
              lineStyle: {
                type: 'dashed'
              }
            }
          }
        ],
        series: [
          {
            name: '进站量',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            itemStyle: {
              normal: {
                color: 'rgba(59, 209, 159, 1)',
                borderWidth: 16
              }
            },
            data: dataJz
          },
          {
            name: '出站量',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            itemStyle: {
              normal: {
                color: 'rgba(255, 47, 120, 1)',
                borderWidth: 16
              }
            },
            data: dataCz
          },
          {
            name: '换乘量',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(53, 83, 255, .6)'
                }, {
                  offset: 1,
                  color: 'rgba(255,255,255,0.6)'
                }], false),
                opacity: 0.3
              }
            },
            itemStyle: {
              normal: {
                color: 'rgba(53, 83, 255, 1)',
                borderWidth: 16
              }
            },
            data: dataHc
          },
          {
            name: '客运量',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            itemStyle: {
              normal: {
                color: 'rgba(250, 133, 46, 1)',
                borderWidth: 16
              }
            },
            data: dataKy
          }
        ]
      })
    }
  }
}
</script>