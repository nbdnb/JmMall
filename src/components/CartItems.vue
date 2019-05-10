<template>
  <div class="cartItems">
    <label class="sq-cart-item__checkbox">
      <input
        type="checkbox"
        :checked="isChecked"
        @change='cartIsChecked(id)'
      /><span></span>
    </label>
    <dl>
      <dt>
        <img :src="img" />
      </dt>
      <dd>
        <p ref="myTitle">{{title}}</p>
        <p>
          <span>¥{{price | toFixed2}}</span>
          <span>
            <em @click='cartItemDecrement(id)'>-</em>
            <em class="count">{{count}}</em>
            <em @click='cartItemIncrement(id)'>+</em>
          </span>
        </p>
      </dd>
    </dl>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'cart-items',
  props: {
    id: {
      type: Number,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    count: {
      type: Number,
      default: 0
    },
    isChecked: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    ...mapMutations([
      'cartItemIncrement',
      'cartItemDecrement',
      'cartIsChecked'
    ])
  }
}
</script>

<style lang='scss' scoped>
.cartItems{
  width: 100%;
  display: flex;
  padding: 10px;
  height: 132px;
  box-sizing: border-box;
  border-bottom: 1px solid #f5f5f5;
  align-items: center;
  label{
    width: 5%;
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
      width: 16px;
      height: 16px;
      border: 1px solid #999;
      position: relative;
      border-radius: 3px;
    }
  }
  dl{
    flex: 1;
    height: 130px;
    background-color: rgb(255, 255, 255);
    padding-right: 6px;
    dt{
      width: 45%;
      height: 130px;
      position: relative;
      float: left;
      img{
        width: 70%;
        height: 70%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
      }
    }
    dd{
      float: left;
      width: 55%;
      height: 130px;
      p:nth-child(1){
        font-size: 13px;
        margin-bottom: 36px;
        margin-top: 14px;
        color: #5e5e5e;
      }
      p:nth-child(2){
        font-size: 20px;
        color: #ea5172;
        display: flex;
        justify-content: space-between;
        span:nth-child(2){
          color: #999;
          font-size: 12px;
          text-decoration: line-through;
          margin-left: 6px;
          height: 22px;
          border: 1px solid #999;
          border-radius: 3px;
          em {
            display: inline-block;
            width: 22px;
            height: 22px;
            line-height: 22px;
            text-align: center;
            &.count {
              width: auto;
              padding: 0 4px;
              border: 1px solid #999;
              border-width: 0 1px;
            }
          }
        }
      }
    }
  }
}
</style>
