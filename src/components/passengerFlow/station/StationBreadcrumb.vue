<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-08-31 01:42:29
 * @LastEditors: zy
 * @LastEditTime: 2019-09-01 01:38:34
 -->
<template>
  <div>
    <el-breadcrumb
      class="breadcrumb-container"
      separator-class="el-icon-arrow-right"
      style="font-size:20px"
    >
      <el-breadcrumb-item :to="{ name: 'passengerFlowWaring' }">客流监测与预警</el-breadcrumb-item>
      <el-breadcrumb-item :to="$route.name">{{$route.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.breadcrumb-container {
  .el-breadcrumb__inner .is-link {
    // color: #9d9ea0;
    font-weight: 600;
  }
  /deep/ .el-breadcrumb__item:last-child .el-breadcrumb__inner {
    color: rgb(214, 214, 214) !important;
    font-weight: 600;
  }
}
</style>