<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-08-22 21:28:23
 * @LastEditors: zy
 * @LastEditTime: 2019-08-22 23:10:10
 -->
<template>
  <div class="site-wrapper site-page--login">
    <div class="site-content__wrapper">
      <div class="site-content">
        <!-- <div class='brand-info'>
          <h2 class='brand-info__text'>闲时洗车后台管理系统</h2>
          <p class='brand-info__intro'>数据管理，可视化操作</p>
        </div>-->
        <img class="ncccLogo" src="../../assets/img/nccclogo.png" alt />
        <img class="CDmetroLogo" src="../../assets/img/CDmetrologo.png" alt />
        <div class="login-main">
          <p class="login-title">登录</p>
          <p class="login-title-blck">Hi，欢迎回来</p>
          <el-form
            :model="dataForm"
            :rules="dataRule"
            ref="dataForm"
            @keyup.enter.native="dataFormSubmit()"
            status-icon
          >
            <template>
              <p class="style-uaerName">账号</p>
            </template>
            <el-form-item prop="userName">
              <el-input v-model="dataForm.userName"></el-input>
            </el-form-item>
            <template>
              <p class="style-password">密码</p>
            </template>
            <el-form-item prop="password">
              <el-input v-model="dataForm.password" type="password"></el-input>
            </el-form-item>
            <template>
              <p class="forget_password">忘记密码?</p>
            </template>
            <el-form-item>
              <el-button class="login-btn-submit" type="primary" @click="dataFormSubmit()">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataForm: {
        userName: "",
        password: "",
        uuid: ""
      },
      dataRule: {
        userName: [
          { required: true, message: "帐号不能为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    // 提交表单
    dataFormSubmit() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          // console.log(this.$http.adornUrl('/sys/login'))
          this.$http({
            url: this.$http.adornUrl("sys/login"),
            method: "post",
            data: this.$http.adornData({
              username: this.dataForm.userName,
              password: this.dataForm.password
            })
          }).then(({ data }) => {
            if (data && data.code === 0) {
              this.$cookie.set("token", data.token);
              this.$router.replace({ name: "home" });
            } else {
              this.$message.error(data.msg);
            }
          });
        }
      });
    }
  }
};
</script>

<style lang='scss'>
.site-wrapper.site-page--login {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  // background-color: rgba(38, 50, 56, .6);
  overflow: hidden;
  &:before {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    content: "";
    background-image: url(~@/assets/img/rightimg@2x.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .site-content__wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: transparent;
  }
  .site-content {
    min-height: 100%;
    // padding: 30px 500px 30px 30px;
    .ncccLogo {
      position: absolute;
      z-index: 999;
      top: 45px;
      left: 105px;
    }
    .CDmetroLogo {
      position: absolute;
      z-index: 999;
      bottom: 30px;
      left: 240px;
    }
  }
  .login-main {
    position: absolute;
    top: 0;
    left: 0;
    padding: 200px 105px 180px;
    width: 600px;
    min-height: 100%;
    background-color: #fff;
    .el-input__inner {
      border-top-width: 0px;
      border-left-width: 0px;
      border-right-width: 0px;
      border-bottom-width: 1px;
      padding: 0;
      font-weight: bold;
    }
  }
  .login-title {
    margin: 0;
    font-size: 32px;
    font-family: PingFangSC;
    font-weight: bold;
    color: rgba(32, 46, 61, 1);
    line-height: 45px;
  }
  .login-title-blck {
    font-size: 14px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(148, 158, 168, 1);
    line-height: 20px;
    margin-bottom: 40px;
  }
  .forget_password {
    font-size: 12px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(148, 158, 168, 1);
    line-height: 17px;
    text-align: right;
    cursor: pointer;
  }
  .forget_password:hover {
    color: rgb(116, 123, 131);
  }
  .style-uaerName {
    margin: 0;
    font-size: 14px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(148, 158, 168, 1);
    line-height: 20px;
  }
  .style-password {
    margin: 0;
    font-size: 14px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(148, 158, 168, 1);
    line-height: 20px;
  }
  .login-captcha {
    overflow: hidden;
    > img {
      width: 100%;
      cursor: pointer;
    }
  }
  .login-btn-submit {
    width: 100%;
    height: 50px;
    margin-top: 38px;
    border-radius: 25px;
  }
}
</style>
