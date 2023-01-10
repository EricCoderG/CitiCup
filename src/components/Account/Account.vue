<template>
  <div class="bk">
    <div style="margin-top: 2vh; margin-bottom: 3vh;">
      <div v-if="this.$store.state.isLogin">
        <div class="sub-title">账户管理</div>
        <div class="account_container">
          <div class="left">
            <div class="left_box">
              <div class="common_text">账号:&nbsp&nbsp&nbsp{{ this.$store.state.UserName }}</div>
              <div class="common_text">现金:&nbsp&nbsp&nbsp{{ this.$store.state.money }}</div>
              <div class="common_text">总资产:&nbsp&nbsp&nbsp{{ this.totalAssets }}</div>
              <div class="common_text">资产变动幅度:&nbsp&nbsp&nbsp{{ this.assetsChangeRate }}%</div>
            </div>
            <div class="right_box">
              <div class="pie_chart_container">
                <MyPineChart
                    :pieData="this.pieData"
                />
              </div>
            </div>
          </div>
          <div class="right">
            <MyLineChart
                :line-data="this.lineData"
                :x-axis-data="this.xAxisData"
            />
          </div>
        </div>
        <div class="market_container">
          <div class="sub-title2">股票</div>
          <div class="sub_container">
            <MyTable
                :_headers="stock_headers"
                :_items="stock_items"
            />
          </div>
          <div class="sub-title2">期货</div>
          <div class="sub_container">
            <MyTable
                :_headers="futures_headers"
                :_items="futures_items"
            />
          </div>
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
import MyPineChart from "./subComponents/MyPineChart.vue";
import MyTable from "./subComponents/MyTable.vue";

export default {
  components: {
    MyTable,
    MyLineChart, MyPineChart,
  },
  data() {
    return {
      xAxisData: ["12-3", "12-4", "12-5", "12-6", "12-7", "12-8"],
      lineData: [120, 132, 101, 134, 90, 230],
      pieData: [
        {value: 310, name: "期货"},
        {value: 234, name: "股票"},
        {value: 135, name: "债券"},
        {value: 548, name: "现金"},
        {value: 148, name: "其他"},
      ],
      stock_headers: [
        { text: "名称", value: "stock_name" },
        { text: "股票代码", value: "code"},
        { text: "持有量", value: "holdings", sortable: true},
        { text: "单价", value: "price", sortable: true},
        { text: "收益率", value: "rate", sortable: true},
        { text: "总额", value: "sum", sortable: true},
      ],
      stock_items: [
        {stock_name: "腾讯", code: "00700", holdings: 100, price: 100, rate: 10, sum: 10000},
        {stock_name: "阿里", code: "00701", holdings: 100, price: 100, rate: 10, sum: 10000},
        {stock_name: "百度", code: "00702", holdings: 100, price: 100, rate: 10, sum: 10000},
        {stock_name: "京东", code: "00703", holdings: 100, price: 100, rate: 10, sum: 10000},
        {stock_name: "网易", code: "00704", holdings: 100, price: 100, rate: 10, sum: 10000},
        {stock_name: "美团", code: "00705", holdings: 100, price: 100, rate: 10, sum: 10000},
        {stock_name: "滴滴", code: "00706", holdings: 100, price: 100, rate: 10, sum: 10000},
        {stock_name: "小米", code: "00707", holdings: 100, price: 100, rate: 10, sum: 10000},
        {stock_name: "华为", code: "00708", holdings: 100, price: 100, rate: 10, sum: 10000},
        ],
      futures_headers: [
        { text: "类型", value: "futures_kind" },
        { text: "持有量", value: "holdings", sortable: true},
        { text: "单价", value: "price", sortable: true},
        { text: "收益率", value: "rate", sortable: true},
        { text: "总额", value: "sum", sortable: true},
      ],
      futures_items: [
        {futures_kind: "黄金", holdings: 100, price: 100, rate: 10, sum: 10000},
        {futures_kind: "白银", holdings: 100, price: 100, rate: 10, sum: 10000},
        {futures_kind: "铜", holdings: 100, price: 100, rate: 10, sum: 10000},
        {futures_kind: "铝", holdings: 100, price: 100, rate: 10, sum: 10000},
        {futures_kind: "锌", holdings: 100, price: 100, rate: 10, sum: 10000},
        {futures_kind: "锡", holdings: 100, price: 100, rate: 10, sum: 10000},
        {futures_kind: "铅", holdings: 100, price: 100, rate: 10, sum: 10000},
        {futures_kind: "镍", holdings: 100, price: 100, rate: 10, sum: 10000},
      ],
    }
  },
  computed: {
    totalAssets() {
      return this.$store.state.money;
    },
    assetsChangeRate() {
      return 0;
    },
  },
  methods: {},
  name: 'Account',
}
</script>

<style lang="less" scoped>

.bk {
  width: 100%;
  padding-top: 1%;
  padding-bottom: 1%;
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

.account_container {
  display: flex;
  margin-top: 2vh;
  margin-bottom: 2vh;
  .left {
    width: 50%;
    height: 40vh;
    margin-left: 5%;
    margin-right: 3%;
    background-color: #2d2d2d;
    border-radius: 10px;
    display: flex;
    .left_box {
      width: 20vw;
      height: 40vh;
    }

    .right_box {
      margin-top: 5vh;
      width: 30vw;
      height: 40vh;
    }
  }

  .right {
    width: 45vw;
    height: 40vh;
  }
}

.market_container {
  width:80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
  margin-bottom: 3%;
  .sub_container {
    margin-top: 2%;
    margin-bottom: 2%;
  }
}

.common_text {
  font-size: 20px;
  font-weight: bold;
  color: #fafafa;
  padding-top: 5vh;
  padding-left: 3vw;
  text-align: left;
}

.sub-title2 {
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  font: bolder 35px/50px Arial;
  color: #fafafa;
}

</style>