const shopIndex = () => import('@/views/index.vue')
const shopMy = () => import('@/views/my.vue')
const shopDetail = () => import('@/views/shopDetail.vue')
const shopList = () => import('@/views/shopList.vue')
const submitOrder = () => import('@/views/submitOrder.vue')
const addressEdit = () => import('@/views/addressEdit.vue')
const addressManage = () => import('@/views/addressManage.vue')
const sign = () => import('@/views/sign.vue')

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
  },
  {
    name: 'shop-list',
    path: '/shopList',
    component: shopList
  },   
  {
    name: 'submit-order',
    path: '/submit',
    component: submitOrder
  },
  {
    name: 'address-edit',
    path: '/addressEdit',
    component: addressEdit
  },
  {
    name: 'address-manage',
    path: '/addressManage',
    component: addressManage
  },
   {
    name: 'sign',
    path: '/sign',
    component: sign
  }               
]
