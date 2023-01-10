import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      isLogin: false,
      isAdmin: false,
      UserName: '',
      money: 10000,
    }
  },
  mutations: {
    changeLogin (state) {
      state.isLogin = true
      console.log('changeLogin: login state is ' + state.isLogin)
    },
    changeUserName (state, name) {
      state.UserName = name
      console.log('changeUserName: user name is ' + state.UserName)
    }
  },
})


export default store