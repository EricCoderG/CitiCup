<template>

  <div class="_box_" :style="'min-height: ' + String(minHeight) + ';background: url(' + imgSrc + ') no-repeat; ' +
   'background-size: cover; width:100%; height: 100%; object-fit: cover;'">
    <AboutTitle :header-title="headerTitle" :header-info="headerInfo" :header-font-color="headerFontColor"
               :header-title-font-size="headerTitleFontSize"/>
  </div>


</template>

<script>




import AboutTitle from "./AboutTitle.vue";

export default {
  name: "AboutInfo",
  components: {
    AboutTitle,
  },
  data() {
    return {

    }
  },
  props: [
    'imgSrc', //每个briefInfo的背景图片的路径
    'imgAlt', //每个briefInfo的背景图片的名称
    'headerTitle', //briefInfo的标题的内容
    'headerInfo', //briefInfo标题下面的小文字
    'headerFontColor', //briefInfo的标题的颜色
    'headerTitleFontSize', //briefInfo的标题的字体大小
      'minHeight', //briefInfo的最小高度
  ],
  methods: {

  }
}
</script>

<style scoped lang="less">

._box_ {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
  margin-bottom: 4vh;
  border-radius: 5%;
  transition: all 0.3s;
}

</style>