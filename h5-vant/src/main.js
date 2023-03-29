import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible';
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/iconfont/iconfont.css'
import methods from "./api/methods.js"
import axios from 'axios'
Vue.use(Vant);
Vue.config.productionTip = false

// 全局方法
// 附加方法到 Vue 原型上
for (let key in methods) {
  Vue.prototype[key] = methods[key];
}
// 全局组件注册--start
// 顶部导航栏组件
import topNav from './components/topNav.vue'
Vue.component('topNav', topNav)
// picker选择器组件
import inputPkPop from './components/inputPkPop.vue'
Vue.component('inputPkPop',inputPkPop)
// 全局组件注册end

let vm = new Vue({
  axios,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default vm
