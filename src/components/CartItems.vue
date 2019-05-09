<template>
  <div class="cartItems">
    <label class="sq-cart-item__checkbox">
      <input type="checkbox" /><span></span>
    </label>
    <dl>
      <dt>
        <img src="http://img.alicdn.com/i1/2605445457/O1CN01ct7uDM1qBLqbxmF4E_!!2605445457.jpg_400x400q90.jpg" />
      </dt>
      <dd>
        <p ref="myTitle">加西妮哑光BB霜女遮瑕保湿不油腻粉底液补水学生用裸妆防水不脱妆</p>
        <p>
          <span>¥327</span>
          <span>
            <em>-</em>
            <em class="count">1</em>
            <em>+</em>
          </span>
        </p>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'cart-items'
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
