import Vue from 'vue'
import VueRouter from 'vue-router'
import router_modular from '@/router/router_modular/index.js'
Vue.use(VueRouter)

const routes = [
  ...router_modular
]

const router = new VueRouter({
  routes
})
//全局路由守卫
// router.beforeEach((to, from, next) => {
//   next()
// })
// router.afterEach((to, from) => {

// })
export default router
