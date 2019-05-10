export default {
  totalCartCount (state) {
    return state.cart.reduce((total, current) => {
      total += current.count
      return total
    }, 0)
  },
  CartCountChecked (state) {
    return state.cart.filter(item => item.isChecked === true)
      .reduce((total, current) => {
        total += current.count
        return total
      }, 0)
  },
  CartPriceChecked (state) {
    return state.cart.filter(item => item.isChecked === true)
      .reduce((total, current) => {
        total += current.price * current.count
        return total
      }, 0)
  },
  isCartEmpty (state) {
    return state.cart.length === 0
  },
  isLogin (state) {
    return Boolean(state.userInfo.token)
  }
}
