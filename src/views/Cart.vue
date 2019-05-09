<template>
  <div class="cart">
    <div class="cart-main">
      <div class="cart-header">
        <i @click='goBack'>&#xe636;</i>
        <p>购物车</p>
        <i @click="goHome">&#xe71f;</i>
      </div>
      <CartItems></CartItems>
      <CartItems></CartItems>
    </div>

    <div class="cart-footer">
      <div class="cart-countNum">
        <label class="sq-cart-item__checkbox">
          <input type="checkbox" /><span></span>
          <em>全选</em>
        </label>
        <span>
          <em>合计</em>
          <em>¥929</em>
        </span>
      </div>
      <div class="btnMoney">
        <span>去结算(<em>5</em>)</span>
      </div>
    </div>
  </div>
</template>

<script>
import CartItems from '@/components/CartItems'
export default {
  name: 'card',
  components: {
    CartItems
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    goHome () {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang='scss' scoped>
.cart{
  height: 100%;
  display: flex;
  flex-direction: column;
  .cart-main{
    flex: 1;
    overflow-x: hidden;
    .cart-header{
      height: 45px;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eee;
      color: #787878;
      p{
        color: #333;
      }
      i{
        font-size: 30px;
      }
    }
  }
  .cart-footer{
    height: 45px;
    background-color: #fff;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    padding: 0 12px;
    .cart-countNum{
      display: flex;
      label{
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        input {
          display: none;

          &:checked + span {
            background-color: #ea5172;
            border-color: #ea5172;

            &:after {
              position: absolute;
              content: '';
              left: 2px;
              top: 3px;
              width: 10px;
              height: 5px;
              border: 2px solid #FFF;
              border-width: 0 0 2px 2px;
              transform: rotateZ(-45deg);
            }
          }
        }
        span {
        display: block;
        float: left;
        margin-right: 10px;
        width: 16px;
        height: 16px;
        border: 1px solid #999;
        position: relative;
        border-radius: 3px;
        }
      }
      > span{
        margin: 0 10px;
        em{
          &:nth-child(1){
            color: #999;
            font-size: 10px;
            margin-right: 5px;
          }
          &:nth-child(2){
            color: #fe4070;
            font-size: 16px;
          }
        }
      }
    }

    .btnMoney{
      width: 120px;
      height: 35px;
      background-color: #fe4070;
      border-radius: 20px;
      line-height: 35px;
      text-align: center;
      color: #fff;
      letter-spacing: 1px;
    }
  }
}
</style>
