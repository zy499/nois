<!--
 * @Description: 预计今日
 * @Author: zy
 * @Date: 2019-08-31 01:42:29
 * @LastEditors: zy
 * @LastEditTime: 2019-09-11 14:52:42
 -->
<template>
  <div class="dialogBox">
    <el-dialog title="预计今日" :visible.sync="dialogVisible" @close="closeDialog" width="60%">
      <div class="dialog-top">
        <el-row :gutter="20">
          <el-col :span="4">
            <p class="goOn margin-none">线网出行量</p>
            <h4 class="num margin-none">3,024,162</h4>
          </el-col>
          <el-col :span="6">
            <p class="goOn margin-none">线网出站量</p>
            <h4 class="num margin-none">3,024,162</h4>
          </el-col>
          <el-col :span="6">
            <p class="goOn margin-none">线网换乘量</p>
            <h4 class="num margin-none">3,024,162</h4>
          </el-col>
          <el-col :span="6">
            <p class="goOn margin-none">线网客运量</p>
            <h4 class="num margin-none">3,024,162</h4>
          </el-col>
        </el-row>
      </div>
      <div style="border: 0.5px solid gray;marginTop:30px"></div>
      <div class="dialog-main">
        <div>
          <span class="margin_right_20">维度</span>
          <el-select v-model="xianwang_val" placeholder="请选择">
            <el-option
              v-for="item in xianwang_option"
              :label="item.label"
              :value="item.value"
              :key="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="charts">
          <p>09.24之后为测试数据</p>
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
.margin-none {
  margin: 0;
}
.dialog-top {
  padding: 0 30px;
  .goOn {
    text-align: right;
    font-size: 12px;
  }
  .num {
    text-align: right;
    font-size: 16px;
  }
}
.dialogBox {
  /deep/ .el-dialog__header {
    text-align: center;
  }
  .dialog-main {
    margin: 20px 0px;
    span {
      font-size: 12px;
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