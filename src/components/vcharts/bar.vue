<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-09-05 11:11:21
 * @LastEditors: zy
 * @LastEditTime: 2019-09-05 13:04:48
 -->
<template>
  <ve-bar :data="chartData" :settings="chartSettings" :extend="extend"></ve-bar>
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      dimension: ['日期'],
      metrics: ['访问用户']
    }
    this.extend = {
      xAxis: {
        show: false,
        type: 'value'
      },
      yAxis: {
        type: 'category',
        inverse: false,
        axisLabel: {
          show: false
        },
        splitLine: { show: false }, // 横向的线
        axisTick: { show: false }, // y轴的端点
        axisLine: { show: false },
        data: ['sss', '2efe', 'rgre', 'rhth']
      },
      series:
      {
        // name: '数据内框',
        type: 'bar',
        itemStyle: {
          normal: {
            barBorderRadius: 30,
            color: '#00b5eb'
          }
        },
        label: {
          normal: {
            show: true,
            position: [0, '-25px'],
            formatter: '{b}',
            textStyle: {
              color: '#fff',
              fontSize: 14
            }
          }
        },
        barWidth: 30
      }

    }
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { 日期: '1/1', 访问用户: 1393 },
          { 日期: '1/2', 访问用户: 3530 },
          { 日期: '1/3', 访问用户: 2923 },
          { 日期: '1/4', 访问用户: 1723 }
        ]
      }
    }
  }
}
</script>