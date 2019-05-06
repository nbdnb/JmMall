<template>
  <div class="header">
    <div class="jm-header">
      <a href="javascript:;" @click='show()'>
        <i>&#xe71c;</i>
        <span>搜索商品 分类 功效</span>
      </a>
      <i>&#xe684;</i>
    </div>
    <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="banner in swiperData" :key="banner.id">
          <img :src="banner.imageUrl" :alt="banner.title">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>

    <div class="content">
      <div class="content-top">
        <router-link to='/home/today'>今日十点上新</router-link>
        <router-link to='/home/tomorrow'>明日十点预告</router-link>
      </div>

    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Swiper from 'swiper/dist/js/swiper.min.js'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'home',
  data () {
    return {
      swiperData: []
    }
  },
  created () {
    this.$http.getHome().then(resp => {
      this.swiperData = resp.banners
      this.$nextTick(() => {
        this.initSwiper()
      })
    })
  },
  methods: {
    initSwiper () {
      this.swiper = new Swiper(this.$refs.swiper, {
        loop: true, // 循环模式选项

        autoplay: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }
      })
    },
    show () {
      this.$emit('search-show')
    }
  }
}
</script>

<style lang='scss'>
  .jm-header{
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    a{
      width: 300px;
      height: 30px;
      background-color: #f5f5f5;
      box-shadow: 1px 1px 1px hsl(0, 0%, 87%) inset;
      border-radius: 20px;
      color: #a4a4a4;
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      span{
        margin-left: 4px;
      }
    }
    i{
      font-size: 24px;
      color: #aaa;
    }
  }
  .swiper-container {
    width: 100%;
    height: 0;
    padding-top: percentage(400/1080);
    .swiper-wrapper{
      position:absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
    }
    img{
      max-width: 100%;
    }
  }

  .content{
    width: 100%;
    color: #666;
    font-size: 14px;
    .content-top{
      width: 100%;
      height: 45px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      a{
        width: 50%;
        text-align: center;
        color: #666;
        &.router-link-exact-active,
        &.router-link-active {
          color: #ea5172;
        }
      }
    }
  }
</style>
