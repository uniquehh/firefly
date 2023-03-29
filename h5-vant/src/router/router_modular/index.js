
const router_modular = [
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
export default router_modular