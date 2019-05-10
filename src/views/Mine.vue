<template>
  <div class="mine">
    <div class="mine-header">
      <div class="mine-header-top">
        <i @click='goBack'>&#xe636;</i>
        <p>我的聚美</p>
        <i @click="goHome">&#xe71f;</i>
      </div>
      <i>&#xe7ad;</i>
      <p>
        <span>注册</span>
        <span>|</span>
        <span @click='goLogin'>登录</span>
      </p>
    </div>
    <div class="mine-main">
      <div class="odder">
        <p>
          <i>&#xe60e;</i>
          <span>我的订单</span>
        </p>
        <p>
          <span>查看我的全部订单</span>
          <i>&#xe637;</i>
        </p>
      </div>
      <div class="offer-icon">
        <ul>
          <li>
            <i>&#xe61e;</i>
            <span>待付款</span>
          </li>
          <li>
            <i>&#xe620;</i>
            <span>待收货</span>
          </li>
          <li>
            <i>&#xe61f;</i>
            <span>待评价</span>
          </li>
          <li>
            <i>&#xe611;</i>
            <span>退货/退款</span>
          </li>
        </ul>
      </div>
      <div class="odder">
        <p>
          <i>&#xe64f;</i>
          <span>我的资产</span>
        </p>
        <p>
          <i>&#xe637;</i>
        </p>
      </div>
      <div class="mymoney">
        <span>现金券</span>
        <span>红包</span>
        <span>聚美金额</span>
        <span>礼品卡</span>
      </div>
      <div class="odder">
        <p>
          <i>&#xe60d;</i>
          <span>售后服务</span>
        </p>
        <p>
          <i>&#xe637;</i>
        </p>
      </div>
      <div class="odder nomargintop">
        <p>
          <i>&#xe60f;</i>
          <span>意见反馈</span>
        </p>
        <p>
          <i>&#xe637;</i>
        </p>
      </div>
      <div class="odder nomargintop">
        <p>
          <i>&#xe624;</i>
          <span>收货地址</span>
        </p>
        <p>
          <i>&#xe637;</i>
        </p>
      </div>
      <div class="odder nomargintop">
        <p>
          <i>&#xe62b;</i>
          <span>退出登录</span>
        </p>
        <p>
          <i>&#xe637;</i>
        </p>
      </div>
      <div class="odder nomargintop" style="margin-bottom:12px;">
        <p>
          <i>&#xe62a;</i>
          <span>400-123-8888</span>
        </p>
        <p>
          <i>&#xe637;</i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mine',
  methods: {
    goHome () {
      this.$router.push('/home')
    },
    goBack () {
      this.$router.back()
    },
    goLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang='scss' scoped>
.mine{
  &-header{
    color: #fff;
    width: 100%;
    height: 185px;
    text-align: center;
    background: linear-gradient(-204deg,#fd465f 0,#fc5e9f 100%);
    &-top{
      height: 45px;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      i{
        font-size: 38px;
      }
    }
    > i{
      font-size: 70px;
    }
    > p{
      width: 155px;
      margin: 15px auto 0;
      display: flex;
      justify-content: space-between;
      font-size: 20px;
    }
  }
  &-main{
    background-color: #eee;
    overflow-x: hidden;
    .odder{
      display: flex;
      justify-content: space-between;
      margin-top: 12px;
      padding: 10px;
      height: 21px;
      background-color: #fff;
      border-bottom: 1px solid #eaeaea;
      p{
        display: flex;
        justify-content: center;
        align-items: center;
        &:nth-child(1){
          span{
            margin-left: 15px;
            font-size: 14px;
            color: #333;
          }
          i{
            font-size: 20px;
          }
        }
        &:nth-child(2){
          color: #999;
          span{
            margin-right: 10px;
            font-size: 13px;
          }
          i{
            font-size: 28px;
          }
        }
      }
    }
    .offer-icon{
      height: 70px;
      background-color: #fff;
      ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 70px;
        li{
          width: 25%;
          text-align: center;
          color: #666;
          i{
            font-size: 26px;
          }
          span{
            display: block;
            margin-top: 6px;
            font-size: 14px;
          }
        }
      }
    }
    .mymoney{
      background-color: #fff;
      height: 50px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: #666;
      border-bottom: 1px solid #eaeaea;
      font-size: 14px;
    }
    .nomargintop{
      margin-top: 0;
    }
  }
}
</style>
