<template>
  <div class="bk">
    <div style="margin-top: 20px; margin-bottom: 30px;">
      <div v-if="this.$store.state.isLogin">
        <div class="sub-title">账户管理</div>
        <div class="line-chart">
          <MyLineChart/>
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
      test :{

      }
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


</style>