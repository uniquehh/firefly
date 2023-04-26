import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'IndexPage',
    component: () => import('@/views/IndexPage'),
    children:[
      {
        path: '/gongNeng',
        name: 'gongNeng',
        component: () => import('@/views/gongNeng.vue')
      },
      {
        path: '/baoBiao',
        name: 'baoBiao',
        component: () => import('@/views/baoBiao.vue')
      },
    ]
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
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  }
    
]

const router = new VueRouter({
  routes
})
//全局路由守卫
router.beforeEach((to, from, next) => {
  let isLogin = window.localStorage.getItem('isLogin')
  // console.log(isLogin,to,from)

  if (isLogin) {
    if(to.path==='/login'&&from.path!='/'){
      next({path:from.path,replace:true})
    }else if(to.path==='/login'&&from.path=='/'){
      next({path:'/index',replace:true});
    }else {
      next()
    }
  } else {
    if(to.path==='/login'){
      next({replace:true});
    }else{
      next({path:'/login',replace:true});
    }
  }

})
export default router
