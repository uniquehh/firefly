import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible';
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/iconfont/iconfont.css'
import axios from 'axios'
Vue.use(Vant);
Vue.config.productionTip = false

// 注册全局组件
import topNav from './components/topNav.vue'
Vue.component('topNav',topNav)

new Vue({
  axios,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
