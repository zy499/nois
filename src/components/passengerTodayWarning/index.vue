<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-08-24 21:21:06
 * @LastEditors: zy
 * @LastEditTime: 2019-08-25 15:54:16
 -->
<template>
  <div>
    <el-dialog
      :title="!dataForm.id ? '新增' : '修改'"
      :close-on-click-modal="false"
      :visible.sync="visible"
    ></el-dialog>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
</style>