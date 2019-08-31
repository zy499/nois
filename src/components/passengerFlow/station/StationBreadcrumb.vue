<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-08-31 01:42:29
 * @LastEditors: zy
 * @LastEditTime: 2019-08-31 22:18:26
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
  inject: ['stationName', 'routeObj'],
  data () {
    return {
      levelList: []
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb () {
      // let routeObj = this.$route
      // if (routeObj.params && routeObj.params.stationName) {
      //   routeObj.meta.title = routeObj.params.stationName
      // }
      console.log(this)
      // let matched = this.$route.matched.filter(item => item.name)
      // const first = matched[0]
      // if (
      //   first &&
      //   first.name.trim().toLocaleLowerCase() !==
      //     'Dashboard'.toLocaleLowerCase()
      // ) {
      //   matched = [{ path: '/dashboard', meta: { title: 'dashboard' } }].concat(
      //     matched
      //   )
      // }
      // this.levelList = matched
    }
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