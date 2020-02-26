import Vue from 'vue'
import router from './router'

import App from './App.vue'
import 'lib-flexible'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router
}).$mount('#app')

// 按需加载vant组件 start
import { 
  Dialog,
  Popup,
  Toast,
  Tabbar, 
  TabbarItem,
  Swipe, SwipeItem,
  Lazyload,
  Image,
  Tab, Tabs,
  Card,
  SubmitBar,
  Sku,
  AddressEdit,
  AddressList,
  Calendar

} from "vant";
Vue
.use(Dialog)
.use(Popup)
.use(Toast)
.use(Tabbar)
.use(TabbarItem)
.use(Swipe)
.use(SwipeItem)
.use(Lazyload)
.use(Image)
.use(Tab)
.use(Tabs)
.use(Card)
.use(SubmitBar)
.use(Sku)
.use(AddressEdit)
.use(AddressList)
.use(Calendar)


// 按需加载vant组件 end