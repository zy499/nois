<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-08-31 01:42:29
 * @LastEditors: zy
 * @LastEditTime: 2019-09-03 23:16:04
 -->
<template>
  <div class="tp-line-table-box">
    <el-table :data="tableData" style="font-size:14px;text-align:right;width:95%;">
      <el-table-column prop="name" label width="100px">
        <template slot-scope="scope">
          <div class="flexStart align-items-center" v-if="scope.row.name == '预计今日'" @click="openJryj">
            <span class="text-decoration margin_right_4">{{scope.row.name}}</span>
            <icon-svg name="columnar"></icon-svg>
          </div>
          <div v-else>{{scope.row.name}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="xwcxl" label="线路出行量" width="200px">
        <template slot-scope="scope">
          <div v-if="scope.row.name == '预计今日'" class="font_weight_bold">
            <span v-if="parseInt(scope.row.xwcxl.replace(/,/g,'')) > 1000000" style="color:red;">{{scope.row.xwcxl}}&nbsp;↑</span>
            <span v-else style="color:green;">{{scope.row.xwcxl}}&nbsp;↓</span>
          </div>
          <div v-else>{{scope.row.xwcxl}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="xwczl" label="线路出站量">
        <template slot-scope="scope">
          <div v-if="scope.row.name == '预计今日'" class="font_weight_bold">
            <span v-if="parseInt(scope.row.xwczl.replace(/,/g,'')) > 1000000" style="color:red;">{{scope.row.xwczl}}&nbsp;↑</span>
            <span v-else style="color:green;">{{scope.row.xwczl}}&nbsp;↓</span>
          </div>
          <div v-else>{{scope.row.xwczl}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="xwhxl" label="线路换行量">
        <template slot-scope="scope">
          <div v-if="scope.row.name == '预计今日'" class="font_weight_bold">
            <span v-if="parseInt(scope.row.xwhxl.replace(/,/g,'')) > 2000000" style="color:red;">{{scope.row.xwhxl}}&nbsp;↑</span>
            <span v-else style="color:green;">{{scope.row.xwhxl}}&nbsp;↓</span>
          </div>
          <div v-else>{{scope.row.xwhxl}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="xwkyl" label="线路客运量">
        <template slot-scope="scope">
          <div v-if="scope.row.name == '预计今日'" class="font_weight_bold">
            <span v-if="parseInt(scope.row.xwkyl.replace(/,/g,'')) > 2000000" style="color:red;">{{scope.row.xwkyl}}&nbsp;↑</span>
            <span v-else style="color:green;">{{scope.row.xwkyl}}&nbsp;↓</span>
          </div>
          <div v-else>{{scope.row.xwkyl}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="xwzxrs" label="线路在网人数">
        <template slot-scope="scope">
          <div v-if="scope.row.name == '预计今日'" class="font_weight_bold">
            <span v-if="parseInt(scope.row.xwzxrs.replace(/,/g,'')) > 1000000" style="color:red;">{{scope.row.xwzxrs}}&nbsp;↑</span>
            <span v-else style="color:green;">{{scope.row.xwzxrs}}&nbsp;↓</span>
          </div>
          <div v-else>{{scope.row.xwzxrs}}</div>
        </template>
      </el-table-column>
    </el-table>
    <!-- 预计今日弹窗 -->
    <TodayEstimate :isShow="isShow" @closeDialogFather="getSonCancel" />
  </div>
</template>

<script>
import TodayEstimate from '@/components/passengerFlow/passengerWarning/TodayEstimate'
export default {
  components: {
    TodayEstimate
  },
  data () {
    return {
      tableData: [
        {
          xwcxl: '352,143',
          xwczl: '420,751',
          xwhxl: '200,002',
          xwkyl: '572,415',
          xwzxrs: '12,808'
        },
        {
          name: '预计今日',
          xwcxl: '1,491,781',
          xwczl: '1,491,781',
          xwhxl: '1,491,781',
          xwkyl: '1,491,781',
          xwzxrs: '1,491,781'
        },
        {
          name: '上周同期',
          xwcxl: '1,491,781',
          xwczl: '1,491,781',
          xwhxl: '1,491,781',
          xwkyl: '1,491,781',
          xwzxrs: '1,491,781'
        },
        {
          name: '月日均值',
          xwcxl: '3,634,754',
          xwczl: '3,634,754',
          xwhxl: '3,634,754',
          xwkyl: '3,634,754',
          xwzxrs: '3,634,754'
        },
        {
          name: '峰值',
          xwcxl: '4,843,335',
          xwczl: '4,843,335',
          xwhxl: '4,843,335',
          xwkyl: '4,843,335',
          xwzxrs: '4,843,335'
        },
        {
          name: '年累计',
          xwcxl: '1,248,420,112',
          xwczl: '1,248,420,112',
          xwhxl: '1,248,420,112',
          xwkyl: '1,248,420,112',
          xwzxrs: '1,248,420,112'
        }
      ],
      isShow: false
    }
  },
  methods: {
    openJryj () {
      this.isShow = true
    },
    getSonCancel (val) {
      this.isShow = val
    }
  }
}
</script>

<style lang="scss" scoped>
.tp-line-table-box {
  /deep/ .el-table {
    font-size: 14px;
    color: #949EA8;
    font-weight: 600;
    td {
      text-align: right;
    }
    td ,
    th.is-leaf {
      border-bottom: none !important;
    }
    th {
      text-align: right;
    }
    .el-table__body-wrapper {
      .el-table__body {
        .el-table__row {
          td:first-child {
            text-align: left;
          }
        }
        .el-table__row:nth-child(1) {
          font-size: 24px;
          color: #202E3D;
        }
      }
    }
  }
  .text-decoration {
    text-decoration:underline;
    cursor: pointer; 
  }
}
</style>