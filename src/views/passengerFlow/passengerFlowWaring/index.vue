<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-08-24 17:01:27
 * @LastEditors: zy
 * @LastEditTime: 2019-08-24 17:37:26
 -->
<template>
  <div class="passengerFlowWaringBody">
    <div class="header">
      <div class="header-body">
        <div class="left">
          <p class="title">客流监测与预警</p>
        </div>
        <div class="right">
          <p>天气</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.passengerFlowWaringBody {
  .header {
    .header-body {
      display: flex;
      justify-content:space-between;
      .title {
        color: #101010;
        font-size: 20px;
        font-family: Roboto-regular;
      }
    }
  }
  p {
    margin: 0;
  }
}
</style>