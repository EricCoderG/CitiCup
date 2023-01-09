import { createStore } from 'vuex'
import vuexAlong from 'vuex-along'

const store = createStore({
  state () {
    return {
      isLogin: false,
      isAdmin: false,
    }
  },
  mutations: {
    changeLogin (state) {
      state.isLogin = true
      console.log('changeLogin: login state is ' + state.isLogin)
    },
  },
  plugins: [vuexAlong]
})


export default store