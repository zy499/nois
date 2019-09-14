<!--
 * @Description: 预计今日
 * @Author: zy
 * @Date: 2019-08-31 01:42:29
 * @LastEditors: zy
 * @LastEditTime: 2019-09-14 15:47:56
 -->
<template>
  <div class="dialogBox">
    <el-dialog title="预计今日" :visible.sync="dialogVisible" @close="closeDialog" width="80%">
      <div class="dialog-main">
        <el-row :gutter="20" class="margin-bottom40">
          <el-col :span="6">
            <div>
              <span>线网出行量</span>
              <span>3,024,162</span>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
              <span>线网出行量</span>
              <span>3,024,162</span>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
              <span>线网出行量</span>
              <span>3,024,162</span>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
              <span>线网出行量</span>
              <span>3,024,162</span>
            </div>
          </el-col>
        </el-row>
        <div class="charts">
          <div>
            <ChartsXWCX id="testBar" height="400px" width="100%" />
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import ChartsXWCX from '@/components/passengerFlow/ChartsXWCX'
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ChartsXWCX
  },
  data () {
    return {
      dialogVisible: this.isShow,
      xianwang_val: '1',
      xianwang_option: [
        {
          label: '线网',
          value: '1'
        },
        {
          label: '1号线',
          value: '2'
        },
        {
          label: '2号线',
          value: '3'
        },
        {
          label: '3号线',
          value: '4'
        },
        {
          label: '4号线',
          value: '5'
        },
        {
          label: '7号线',
          value: '6'
        },
        {
          label: '10号线',
          value: '7'
        }
      ]
    }
  },
  watch: {
    isShow () {
      this.dialogVisible = this.isShow
    }
  },
  methods: {
    closeDialog () {
      this.dialogVisible = false
      this.$emit('closeDialogFather', this.dialogVisible)
    }
  }
}
</script>

<style lang="scss" scoped>
.dialogBox {
  /deep/ .el-dialog__header {
    padding: 40px 20px 20px 20px;
    border-bottom: 2px solid #e8ecef;
    .el-dialog__headerbtn {
      top: 38px;
      font-size: 24px;
    }
  }
  /deep/ .el-dialog__title {
    font-size: 20px;
    font-weight: bold;
  }
  .dialog-main {
    /deep/ .el-col {
      border-right: 1px solid #e8ecef;
      display: flex;
      justify-content: center;
      div {
        display: flex;
        flex-direction: column;
        text-align: right;
        span:first-child {
          font-size: 12px;
          color: #556270;
          padding-bottom: 10px;
        }
        span:last-child {
          font-size: 28px;
          font-weight: bold;
        }
      }
    }
    /deep/ .el-col:last-child {
      border-right: none;
    }
    .charts {
      .chart-box {
        min-height: 400px;
      }
      p {
        font-size: 12px;
      }
    }
  }
}
</style>