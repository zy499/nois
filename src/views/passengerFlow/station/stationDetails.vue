<template>
  <div>
    <div class="stationDetails_title" style="padding-top:40px;">
      <el-breadcrumb class="breadcrumb-container" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          v-for="item in levelList"
          :key="item.path"
          :to="item.path"
        >{{item.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="noSidebar_cont"></div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'stationDetails',
  data () {
    return {
      firstRoute: null,
      levelList: []
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(from)
    console.log(to)
    // console.log(store)
    // store.commit('upaateBreadcrumbs',)
    next((vm) => {
      // console.log(vm)
      // vm.firstRoute = from
    })
  },
  watch: {
    // $route () {
      // this.getBreadcrumb()
    // }
  },
  created () {
    // this.getBreadcrumb()
  },
  methods: {
    // getBreadcrumb () {
    //   debugger
    //   let matched = this.$route.matched.filter(item => item.name && item.path)
    //   matched = [this.firstRoute].concat(
    //       matched
    //   )
    //   this.levelList = matched
    // }
  }
}
</script>

<style lang="scss" scoped>
</style>