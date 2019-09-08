<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-08-31 01:42:29
 * @LastEditors: zy
 * @LastEditTime: 2019-09-08 22:58:48
 -->
<template>
  <div class="yujingbiaoge">
    <el-card>
      <div slot="header">
        <template>
          <div class="flexStart align-items-center padding_left_20">
            <div>
              <span class="yj_biaoge_title">{{yj_biaoge_title}}指标</span>
            </div>
            <el-tooltip placement="right">
              <div slot="content">
                多行信息
                <br />第二行信息
              </div>
              <icon-svg class="curspr_pointer" name="wenhao" width="12px" height="12px"></icon-svg>
            </el-tooltip>
          </div>
        </template>
      </div>
      <div class="cont">
        <div class="tp-line-table-box">
          <!-- 线网指标头部 start -->
          <el-row type="flex" justify="center" class="margin-bottom20 lineNetworkHeader">
            <el-col
              v-for="(item, index) in ky_liang_option"
              :key="index"
              :span="4"
              class="text_center border_right_e8ecef"
            >
              <p class="font-size12 margin-bottom10 font_weight_500">{{item.name}}</p>
              <p class="font-size28 font_weight_600">{{item.num}}</p>
            </el-col>
          </el-row>
          <!-- 线网指标头部 end -->
        </div>
      </div>
    </el-card>
    <!-- 线网指标表格 start -->
    <div class="tp-line-table-box margin-bottom20">
      <div class="tableCont position_relative">
        <div
          class="position_absolute"
          style="top: 10px;
    right: 40px;
    font-size: 20px;
    cursor: pointer;"
          @click="taggleTable"
        >
          <icon-svg name="shangxiajiantou" style="color: #CED0DA;" :class="{'is-toggle':mark}"></icon-svg>
        </div>
        <el-table
          id="lineNetWorkTable"
          :data="tableData"
          :show-header="false"
          style="font-size:14px;text-align:right;"
        >
          <el-table-column prop="name" label width="100px">
            <template slot-scope="scope">
              <div
                class="flexStart align-items-center"
                v-if="scope.row.name == '预计今日'"
                @click="openJryj"
              >
                <span class="text-decoration margin_right_4 color_0091F2">{{scope.row.name}}</span>
                <icon-svg name="columnar"></icon-svg>
              </div>
              <div v-else>{{scope.row.name}}</div>
            </template>
          </el-table-column>
          <el-table-column prop="xwcxl">
            <template slot-scope="scope">
              <div v-if="scope.row.name == '预计今日'" class="font_weight_bold">
                <span
                  v-if="parseInt(scope.row.xwcxl.replace(/,/g,'')) > 1000000"
                  style="color:#FF2F78;" class="yj_arrow"
                >
                  <icon-svg class="margin_right_8" width="20px" height="20px" name="shangjiantou"></icon-svg>
                  {{scope.row.xwcxl}}
                </span>
                <span v-else style="color:#3BD19F;" class="yj_arrow">
                  <icon-svg class="margin_right_8" width="20px" height="20px" name="xiajiantou"></icon-svg>
                  {{scope.row.xwcxl}}
                </span>
              </div>
              <div v-else>{{scope.row.xwcxl}}</div>
            </template>
          </el-table-column>
          <el-table-column prop="xwczl">
            <template slot-scope="scope">
              <div v-if="scope.row.name == '预计今日'" class="font_weight_bold">
                <span
                  v-if="parseInt(scope.row.xwczl.replace(/,/g,'')) > 1000000"
                  style="color:#FF2F78;" class="yj_arrow"
                >
                  <icon-svg class="margin_right_8" width="20px" height="20px" name="shangjiantou"></icon-svg>
                  {{scope.row.xwczl}}
                </span>
                <span v-else style="color:#3BD19F;" class="yj_arrow">
                  <icon-svg class="margin_right_8" width="20px" height="20px" name="xiajiantou"></icon-svg>
                  {{scope.row.xwczl}}
                </span>
              </div>
              <div v-else>{{scope.row.xwczl}}</div>
            </template>
          </el-table-column>
          <el-table-column prop="xwhxl">
            <template slot-scope="scope">
              <div v-if="scope.row.name == '预计今日'" class="font_weight_bold">
                <span
                  v-if="parseInt(scope.row.xwhxl.replace(/,/g,'')) > 2000000"
                  style="color:#FF2F78;" class="yj_arrow"
                >
                  <icon-svg class="margin_right_8" width="20px" height="20px" name="shangjiantou"></icon-svg>
                  {{scope.row.xwhxl}}
                </span>
                <span v-else style="color:#3BD19F;" class="yj_arrow">
                  <icon-svg class="margin_right_8" width="20px" height="20px" name="xiajiantou"></icon-svg>
                  {{scope.row.xwhxl}}
                </span>
              </div>
              <div v-else>{{scope.row.xwhxl}}</div>
            </template>
          </el-table-column>
          <el-table-column prop="xwkyl">
            <template slot-scope="scope">
              <div v-if="scope.row.name == '预计今日'" class="font_weight_bold">
                <span
                  v-if="parseInt(scope.row.xwkyl.replace(/,/g,'')) > 2000000"
                  style="color:#FF2F78;" class="yj_arrow"
                >
                  <icon-svg class="margin_right_8" width="20px" height="20px" name="shangjiantou"></icon-svg>
                  {{scope.row.xwkyl}}
                </span>
                <span v-else style="color:#3BD19F;" class="yj_arrow">
                  <icon-svg class="margin_right_8" width="20px" height="20px" name="xiajiantou"></icon-svg>
                  {{scope.row.xwkyl}}
                </span>
              </div>
              <div v-else>{{scope.row.xwkyl}}</div>
            </template>
          </el-table-column>
          <el-table-column prop="xwzxrs">
            <template slot-scope="scope">
              <div v-if="scope.row.name == '预计今日'" class="font_weight_bold">
                 <span
                  v-if="parseInt(scope.row.xwzxrs.replace(/,/g,'')) > 1000000"
                  style="color:#FF2F78;" class="yj_arrow"
                >
                  <icon-svg class="margin_right_8" width="20px" height="20px" name="shangjiantou"></icon-svg>
                  {{scope.row.xwzxrs}}
                </span>
                <span v-else style="color:#3BD19F;" class="yj_arrow">
                  <icon-svg class="margin_right_8" width="20px" height="20px" name="xiajiantou"></icon-svg>
                  {{scope.row.xwzxrs}}
                </span>
              </div>
              <div v-else>{{scope.row.xwzxrs}}</div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 线网指标表格 end -->
    <!-- 预计今日弹窗 -->
    <TodayEstimate :isShow="isShow" @closeDialogFather="getSonCancel" />
  </div>
</template>

<script>
import TodayEstimate from '@/components/passengerFlow/passengerWarning/TodayEstimate'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('passengerFlowWaring')
export default {
  components: {
    TodayEstimate
  },
  data () {
    return {
      activeNames: ['1'],
      tableData: [
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
      ky_liang_option: [
        {
          name: '线网出行量',
          num: '352,143'
        },
        {
          name: '线网出站量',
          num: '420,751'
        },
        {
          name: '线网换行量',
          num: '200,002'
        },
        {
          name: '线网客运量',
          num: '572,415'
        },
        {
          name: '线网在网人数',
          num: '12,808'
        }
      ],
      isShow: false,
      mark: true
    }
  },
  computed: {
    ...mapState({
      yj_biaoge_title: 'xianlu_type'
    })
  },
  methods: {
    openJryj () {
      this.isShow = true
    },
    getSonCancel (val) {
      this.isShow = val
    },
    taggleTable () {
      let parentNode = document.querySelector('#lineNetWorkTable')
      let childNode = parentNode.getElementsByClassName(
        'el-table__body-wrapper'
      )[0]
      let trs = childNode.getElementsByTagName('tr')
      if (this.mark) {
        for (let i = 0; i < trs.length; i++) {
          let item = trs[i]
          if (i > 0) {
            item.style.visibility = 'collapse'
          }
        }
        this.mark = false
      } else {
        for (let i = 0; i < trs.length; i++) {
          let item = trs[i]
          if (i > 0) {
            item.style.visibility = 'visible'
          }
        }
        this.mark = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.yujingbiaoge {
  p {
    margin: 0;
  }
  /deep/ .el-card {
    border-bottom: none;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  /deep/ .el-card__body {
    padding: 10px 30px 0 30px;
  }
  .lineNetworkHeader {
    .border_right_e8ecef {
      border-right: 1px solid #E8ECEF;
    }
    .el-col:last-child {
      border-right: none;
    }
  }
}
.tp-line-table-box {
  .tableCont {
    border: 1px solid #ebeef5;
    background-color: #F8F9FA;
    padding: 0 30px 0 30px;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
    box-shadow: 0 2px 12px 0 rgba(0, 122, 255, 0.08)
  }
  /deep/ .el-table {
    width: 87%;
    font-size: 14px;
    color: #949ea8;
    // font-weight: 600;
    td {
      text-align: right;
      background-color: #F8F9FA;
    }
    td,
    th.is-leaf {
      border-bottom: none !important;
    }
    th {
      background-color: #F8F9FA;
      text-align: center;
    }
    .el-table__body-wrapper {
      .el-table__body {
        .el-table__row {
          td:first-child {
            text-align: left;
          }
        }
      }
    }
  }
  .text-decoration {
    text-decoration: underline;
  }
  .yj_arrow {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>