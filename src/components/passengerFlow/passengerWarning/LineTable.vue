<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-08-31 01:42:29
 * @LastEditors: zy
 * @LastEditTime: 2019-08-31 21:38:44
 -->
<template>
  <div class="tp-line-table-box">
    <el-table :data="tableData" style="font-size:14px;text-align:right;width:95%;">
      <el-table-column prop="name" label width="70px">
        <template slot-scope="scope">
          <div v-if="scope.row.name == '今日预计'" @click="openJryj">
            <span class="text-decoration">{{scope.row.name}}</span>
          </div>
          <div v-else>{{scope.row.name}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="xwcxl" label="线路出行量" width="200px">
        <template slot-scope="scope">
          <div v-if="scope.row.name == '今日预计'">
            <span
              :style="{'color': parseInt(scope.row.xwcxl.replace(/,/g,'')) > 1000000 ? 'red':'green'}"
            >{{scope.row.xwcxl}}</span>
          </div>
          <div v-else>{{scope.row.xwcxl}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="xwczl" label="线路出站量">
        <template slot-scope="scope">
          <div v-if="scope.row.name == '今日预计'">
            <span
              :style="{'color': parseInt(scope.row.xwczl.replace(/,/g,'')) > 1000000 ? 'red':'green'}"
            >{{scope.row.xwczl}}</span>
          </div>
          <div v-else>{{scope.row.xwczl}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="xwhxl" label="线路换行量">
        <template slot-scope="scope">
          <div v-if="scope.row.name == '今日预计'">
            <span
              :style="{'color': parseInt(scope.row.xwhxl.replace(/,/g,'')) > 2000000 ? 'red':'green'}"
            >{{scope.row.xwhxl}}</span>
          </div>
          <div v-else>{{scope.row.xwhxl}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="xwkyl" label="线路客运量">
        <template slot-scope="scope">
          <div v-if="scope.row.name == '今日预计'">
            <span
              :style="{'color': parseInt(scope.row.xwkyl.replace(/,/g,'')) > 2000000 ? 'red':'green'}"
            >{{scope.row.xwkyl}}</span>
          </div>
          <div v-else>{{scope.row.xwkyl}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="xwzxrs" label="线路在网人数">
        <template slot-scope="scope">
          <div v-if="scope.row.name == '今日预计'">
            <span
              :style="{'color': parseInt(scope.row.xwzxrs.replace(/,/g,'')) > 1000000 ? 'red':'green'}"
            >{{scope.row.xwzxrs}}</span>
          </div>
          <div v-else>{{scope.row.xwzxrs}}</div>
        </template>
      </el-table-column>
    </el-table>
    <!-- 今日预计弹窗 -->
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
          name: '今日预计',
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
    td,
    th.is-leaf {
      border-bottom: none !important;
    }
    th {
      text-align: right;
      color: rgba(16, 16, 16, 0.5);
      font-size: 12px;
    }
    .el-table__body-wrapper {
      .el-table__body {
        .el-table__row {
          td:first-child {
            text-align: left;
            color: rgba(16, 16, 16, 0.5);
            font-size: 12px;
          }
        }
        .el-table__row:nth-child(1) {
          color: rgba(16, 16, 16, 1);
          font-size: 24px;
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