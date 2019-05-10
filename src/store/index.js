import Vue from 'vue'
import VueX from 'vuex'

import state from './state'
import mutations from './mutations'
import getters from './getters'

Vue.use(VueX)

const syncCartToStorage = store => {
  store.subscribe((mutation, state) => {
    window.localStorage.setItem('jm-cart', JSON.stringify(state.cart))
  })
}

const syncUserInfoStorage = store => {
  store.subscribe((mutation, state) => {
    if (mutation.type === 'loginSuccess') {
      window.localStorage.setItem('jm-user-info', JSON.stringify(state.userInfo))
    }
  })
}

export default new VueX.Store({
  strict: process.env.NODE_ENV === 'development',
  plugins: [syncCartToStorage, syncUserInfoStorage],
  state,
  getters,
  mutations
})
