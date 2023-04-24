import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible';
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/iconfont/iconfont.css'
import axios from 'axios'
import methods from '@/util/methods'
import myDirective from './util/myDirective.js'
Vue.use(Vant);
Vue.config.productionTip = false

// 在vue实例上定义自定义指令
Object.keys(myDirective).forEach((item,index) => {
  Vue.directive(item,Object.values(myDirective)[index])
})
// 注册全局方法
Object.keys(methods).forEach((item) => {
  Vue.prototype[item] = methods[item]
})
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
