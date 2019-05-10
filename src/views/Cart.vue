<template>
  <div class="cart">

    <div class="cart-noitem" v-if="isCartEmpty">
      <div class="cart-header">
        <i @click='goBack'>&#xe636;</i>
        <p>购物车</p>
        <i @click="goHome">&#xe71f;</i>
      </div>
      <p class="nocart">您的购物车中没有商品，请先去挑选心爱的商品吧！</p>
      <button @click="goHome">去逛逛</button>
    </div>

    <div class="cart-item" v-else>
      <div class="cart-main">
        <div class="cart-header">
          <i @click='goBack'>&#xe636;</i>
          <p>购物车</p>
          <i @click="goHome">&#xe71f;</i>
        </div>
        <CartItems
          v-for="item in cart"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :price="item.price"
          :count="item.count"
          :img="item.img"
          :isChecked="item.isChecked"
        ></CartItems>
      </div>

      <div class="cart-footer">
        <div class="cart-countNum">
          <label class="sq-cart-item__checkbox">
            <input type="checkbox" /><span></span>
            <em>全选</em>
          </label>
          <span>
            <em>合计</em>
            <em>¥{{CartPriceChecked | toFixed2}}</em>
          </span>
        </div>
        <div class="btnMoney">
          <span>去结算(<em>{{CartCountChecked}}</em>)</span>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import { mapState, mapGetters } from 'vuex'
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
  },
  computed: {
    ...mapState([
      'cart'
    ]),
    ...mapGetters([
      'CartCountChecked',
      'CartPriceChecked',
      'isCartEmpty'
    ])
  }
}
</script>

<style lang='scss' scoped>
.cart{
  height: 100%;
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
  .cart-noitem{
    text-align: center;
    .nocart{
      padding: 0 10px;
      font-size: 14px;
      margin-top: 60%;
      margin-bottom: 30px;
    }
    button{
      width: 125px;
      height: 35px;
      background-color: #fe4070;
      border: none;
      border-radius: 20px;

    }
  }
  .cart-item{
    height: 100%;
    display: flex;
    flex-direction: column;
    .cart-main{
      flex: 1;
      overflow-x: hidden;
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
}
</style>
