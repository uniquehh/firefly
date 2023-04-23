import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'IndexPage',
    component: () => import('@/views/IndexPage')
  },
  {
    path: '/baoBei',
    name: 'baoBei',
    component: () => import('@/views/baoBei.vue')
  },
  {
    path: '/keHu',
    name: 'keHu',
    component: () => import('@/views/keHu.vue')
  },
  {
    path: '/chengDan',
    name: 'chengDan',
    component: () => import('@/views/chengDan.vue')
  },
  {
    path: '/baoBeiList',
    name: 'baoBeiList',
    component: () => import('@/views/baoBeiList.vue')
  }
    
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
