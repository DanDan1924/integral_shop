const shopIndex = () => import('@/views/index.vue')
const shopMy = () => import('@/views/my.vue')
const shopDetail = () => import('@/views/shopDetail.vue')


export default [

  {
    name: 'shop-index',
    path: '/',
    component: shopIndex
  },
  {
    name: 'shop-my',
    path: '/my',
    component: shopMy
  },
  {
    name: 'shop-detail',
    path: '/shopDetail',
    component: shopDetail
  }  
]
