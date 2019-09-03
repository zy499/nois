<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-08-31 21:29:34
 * @LastEditors: zy
 * @LastEditTime: 2019-08-31 21:43:36
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
      <el-table-column prop="czjzl" label="车站进站量" width="200px">
        <template slot-scope="scope">
          <div v-if="scope.row.name == '今日预计'">
            <span
              :style="{'color': parseInt(scope.row.czjzl.replace(/,/g,'')) > 1000000 ? 'red':'green'}"
            >{{scope.row.czjzl}}</span>
          </div>
          <div v-else>{{scope.row.czjzl}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="czczl" label="车站出站量">
        <template slot-scope="scope">
          <div v-if="scope.row.name == '今日预计'">
            <span
              :style="{'color': parseInt(scope.row.czczl.replace(/,/g,'')) > 1000000 ? 'red':'green'}"
            >{{scope.row.czczl}}</span>
          </div>
          <div v-else>{{scope.row.czczl}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="datejzl" label="15min进站量">
        <template slot-scope="scope">
          <div v-if="scope.row.name == '今日预计'">
            <span
              :style="{'color': parseInt(scope.row.datejzl.replace(/,/g,'')) > 2000000 ? 'red':'green'}"
            >{{scope.row.datejzl}}</span>
          </div>
          <div v-else>{{scope.row.datejzl}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="dateczl" label="15min出站量">
        <template slot-scope="scope">
          <div v-if="scope.row.name == '今日预计'">
            <span
              :style="{'color': parseInt(scope.row.dateczl.replace(/,/g,'')) > 2000000 ? 'red':'green'}"
            >{{scope.row.dateczl}}</span>
          </div>
          <div v-else>{{scope.row.dateczl}}</div>
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
          czjzl: '352,143',
          czczl: '420,751',
          datejzl: '200,002',
          dateczl: '572,415'
        },
        {
          name: '今日预计',
          czjzl: '1,491,781',
          czczl: '1,491,781',
          datejzl: '1,491,781',
          dateczl: '1,491,781'
        },
        {
          name: '上周同期',
          czjzl: '1,491,781',
          czczl: '1,491,781',
          datejzl: '1,491,781',
          dateczl: '1,491,781'
        },
        {
          name: '月日均值',
          czjzl: '3,634,754',
          czczl: '3,634,754',
          datejzl: '3,634,754',
          dateczl: '3,634,754'
        },
        {
          name: '峰值',
          czjzl: '4,843,335',
          czczl: '4,843,335',
          datejzl: '4,843,335',
          dateczl: '4,843,335'
        },
        {
          name: '年累计',
          czjzl: '1,248,420,112',
          czczl: '1,248,420,112',
          datejzl: '1,248,420,112',
          dateczl: '1,248,420,112'
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
    td {
      text-align: right;
    }
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