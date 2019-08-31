<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-08-31 01:42:29
 * @LastEditors: zy
 * @LastEditTime: 2019-09-01 01:17:14
 -->
<template>
  <div>
    <el-breadcrumb
      class="breadcrumb-container"
      separator-class="el-icon-arrow-right"
      style="font-size:20px"
    >
      <el-breadcrumb-item
        v-for="item in levelList"
        :key="item.path"
        :to="item.path"
      >{{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
// import store from '@/store'
export default {
  inject: ['stationName'],
  computed: {
    levelList: {
      get () {
        let arr = this.$store.state.common.breadcrumbs
        arr[1].meta.title = this.stationName
        return arr
      }
    }
    // 直接当做普通属性调用不加括号
    // 任何data中数据变化立即重新计算
    // 计算属性会缓存

  }
  // props: {
  //   levelList: {
  //     type: Array
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.breadcrumb-container {
  .el-breadcrumb__inner .is-link {
    color: #9d9ea0;
    font-weight: 600;
  }
  /deep/ .el-breadcrumb__item:last-child .el-breadcrumb__inner {
    color: black !important;
    font-weight: 600;
  }
}
</style>