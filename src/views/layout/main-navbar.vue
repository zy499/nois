<!--
 * @Description: file content
 * @Author: zy
 * @Date: 2019-08-24 12:04:28
 * @LastEditors: zy
 * @LastEditTime: 2019-09-09 11:23:19
 -->
<template>
  <nav class="site-navbar" :class="'site-navbar--' + navbarLayoutType">
    <div class="site-navbar__header">
      <h1 class="site-navbar__brand" @click="$router.push({ name: 'passengerFlowWaring' })">
        <a class="site-navbar__brand-lg" href="javascript:;">
          <img
            src="../../assets/img/logo1@1x.png"
            style="margin-left: 20px;margin-right: 10px;"
            alt
          />
          <img src="../../assets/img/logo2@1x.png" alt />
        </a>
        <a class="site-navbar__brand-mini" href="javascript:;">
          <img src="../../assets/img/logo1@1x.png" alt />
        </a>
      </h1>
    </div>
    <div class="site-navbar__body clearfix">
      <div v-if="keliu_isSideBarFold">
        <el-menu class="site-navbar__menu" mode="horizontal">
          <el-menu-item class="site-navbar__switch" index="0" @click="sidebarFold = !sidebarFold">
            <icon-svg name="zhedie" :class="{'is-toggle':sidebarFold}"></icon-svg>
          </el-menu-item>
        </el-menu>
      </div>
      <div v-if="keliu_isShowSelect">
        <el-menu class="site-navbar__menu select_box" mode="horizontal">
          <el-menu-item style="padding-left:0;padding-right:10px;width: 120px;">
            <el-select v-model="xianlu_val" @change="changeTitle"  placeholder="请选择">
              <el-option
                v-for="item in xianlu_option"
                :label="item.label"
                :value="item.value"
                :key="item.value"
              ></el-option>
            </el-select>
          </el-menu-item>
          <el-menu-item style="padding-left:0;padding-right:0;width: 120px;">
            <el-select v-model="date_val" @change="changeDate" placeholder="请选择">
              <el-option
                v-for="item in date_option"
                :label="item.label"
                :value="item.value"
                :key="item.value"
              ></el-option>
            </el-select>
          </el-menu-item>
        </el-menu>
      </div>
      <el-menu class="site-navbar__menu site-navbar__menu--right" mode="horizontal">
        <!-- <el-menu-item index="1" @click="$router.push({ name: 'theme' })">
          <template slot="title">
            <el-badge>
              <icon-svg name="shezhi" class="el-icon-setting"></icon-svg>
            </el-badge>
          </template>
        </el-menu-item>-->
        <el-menu-item>
          <span>晴&nbsp;31℃</span>
        </el-menu-item>
        <el-menu-item class="site-navbar__avatar" index="3">
          <el-dropdown :show-timeout="0" placement="bottom">
            <span class="el-dropdown-link">
              Hi，{{ userName }}
              <img src="~@/assets/img/avatar.png" :alt="userName" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="updatePasswordHandle()">修改密码</el-dropdown-item>
              <el-dropdown-item @click.native="logoutHandle()">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 弹窗, 修改密码 -->
    <update-password v-if="updatePassowrdVisible" ref="updatePassowrd"></update-password>
  </nav>
</template>

<script>
import UpdatePassword from './main-navbar-update-password'
import { clearLoginInfo } from '@/utils'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('passengerFlowWaring')
export default {
  data () {
    return {
      updatePassowrdVisible: false,
      xianlu_val: '',
      date_val: ''
    }
  },
  components: {
    UpdatePassword
  },
  created () {
    this.xianlu_val = this.newXianlu_val
    this.date_val = this.newDate_val
  },
  computed: {
    ...mapState({
      xianlu_option: 'xianlu_option',
      date_option: 'date_option',
      newXianlu_val: 'xianlu_val',
      newDate_val: 'date_val'
    }),
    navbarLayoutType: {
      get () {
        return this.$store.state.common.navbarLayoutType
      }
    },
    sidebarFold: {
      get () {
        return this.$store.state.common.sidebarFold
      },
      set (val) {
        this.$store.commit('common/updateSidebarFold', val)
      }
    },
    mainTabs: {
      get () {
        return this.$store.state.common.mainTabs
      },
      set (val) {
        this.$store.commit('common/updateMainTabs', val)
      }
    },
    userName: {
      get () {
        return this.$store.state.user.name
      }
    },
    keliu_isShowSelect: {
      get () {
        return this.$store.state.common.keliu_isShowSelect
      }
    },
    keliu_isSideBarFold: {
      get () {
        return this.$store.state.common.keliu_isSideBarFold
      }
    }
  },
  methods: {
    ...mapMutations({
      xianluVal: 'UPDATE_XIANLU_VAL',
      dateVal: 'UPDATE_DATE_VAL'
      // xianluType: 'XIANLU_TYPE',
      // dateType: 'DATE_TYPE'
    }),
    changeDate (val) {
      this.dateVal(val)
      // this.$store.commit('passengerFlowWaring/update_yj_biaoge_tag', val)
    },
    changeTitle (val) {
      this.xianluVal(val)
      // this.$store.commit('passengerFlowWaring/update_yj_biaoge_title', val)
    },
    // 修改密码
    updatePasswordHandle () {
      this.updatePassowrdVisible = true
      this.$nextTick(() => {
        this.$refs.updatePassowrd.init()
      })
    },
    // 退出
    logoutHandle () {
      this.$confirm(`确定进行[退出]操作?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$http({
            url: this.$http.adornUrl('/sys/logout'),
            method: 'post',
            data: this.$http.adornData()
          }).then(({ data }) => {
            if (data && data.code === '00000000') {
              clearLoginInfo()
              this.$router.push({ name: 'login' })
            }
          })
        })
        .catch(() => {})
    }
  }
}
</script>
<style scoped>
/* .site-navbar__body > .select_Box /deep/ input {
  border: none !important;
  text-align: center !important;
} */
</style>
<style lang="scss" scoped>
.site-navbar {
  .site-navbar__body {
    .select_box {
      /deep/ .el-input__inner {
        border: none;
        text-align: center;
      }
    }
    /deep/ .el-menu--horizontal > .el-menu-item.is-active {
      border-bottom: none;
    }
  }
}
</style>