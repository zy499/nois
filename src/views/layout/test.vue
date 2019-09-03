<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-08-31 01:42:29
 * @LastEditors: zy
 * @LastEditTime: 2019-09-03 21:24:39
 -->
<template>
  <div>
    <h1>test</h1>
    <!-- <router-link to="/home">home</router-link> -->
    <el-button type="primary" @click="$router.push({name:'passengerFlowWaring'})">passengerFlowWaring</el-button>
    <div>mapState:{{count}}</div>
    <div>mapGetters:{{getCount}}</div>
    <p>name:{{paerson.name}}</p>
    <el-button type="primary" @click="totalAlise">点击增加count</el-button>
    <el-button type="primary" @click="newUpdateName">点击更改名字</el-button>
    <el-button type="primary" @click="newSetCount">setCount</el-button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('test')
export default {
  computed: {
    ...mapState({
      count: 'count',
      paerson: 'paerson'
    }),
    ...mapGetters(['getCount'])
  },
  methods: {
    ...mapMutations({
      totalAlise: 'ADDCOUNT',
      updateName: 'UPDATEPAERSONNAME'
    }),
    ...mapActions({
      setCount: 'setCount'
    }),
    newUpdateName () {
      this.updateName('小乔')
    },
    newSetCount () {
      this.setCount(100)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>