import Vue from 'vue'
import App from './App.vue'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import router from './router/index'
import * as $http from './requests/index'

import BackTop from './components/BackTop'

import store from './store'

Vue.component('BackTop', BackTop)

Vue.prototype.$http = $http

Vue.config.productionTip = false
Vue.use(MintUI)

Vue.mixin({
  filters: {
    lt100 (value) {
      return value > 99 ? '99+' : value
    },
    toFixed2 (v) {
      return v.toFixed(2)
    }
  }
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.isAuthRequired === true) {
//     if (store.getters.isLogin) {
//       next()
//     } else {
//       next({
//         name: 'login',
//         params: {
//           from: to.path
//         }
//       })
//     }
//   } else {
//     next()
//   }
// })

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
