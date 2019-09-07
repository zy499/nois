<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-08-31 01:42:29
 * @LastEditors: zy
 * @LastEditTime: 2019-09-07 21:06:13
 -->
<template>
  <div
    class="site-wrapper"
    v-loading.fullscreen.lock="loading"
    element-loading-text="拼命加载中">
    <template v-if="!loading">
      <main-navbar />
      <div style="padding-top:50px">
        <router-view></router-view>
      </div>
    </template>
  </div>
</template>

<script>
  import MainNavbar from './main-navbar'
  import { getUserInfo } from '@/api/user'
  export default {
    data () {
      return {
        loading: true
      }
    },
    components: {
      MainNavbar
    },
    computed: {
      userId: {
        get () { return this.$store.state.user.id },
        set (val) { this.$store.commit('user/updateId', val) }
      },
      userName: {
        get () { return this.$store.state.user.name },
        set (val) { this.$store.commit('user/updateName', val) }
      }
    },
    created () {
      getUserInfo().then(({ data }) => {
        this.loading = false
        this.userId = data.data.user.userId
        this.userName = data.data.user.username
      })
    },
    mounted () {
      // this.resetDocumentClientHeight()
    },
    methods: {
      // 获取当前管理员信息
      // getUserInfo () {
      //   this.$http({
      //     url: this.$http.adornUrl('/sys/user/info'),
      //     method: 'get',
      //     params: this.$http.adornParams()
      //   }).then(({data}) => {
      //     if (data && data.code === 0) {
      //       this.loading = false
      //       this.userId = data.user.userId
      //       this.userName = data.user.username
      //     }
      //   })
      // }
    }
  }
</script>
