<template>
  <div class="miniTitleContainer" :style="'color: ' + String(headerFontColor)">

    <div class="headerTitle" :style="'font-size: ' + String(headerTitleFontSize) + 'em;'">{{ headerTitle }}</div>
    <div class="headerInfo">
      <h1>{{ headerInfo }}</h1>
      <p></p>
    </div>

  </div>
</template>


<script>
export default {
  data() {
    return {
    }
  },
  name: "AboutTitle",
  props: [
    'headerTitle', //briefInfo的标题
    'headerInfo', //briefIndo的内容
    'headerFontColor', //briefIndo的字体颜色
    'headerTitleFontSize', //briefInfo的字体大小
      'fontFamily', //briefInfo的字体
  ],
  components: {},
  methods: {
  }
}
</script>


<style lang="less" scoped>
.miniTitleContainer {
  position: absolute;
  top: 20%;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2em;
  z-index: 1;

  .headerTitle {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 800;
  }

  .headerInfo {
    h1 {
      font-size: 1.5em;
    }
  }

  .furtherGuidance {
    font-size: 1.2em;
    color: rgb(40, 151, 255);
  }

}


@media only screen and (max-width: 800px) {
}
</style>