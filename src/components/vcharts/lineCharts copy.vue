<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-09-10 16:42:02
 * @LastEditors: zy
 * @LastEditTime: 2019-09-11 10:20:51
 -->
<template>
  <ve-line :data="chartData" :extend="chartsextend" height="200px" width="240px"></ve-line>
</template>

<script>
export default {
  data: function () {
    return {
      chartsextend: {
        legend: {
          show: false
        },
        xAxis: {
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
        yAxis: {
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        title: {
          text: '116.20%',
          subtext: '上行',
          textStyle: {
            color: '#354052',
            fonstSizez: 24
          },
          subtextStyle: {
            color: '#7F8FA',
            fonstSizez: 14
          }
        },
        series: {
          Symbol: 'none',
          smoth: false,
          showSymbol: false,
          hoverAnimation: false,
          itemStyle: {
            normal: {
              color: '#FF2F78', // 折点颜色
              lineStyle: {
                color: '#FF2F78' // 折线颜色
              }
            }
          },
          areaStyle: {
            color: {
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
            }
          }
        }
      },
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { 日期: '1/1', 访问用户: 1393 },
          { 日期: '1/2', 访问用户: 3530 },
          { 日期: '1/3', 访问用户: 2923 },
          { 日期: '1/4', 访问用户: 172 },
          { 日期: '1/5', 访问用户: 3792 },
          { 日期: '1/6', 访问用户: 4593 }
        ]
      }
    }
  }
}
</script>