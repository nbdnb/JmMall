<template>
  <div class="login">
    <div class="login-header">
      <i @click='goBack'>&#xe636;</i>
      <p>注册</p>
      <em @click='goToLogin'>登录</em>
    </div>
    <div class="login-info">
      <input type="text" placeholder="请输入用户名" v-model="username">
      <input type="password" placeholder="请输入密码" v-model="password">
      <button @click="doRegister">注册</button>
    </div>
  </div>
</template>

<script>
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
  methods: {
    goBack () {
      this.$router.back()
    },
    goToLogin () {
      this.$router.push('/login')
    },
    doRegister () {
      const { username, password } = this
      Joi.validate({ username, password }, schema, (err, value) => {
        console.log(err, value)
        if (err) {
          this.$toast('用户名或密码不正确')
        } else {
          this.$router.push('/login')
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
