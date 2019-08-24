<template>
  <div class="mod-user">
    <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList()">
      <el-form-item>
        <el-input v-model="dataForm.userName" placeholder="用户名" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="getDataList()">查询</el-button>
        <el-button v-if="isAuth('sys:user:save')" type="primary" @click="addOrUpdateHandle()">新增</el-button>
        <el-button
          v-if="isAuth('sys:user:delete')"
          type="danger"
          @click="deleteHandle()"
          :disabled="dataListSelections.length <= 0"
        >批量删除</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="dataList"
      border
      v-loading="dataListLoading"
      @selection-change="selectionChangeHandle"
      style="width: 100%;"
    >
      <el-table-column type="selection" header-align="center" align="center" width="50"></el-table-column>
      <el-table-column prop="userId" header-align="center" align="center" width="80" label="ID"></el-table-column>
      <el-table-column prop="username" header-align="center" align="center" label="用户名"></el-table-column>
      <el-table-column prop="email" header-align="center" align="center" label="邮箱"></el-table-column>
      <el-table-column prop="mobile" header-align="center" align="center" label="手机号"></el-table-column>
      <el-table-column prop="status" header-align="center" align="center" label="状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status === 0" size="small" type="danger">禁用</el-tag>
          <el-tag v-else size="small">正常</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="createTime"
        header-align="center"
        align="center"
        width="180"
        label="创建时间"
      ></el-table-column>
      <el-table-column fixed="right" header-align="center" align="center" width="150" label="操作">
        <template slot-scope="scope">
          <el-button
            v-if="isAuth('sys:user:update')"
            type="text"
            size="small"
            @click="addOrUpdateHandle(scope.row.userId)"
          >修改</el-button>
          <el-button
            v-if="isAuth('sys:user:delete')"
            type="text"
            size="small"
            @click="deleteHandle(scope.row.userId)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="sizeChangeHandle"
      @current-change="currentChangeHandle"
      :current-page="pageIndex"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      :total="totalPage"
      layout="total, sizes, prev, pager, next, jumper"
    ></el-pagination>
    <!-- 弹窗, 新增 / 修改 -->
    <add-or-update v-if="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="getDataList"></add-or-update>
    <el-button @click="openDialog">按钮</el-button>
    <el-dialog title="预计今日" :visible.sync="dialogVisible" width="60%">
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
          <el-col :span="8">
            <p class="goOn margin-none">线网客运量</p>
            <h4 class="num margin-none">3,024,162</h4>
          </el-col>
        </el-row>
      </div>
      <div style="border: 0.5px solid gray;marginTop:30px"></div>
      <div class="dialog-main">
        <div>
          <span>维度</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="charts">
          <p>09.24之后为测试数据</p>
          <LineEchart />
          <!-- <div id="chartLineBox" class="chart-box"></div> -->
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import echarts from "echarts";
import AddOrUpdate from "./user-add-or-update";
import LineEchart from '@/components/echarts/line'
export default {
  data() {
    return {
      // chartLine: null,
      dialogVisible: false,
      value: "",
      options: [],
      dataForm: {
        userName: ""
      },
      dataList: [],
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      dataListLoading: false,
      dataListSelections: [],
      addOrUpdateVisible: false
    };
  },
  components: {
    AddOrUpdate,
    LineEchart
  },
  activated() {
    this.getDataList();
    if (this.chartLine) {
      this.chartLine.resize();
    }
  },
  methods: {
    // 获取数据列表
    getDataList() {
      this.dataListLoading = true;
      this.$http({
        url: this.$http.adornUrl("/sys/user/list"),
        method: "get",
        params: this.$http.adornParams({
          page: this.pageIndex,
          limit: this.pageSize,
          username: this.dataForm.userName
        })
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.dataList = data.page.list;
          this.totalPage = data.page.totalCount;
        } else {
          this.dataList = [];
          this.totalPage = 0;
        }
        this.dataListLoading = false;
      });
    },
    // 每页数
    sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.getDataList();
    },
    // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val;
      this.getDataList();
    },
    // 多选
    selectionChangeHandle(val) {
      this.dataListSelections = val;
    },
    // 新增 / 修改
    addOrUpdateHandle(id) {
      this.addOrUpdateVisible = true;
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(id);
      });
    },
    // 删除
    deleteHandle(id) {
      var userIds = id
        ? [id]
        : this.dataListSelections.map(item => {
            return item.userId;
          });
      this.$confirm(
        `确定对[id=${userIds.join(",")}]进行[${id ? "删除" : "批量删除"}]操作?`,
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      )
        .then(() => {
          this.$http({
            url: this.$http.adornUrl("/sys/user/delete"),
            method: "post",
            data: this.$http.adornData(userIds, false)
          }).then(({ data }) => {
            if (data && data.code === 0) {
              this.$message({
                message: "操作成功",
                type: "success",
                duration: 1500,
                onClose: () => {
                  this.getDataList();
                }
              });
            } else {
              this.$message.error(data.msg);
            }
          });
        })
        .catch(() => {});
    },
    //打开窗口
    openDialog() {
      this.dialogVisible = true;
    }
  },
  mounted() {
    // this.initChartLine();
  }
};
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
