export default {
  cart: JSON.parse(window.localStorage.getItem('jm-cart')) || [],
  userInfo: JSON.parse(window.localStorage.getItem('jm-user-info')) || {
    id: '',
    displayName: '',
    avatar: '',
    token: ''
  },
  isLoggingIn: false
}
