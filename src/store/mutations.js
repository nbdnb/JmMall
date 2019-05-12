export default {
  addToCart (state, productInfo) {
    const isInCart = state.cart.some(item => item.id === productInfo.id)
    if (isInCart) {
      state.cart = state.cart.map(item => {
        if (item.id === productInfo.id) {
          item.count += 1
        }
        return item
      })
    } else {
      state.cart.push({
        ...productInfo,
        count: 1,
        isChecked: true
      })
    }
  },
  cartItemIncrement (state, id) {
    state.cart = state.cart.map(item => {
      if (item.id === id) {
        item.count += 1
      }
      return item
    })
  },
  cartItemDecrement (state, id) {
    state.cart = state.cart.map(item => {
      if (item.id === id && item.count > 1) {
        item.count -= 1
      }
      return item
    })
  },
  cartIsChecked (state, id) {
    state.cart = state.cart.map(item => {
      if (item.id === id) {
        item.isChecked = !item.isChecked
      }
      return item
    })
  },
  loginSuccess (state, userInfo) {
    state.userInfo = userInfo
  },
  toggleIsLogging (state) {
    state.isLoggingIn = !state.isLoggingIn
  },
  toggleAllChecked (state) {
    if (state.cart.every(item => item.isChecked === true)) {
      state.cart = state.cart.map(item => {
        item.isChecked = false
        return item
      })
    } else {
      state.cart = state.cart.map(item => {
        item.isChecked = true
        return item
      })
    }
  },
  exitLogin () {
    if (window.localStorage.getItem('jm-user-info') !== null) {
      if (confirm('确定要退出吗？')) {
        window.localStorage.removeItem('jm-user-info')
      }
    }
  }
}
