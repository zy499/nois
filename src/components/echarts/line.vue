<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-08-24 21:21:06
 * @LastEditors: zy
 * @LastEditTime: 2019-09-01 22:28:37
 -->
<template>
  <div class="chart-box chartLineBox" style="height:300px"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      chartLine: null
    }
  },
  mounted () {
    this.initChartLine()
  },
  activated () {
    if (this.chartLine) {
      this.chartLine.resize()
    }
  },
  methods: {
    // 折线图
    initChartLine () {
      var option = {
        // title: {
        //   text: '折线图堆叠'
        // },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
      this.$nextTick(() => {
        this.chartLine = echarts.init(document.querySelector('.chartLineBox'))
        this.chartLine.setOption(option)
        window.addEventListener('resize', () => {
          this.chartLine.resize()
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-box {
  min-height: 300px;
}
</style>