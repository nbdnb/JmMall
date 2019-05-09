import Vue from 'vue'
import App from './App.vue'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import router from './router/index'
import * as $http from './requests/index'

import BackTop from './components/BackTop'

Vue.component('BackTop', BackTop)

Vue.prototype.$http = $http

Vue.config.productionTip = false
Vue.use(MintUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
