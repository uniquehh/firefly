import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: {
      namespaced: true,
      state: {
        userInfo:JSON.parse(localStorage.getItem("userInfo"))||{},
        isLogin:localStorage.getItem("isLogin")||false
      },
      getters: {

      },
      mutations: {
        stSetUserInfo(state,val) {
          state.userInfo = val
          localStorage.setItem("userInfo",JSON.stringify(val))
        },
        stSetIsLogin(state,val) {
          state.isLogin = val
          localStorage.setItem("isLogin",val)
        },
      },
    },



  }
})
