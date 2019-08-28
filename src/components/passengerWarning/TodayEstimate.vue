<template>
  <div>
    <el-dialog title="预计今日" :visible.sync="dialogVisible" @close="closeDialog" width="60%">
      <div class="dialog-top">
        <el-row :gutter="20">
          <el-col :span="6">
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
          <span>维度</span>
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
          <LineEchart />
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import LineEchart from '@/components/echarts/line'
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  components: {
    LineEchart
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
.dialog-main {
  margin: 20px 0px;
  span {
    font-size: 12px;
  }
  /deep/ .el-input__inner {
    height: 24px;
    font-size: 8px;
    line-height: 24px;
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
</style>