<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-08-24 17:01:27
 * @LastEditors: zy
 * @LastEditTime: 2019-08-25 17:07:26
 -->
<template>
  <div class="passengerFlowWaringBody">
    <!-- header start -->
    <div class="header margin-bottom30">
      <div class="header-body">
        <el-row type="flex" justify="space-between">
          <el-col :span="6">
            <p class="title">客流监测与预警</p>
            <el-row>
              <el-col :span="12">
                <span class="keliu-title-Font">维度：</span>
                <el-select v-model="xianwang_val" placeholder="请选择">
                  <el-option
                    v-for="item in xianwang_option"
                    :label="item.label"
                    :value="item.value"
                    :key="item.value"
                  ></el-option>
                </el-select>
              </el-col>
              <el-col :span="12" class="margin-left75">
                <span class="keliu-title-Font">时间：</span>
                <el-select v-model="date_val" placeholder="请选择">
                  <el-option
                    v-for="item in date_option"
                    :label="item.label"
                    :value="item.value"
                    :key="item.value"
                  ></el-option>
                </el-select>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="6" class="text_right margin-top3 flexStart flex-flow-reverse">
            <div style="width:36px;height:36px;background:rgba(0,0,0,0.05);margin-left:10px;"></div>
            <div class="tianqiFont">
              <p class="margin-bottom10">晴31℃</p>
              <p>降雨概率10%</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- header end -->
    <!-- content start -->
    <el-row type="flex" justify="space-between">
      <el-col :span="11">
        <el-card>
          <div class="flexStart justify-content-space-between align-items-center">
            <p class="pub-yujing-font">客流预警</p>
            <p class="pub-yujing-font font-size20">0</p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="11">
        <el-card>
          <div class="flexStart justify-content-space-between align-items-center">
            <p class="pub-yujing-font">警告预警</p>
            <p class="pub-yujing-font font-size20">0</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- content end -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      xianwang_option: [
        {
          label: '线网',
          value: '1'
        }
      ],
      date_option: [
        {
          label: '实时',
          value: '1'
        }
      ],
      xianwang_val: '1',
      date_val: '1'
    }
  }
}
</script>

<style lang='scss' scoped>
.passengerFlowWaringBody {
  .header {
    .header-body {
      .title {
        color: #101010;
        font-size: 20px;
        font-family: Roboto-regular;
        margin-bottom: 10px;
      }
      /deep/ .el-select--medium {
        width: 80px;
        margin-left: -8px;
        .el-input--medium,
        .el-input--suffix {
          background: #f1f4f5;
          .el-input__inner {
            background: #f1f4f5;
            border: none;
            height: 12px;
            line-height: 12px;
            text-align: center;
            padding-left: 0px;
            color: #101010;
          }
          .el-input__suffix {
            right: 12px;
            .el-input__icon {
              font-size: 10px;
            }
          }
        }
      }
    }
  }
  p {
    margin: 0;
  }
  .keliu-title-Font {
    color: rgba(16, 16, 16, 0.5);
    font-size: 12px;
    font-family: Roboto-regular;
  }
  .tianqiFont {
    color: rgba(16, 16, 16, 0.5);
    font-size: 12px;
    font-family: Roboto-regular;
  }
  .pub-yujing-font {
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    font-family: Roboto-regular;
  }
}
</style>