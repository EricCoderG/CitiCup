<template>
  <div class="bk">
    <div style="margin-top: 2vh; margin-bottom: 3vh;">
      <div v-if="this.$store.state.isLogin">
        <div class="sub-title">账户管理</div>
        <div class="common-layout">
          <el-container>
            <el-aside width="45%">
              <div class="common_text">账号: </div>
              <div class="common_text">现金: </div>
            </el-aside>
            <el-main>
              <div class="chart_container1"><MyLineChart/></div>
            </el-main>
          </el-container>
        </div>
      </div>
      <div v-else>
        <router-link to="/account/login" class="login-txt">请登录您的账户 ></router-link>
      </div>
    </div>
  </div>

</template>

<script>

import MyLineChart from "./subComponents/MyLineChart.vue";

export default {
  components: {
    MyLineChart,
  },
  data() {
    return {
      test: {}
    }
  },
  methods: {},
  name: 'Account',
}
</script>

<style lang="less" scoped>

.bk {
  width: 100vw;
  padding: 1%;
  margin: 0;
  background-color: #1b1b1b;
}

.sub-title {
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  font: bolder 45px/50px Arial;
  color: #fafafa;
}

.login-txt {
  font-size: 20px;
  font-weight: bold;
  color: #fafafa;
}

.chart_container1 {
  margin: 0;
  padding-top: 3vh;
}

.common_text {
  font-size: 25px;
  font-weight: bold;
  color: #fafafa;
  padding-top: 11vh;
  padding-right: 20vw;
}

</style>