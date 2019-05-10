<template>
  <div class="detail">
    <div class="detail-xq">
      <div class="detail-header">
        <i @click='goBack'>&#xe636;</i>
        <p>{{detailData.title}}</p>
        <i @click="goHome">&#xe71f;</i>
      </div>
      <div class="swiper-container" ref="swiper">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for='data in detailBanner'
            :key="data.id"
          >
            <img :src="data.url" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="detail-main">
        <div class="detail-msg">
          <p>{{detailData.title}}</p>
          <p>
            <span>
              <em>¥{{detailData.price}}</em>
              <em>¥{{detailData.originPrice}}</em>
            </span>
            <span>月销量：{{detailData.saleNum}}</span>
          </p>
        </div>
        <p class="title-img">
          <span>----- </span>
          <span>图文详情</span>
          <span> -----</span>
        </p>
        <p
          class="detail-img"
          v-for="img in detailImg"
          :key="img.photo.id"
        >
          <img :src="img.photo.url" />
        </p>
      </div>
    </div>
    <div class="detail-footer">
      <span>
        <i>&#xe713;</i>
        <span>店铺</span>
      </span>
      <span>
        <i>&#xe718;</i>
        <span @click='goCart'>购物车</span>
      </span>
      <button
        @click='addToCart({
          id: detailData.id,
          title: detailData.title,
          price: detailData.price,
          img: detailData.image
        })'
      >加入购物车</button>
      <button>立即购买</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Swiper from 'swiper/dist/js/swiper.min.js'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'detail',
  data () {
    return {
      detailData: {},
      detailImg: [],
      detailBanner: []
    }
  },
  created () {
    const { id } = this.$route.params
    this.$http.getDetails(id)
      .then(resp => {
        this.detailData = resp.detail
        console.log(this.detailData)
        this.detailBanner = resp.detail.photo
        this.detailImg = resp.detail.descContentList
        this.detailImg.shift()
        this.$nextTick(() => {
          this.initSwiper()
        })
      })
  },
  methods: {
    initSwiper () {
      this.swiper = new Swiper(this.$refs.swiper, {
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }
      })
    },
    goBack () {
      this.$router.back()
    },
    goHome () {
      this.$router.push('/home')
    },
    goCart () {
      this.$router.push('/cart')
    },
    ...mapMutations([
      'addToCart'
    ])
  }
}
</script>

<style lang='scss' scoped>
.swiper-container {
  width: 100%;
  height: 0;
  padding-top: 100%;

  .swiper-wrapper {
    position: absolute;
    left: 0;
    top: 0;
  }

  img {
    max-width: 100%;
  }
}
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.detail{
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  &-xq{
    flex: 1;
    overflow-x: hidden;
    .detail-header{
      height: 45px;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eee;
      color: #787878;
      p{
        width: 75%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #333;
      }
      i{
        font-size: 30px;
      }
    }
    .detail-main{
      padding: 10px;
      .detail-msg{
        p{
          line-height: 22px;
          font-size: 14px;
          color: #333;
          &:nth-child(2){
            display: flex;
            justify-content: space-between;
            margin: 10px 0;
            span{
              em{
                &:nth-child(1){
                  font-size: 28px;
                  color: #F33873;
                }
                &:nth-child(2){
                  font-size: 13px;
                  color: #666;
                  text-decoration: line-through;
                  margin-left: 4px;
                }
              }
            }
          }
        }
      }
      .title-img{
        text-align: center;
        font-size: 12px;
        color: #666;
        margin: 20px 0;
      }
      .detail-img{
        width: 100%;
        height: 0;
        padding-top: calc(100%*388/600);
        position: relative;
        img{
          max-width: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
  &-footer{
    width: 100%;
    height: 50px;
    border-top: 1px solid #eee;
    display: flex;
    align-items: center;
    > span{
      width: 14%;
      color: #bbb;
      border-right: 1px solid #eee;
      height: 45px;
      text-align: center;
      i{
        font-size: 30px;
      }
      span{
        display: block;
        font-size: 10px;
      }
    }
    > button{
      flex: 1;
      height: 50px;
      border: none;
      font-size: 14px;
      outline: none;
      &:nth-child(3){
        background-color: #ffcfdf;
        color: #fe4070;
      }
      &:nth-child(4){
        background-color: #ff5593;
        color: #fff;
      }
    }
  }
}
</style>
