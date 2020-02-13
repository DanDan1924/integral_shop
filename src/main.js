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
  Tabbar, 
  TabbarItem,
  Swipe, SwipeItem,
  Lazyload  
} from "vant";
Vue.use(Tabbar)
.use(TabbarItem)
.use(Swipe)
.use(SwipeItem)
.use(Lazyload)
// 按需加载vant组件 end