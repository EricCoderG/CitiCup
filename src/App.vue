<template>
  <div id="app">
    <NavTop/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import NavTop from "./components/CoComponents/NavTop.vue"
import Footer from "./components/CoComponents/Footer.vue"

export default {
  name: 'App',
  components: {
    NavTop, Footer
  },
  created() {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state))
    })
  },
}
</script>

<style lang="less">
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: white;
  width: 100%;
}
</style>

<style scoped>

</style>