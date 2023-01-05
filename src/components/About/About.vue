<template>
  <div style="background: url('src/components/Home/images/earth_.jpg') center">

    <div class="home-container _home-container">

      <AboutInfo :header-title="'SSE STAR Market Maker'" :header-title-font-size="2.4" :header-font-color="'white'"
                 :imgSrc="'src/components/About/images/about.jpg'"
                 :min-height="'90vh'"
                 :Radius="'0'"
                 :headerInfo="'xxxxx'"/>
      />

      <div class="about-us-box">

        <div class="sub-title">标题</div>
        <div style="width: 95%; background-color: #ffffff; border-radius: 10px; padding-top: 2%; padding-bottom: 2%">
          <p class="about-txt">正文duhqwudhqwuidhiuqwhdiuqwhdiquwhdiuqwhduiqwdhuiqwhdqwiud</p>
        </div>
      </div>


      <div style="margin-top: 0; margin-bottom: 100px;">
        <div class="sub-title">特色模块</div>
        <div class="module-sub-div _module-sub-div">
          <div class="left">
            <AboutInfo :header-title="'基于深度强化学习的交易策略'" :header-title-font-size="2.4" :header-font-color="'white'"
                       :imgSrc="'src/components/Home/images/dl.jpg'" :min-height="'500px'"
                       :Radius="'5%'"
            />
          </div>
          <div class="middle">
            <AboutInfo :header-title="'科创板股票定价          '" :header-font-color="'black'"
                       :header-title-font-size="2.4"
                       :imgSrc="'src/components/Home/images/stock_.jpg'"
                       :min-height="'500px'"
                       :Radius="'5%'"
            />
          </div>
          <div class="right">
            <AboutInfo :header-title="'系统性风险预警          '" :header-font-color="'white'"
                       :header-title-font-size="2.4"
                       :imgSrc="'src/components/Home/images/alert.jpg'"
                       :min-height="'500px'"
                       :Radius="'5%'"
            />
          </div>
        </div>
        <div class="module-sub-div _module-sub-div"
             style="padding-bottom: 2vh; border-bottom: 1px solid rgba(0, 0, 0, 0.1);">
          <div class="left">
            <AboutInfo :header-title="'行业前景提示             '" :header-font-color="'black'"
                       :header-title-font-size="2.4"
                       :imgSrc="'src/components/Home/images/develop.jpg'"
                       :min-height="'500px'"
                       :Radius="'5%'"
            />
          </div>
          <div class="middle">
            <AboutInfo :header-title="'上市前五天公司做市'" :header-font-color="'white'"
                       :header-title-font-size="2.4"
                       :imgSrc="'src/components/Home/images/ipo_5.jpg'"
                       :min-height="'500px'"
                       :Radius="'5%'"
            />
          </div>
          <div class="right">
            <AboutInfo :header-title="'未盈利公司做市'" :header-font-color="'black'"
                       :header-title-font-size="2.4"
                       :imgSrc="'src/components/Home/images/ipo.jpg'"
                       :min-height="'500px'"
                       :Radius="'5%'"
            />
          </div>
        </div>
      </div>


    </div>


  </div>

</template>

<script>
import AboutInfo from "./subComponents/AboutInfo.vue";

export default {
  data() {
    return {}
  },

  name: 'Home',
  components: {
    AboutInfo,
  },
  methods: {}
}
</script>


<style lang="less" scoped>

.img-box {
  width: 100vh;
  padding: 0;
  margin: 0;
  height: 70vh;
  position: relative;
  z-index: 8;
}

.about-us-box {
  margin-top: 100px;
  margin-bottom: 100px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  padding-top: 2vh;
  height: 10vh;
  //这里的Arial表示一种字体(还挺好看的说)
  font: bolder 40px/50px Arial;
  color: white;
}

.sub-title {
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  height: 10vh;
  //这里的Arial表示一种字体(还挺好看的说)
  font: bolder 40px/50px Arial;
  color: white;
  border-bottom: 3px solid rgba(255, 255, 255, 0.5);
  margin-bottom: 5vh;

}

// 大于800px
@media only screen and (min-width: 800px) {
  .home-container {
    font-size: 1vw;

    .service-sub-div {
      width: 100%;
      display: flex;
      justify-content: center;
      font-size: .5em;

      .left {
        width: 48%;
        height: 100%;
        font-size: .8em;
        margin-left: 1.5%;
        margin-right: 1.5%;
      }

      .right {
        width: 48%;
        height: 100%;
        font-size: .8em;
        margin-left: 1.5%;
        margin-right: 1.5%;
      }
    }

    .module-sub-div {
      width: 100%;
      display: flex;
      justify-content: space-around;
      font-size: .5em;

      .left {
        width: 30%;
        height: 100%;
        font-size: .8em;
        margin-left: 2%;
        margin-right: 2%;
      }

      .middle {
        width: 30%;
        height: 100%;
        font-size: .8em;
        margin-left: 2%;
        margin-right: 2%;
      }

      .right {
        width: 30%;
        height: 100%;
        font-size: .8em;
        margin-left: 2%;
        margin-right: 2%;
      }
    }
  }
}

// 小于800px
@media only screen and (max-width: 800px) {
  ._home-container {
    font-size: 1vw;

    ._service-sub-div {
      width: 100%;
      display: flex;
      flex-direction: column;
      font-size: .5em;

      .left {
        width: 100%;
        height: 100%;
        font-size: .8em;
        margin-left: 2%;
        margin-right: 2%;
      }

      .right {
        width: 100%;
        height: 100%;
        font-size: .8em;
        margin-left: 2%;
        margin-right: 2%;
      }
    }

    ._module-sub-div {
      width: 100%;
      display: flex;
      flex-direction: column;
      font-size: .5em;

      .left {
        width: 100%;
        height: 100%;
        font-size: .8em;
        margin-left: 2%;
        margin-right: 2%;
      }

      .right {
        width: 100%;
        height: 100%;
        font-size: .8em;
        margin-left: 2%;
        margin-right: 2%;
      }
    }
  }
}

.about-txt {
  font-size: 20px;
  font-weight: bold;

}
</style>