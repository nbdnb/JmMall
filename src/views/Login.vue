<template>
  <div class="login">
    <div class="login-header">
      <i @click='goBack'>&#xe636;</i>
      <p>登录</p>
      <em>注册</em>
    </div>
    <div class="login-info">
      <input type="text" placeholder="请输入用户名" v-model="username">
      <input type="password" placeholder="请输入密码" v-model="password">
      <label for="rememberme"><input type="checkbox" id="rememberme">记住我</label>
      <button @click="doLogin">登录</button>
    </div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui'
import { mapMutations, mapGetters, mapState } from 'vuex'
import Joi from '@hapi/joi'
const schema = Joi.object().keys({
  username: Joi.string().alphanum().min(3).max(30).required().error(() => '用户名不正确'),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
})
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters([
      'isLogin'
    ]),
    ...mapState([
      'isLoggingIn'
    ])
  },
  watch: {
    isLogin () {
      if (this.isLogin === true) {
        const { from = '/home' } = this.$route.params
        this.$router.push(from)
      }
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    ...mapMutations([
      'loginSuccess',
      'toggleIsLogging'
    ]),
    doLogin () {
      const { username, password } = this
      Joi.validate({ username, password }, schema, (err, value) => {
        console.log(err, value)
        if (err) {
          this.$toast('用户名或密码不正确')
        } else {
          this.toggleIsLogging()
          Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
          })
          this.$http.login({ username, password })
            .then(resp => {
              this.toggleIsLogging()
              Indicator.close()
              if (resp.data.code === 200) {
                this.loginSuccess(resp.data.data)
              } else {
                this.$toast('用户名或密码不正确')
              }
            })
        }
      })
    }
  }
}
</script>

<style lang='scss'>
  .login{
    &-header{
      height: 45px;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eee;
      color: #787878;
      margin-bottom: 50px;
      p{
        color: #333;
      }
      i{
        font-size: 30px;
      }
    }
    &-info{
      padding: 0 40px;
      input{
        width: 100%;
        box-sizing: border-box;
        height: 40px;
        background-color: #f5f5f5;
        border-radius: 20px;
        border: none;
        line-height: 40px;
        padding-left: 20px;
        margin: 10px 0;
        color: #999;
      }
      label{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        color: #666;
        font-size: 14px;
        input{
          width: 16px;
          height: 16px;
          border: none;
          margin-right: 6px;
        }
      }
      button{
        width: 100%;
        height: 40px;
        background-color: #feb2c5;
        border-radius: 20px;
        border: none;
        line-height: 40px;
        color: #fff;
        margin-top: 40px;
        outline: none;
      }
    }
  }
</style>
