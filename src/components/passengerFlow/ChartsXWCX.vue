<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-09-11 14:48:56
 * @LastEditors: zy
 * @LastEditTime: 2019-09-11 15:05:05
 -->
<template>
  <ve-line :data="chartData" :extend="chartsextend"></ve-line>
</template>

<script>
export default {
  data: function () {
    // const self = this
    return {

      chartsextend: {
        legend: {
          icon: 'circle', // circle，rect ，roundRect，triangle，diamond，pin，arrow，none
          itemWidth: 8, // 设置宽度
          itemHeight: 8, // 设置高度
          //   itemGap: 40 // 设置间距
          right: 20
        },
        grid: {
          left: 20,
          top: 30,
          bottom: '1%',
          y2: 10
          // right:'10%'
        },
        series: {
          Symbol: 'none',
          smoth: false,
          showSymbol: false
        }
        // tooltip (v) {
        //   // axisPointer为直线 可设置为shadow
        //   // v.axisPointer ={
        //   //     type:'line'
        //   // }
        //   v.formatter = function ([params]) {
        //     const str = `
        //             <div style="background:#fff;border:1px solid #E8ECEF">
        //               <p style="margin:0;padding:0;color:#556270;border-bottom:1px solid #F0F4F7">${self.chartData.rows[params.dataIndex]['时间']}</p>
        //               <span style="display:inline-block">${self.chartData.columns[1]}:${self.chartData.rows[params.dataIndex]['进站量']}</span>
        //             </div>
        //             `
        //     return str
        //   }
        //   return v
        // }
      },
      chartData: {
        columns: ['时间', '进站量', '出站量', '换乘量', '客运量'],
        rows: [
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
          }
        ]
      }
    }
  }
}
</script>