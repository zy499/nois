<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-08-31 01:42:29
 * @LastEditors: zy
 * @LastEditTime: 2019-08-31 22:15:40
 -->
<template>
  <div>
    <div class="stationDetails_title" style="padding-top:40px;border-bottom:1px solid #ccc">
      <div style="margin:0 auto;width:1000px;padding:20px 0">
        <StationBreadcrumb />
      </div>
    </div>
    <div class="noSidebar_cont">
      <StationeTable />
    </div>
  </div>
</template>

<script>
import StationBreadcrumb from '@/components/passengerFlow/station/StationBreadcrumb'
import StationeTable from '@/components/passengerFlow/station/StationeTable'
export default {
  provide () {
    return {
      stationName: this.$route.params.stationName,
      routeObj: this.$route.params.routeObj
    }
  },
  components: {
    StationBreadcrumb,
    StationeTable
  },
  data () {
    return {
      levelList: []
    }
  }
  // beforeRouteEnter (to, from, next) {
  //   // ...
  //   next(vm => {
  //     console.log(vm)
  //     to.meta.title = vm.$route.params.stationName
  //     vm.levelList = [from, to]
  //   })
  // },
  // watch: {
  //   $route () {
  //     this.getBreadcrumb()
  //   }
  // },
  // created () {
  //   this.getBreadcrumb()
  // },
  // methods: {
  //   getBreadcrumb () {
  //     // console.log(this.$route)
  //     let matched = this.$route.matched.filter(item => item.name)
  //     const first = matched[0]
  //     if (
  //       first &&
  //       first.name.trim().toLocaleLowerCase() !==
  //         'Dashboard'.toLocaleLowerCase()
  //     ) {
  //       matched = [{ path: '/dashboard', meta: { title: 'dashboard' } }].concat(
  //         matched
  //       )
  //     }
  //     this.levelList = matched
  //   }
  // }
}
</script>

<style lang="scss" scoped>
</style>