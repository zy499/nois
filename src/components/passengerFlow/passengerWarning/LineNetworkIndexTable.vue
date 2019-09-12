<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-08-31 01:42:29
 * @LastEditors: zy
 * @LastEditTime: 2019-09-12 12:47:25
 -->
<template>
  <div class="yujingbiaoge">
    <div>
      <div>
        <template>
          <div
            class="flexStart align-items-center padding_left_20 padding-bottom20"
            style="padding-top: 20px;"
          >
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
      <!-- <div class="cont">
        <div class="tp-line-table-box">
          <el-row type="flex" justify="center" class="lineNetworkHeader">
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
        </div>
      </div> -->
    </div>
    <!-- 线网指标表格 start -->
    <div class="tp-line-table-box">
      <div class="tableCont position_relative">
        <div
          class="position_absolute"
          style="top: 96px;
    right: 40px;
    font-size: 20px;
    cursor: pointer;"
          @click="taggleTable"
        >
          <icon-svg name="shangxiajiantou" style="color: #CED0DA;" :class="{'is-toggle':mark}"></icon-svg>
        </div>
        <el-table id="lineNetWorkTable" :data="tableData" style="font-size:14px;text-align:right;">
          <el-table-column prop="name" label width="100px">
            <template slot-scope="scope">
              <div
                class="flexStart align-items-center curspr_pointer"
                v-if="scope.row.name == '预计今日'"
                @click="openJryj"
              >
                <span class="text-decoration margin_right_4 color_0091F2">{{scope.row.name}}</span>
                <icon-svg name="columnar"></icon-svg>
              </div>
              <div v-else>{{scope.row.name}}</div>
            </template>
          </el-table-column>
          <el-table-column prop="xwcxl" label="线网出行量">
            <template slot-scope="scope">
              <div v-if="scope.row.name == '预计今日'" class="font_weight_bold">
                <span
                  v-if="parseInt(scope.row.xwcxl.replace(/,/g,'')) > 1000000"
                  style="color:#FF2F78;"
                  class="yj_arrow"
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
          <el-table-column prop="xwczl" label="线网出站量">
            <template slot-scope="scope">
              <div v-if="scope.row.name == '预计今日'" class="font_weight_bold">
                <span
                  v-if="parseInt(scope.row.xwczl.replace(/,/g,'')) > 1000000"
                  style="color:#FF2F78;"
                  class="yj_arrow"
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
          <el-table-column prop="xwhxl" label="线网换行量">
            <template slot-scope="scope">
              <div v-if="scope.row.name == '预计今日'" class="font_weight_bold">
                <span
                  v-if="parseInt(scope.row.xwhxl.replace(/,/g,'')) > 2000000"
                  style="color:#FF2F78;"
                  class="yj_arrow"
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
          <el-table-column prop="xwkyl" label="线网客运量">
            <template slot-scope="scope">
              <div v-if="scope.row.name == '预计今日'" class="font_weight_bold">
                <span
                  v-if="parseInt(scope.row.xwkyl.replace(/,/g,'')) > 2000000"
                  style="color:#FF2F78;"
                  class="yj_arrow"
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
          <el-table-column prop="xwzxrs" label="线网在网人数">
            <template slot-scope="scope">
              <div v-if="scope.row.name == '预计今日'" class="font_weight_bold">
                <span
                  v-if="parseInt(scope.row.xwzxrs.replace(/,/g,'')) > 1000000"
                  style="color:#FF2F78;"
                  class="yj_arrow"
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
          xwcxl: '1,491,781',
          xwczl: '1,491,781',
          xwhxl: '1,491,781',
          xwkyl: '1,491,781',
          xwzxrs: '1,491,781'
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
          if (i > 1) {
            item.style.visibility = 'collapse'
          }
        }
        this.mark = false
      } else {
        for (let i = 0; i < trs.length; i++) {
          let item = trs[i]
          if (i > 1) {
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
  margin-bottom: 30px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 122, 255, 0.08);
  p {
    margin: 0;
  }
  // /deep/ .el-card {
  //   border-bottom: none;
  //   border-bottom-right-radius: 0;
  //   border-bottom-left-radius: 0;
  // }
  // /deep/ .el-card__body {
  //   padding: 10px 30px 0 30px;
  // }
  // .lineNetworkHeader {
  //   .border_right_e8ecef {
  //     border-right: 1px solid #e8ecef;
  //   }
  //   .el-col:last-child {
  //     border-right: none;
  //   }
  // }
}
.tp-line-table-box {
  .tableCont {
    background-color: #fff;
    padding: 0 30px 20px 30px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    // box-shadow: 0 2px 12px 0 rgba(0, 122, 255, 0.08)
  }
  /deep/ .el-table {
    width: 90%;
    font-size: 12px;
    color: #949ea8;
    // font-weight: 600;
    td {
      text-align: right;
      background-color: #fff;
    }
    td,
    th.is-leaf {
      border-bottom: none !important;
    }
    th {
      background-color: #fff;
      text-align: right;
      font-size: 12px;
    }
    .el-table__body-wrapper {
      .el-table__body {
        .el-table__row:first-child {
          font-size: 28px;
          font-family:PingFang-SC;
          font-weight:500;
          color:rgba(32,46,61,1);
          .td {
            padding-bottom: 20px;
          }
        }
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