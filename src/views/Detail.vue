<template>
  <div class="detail">
    <div class="detail-xq">
      <div class="swiper-container" ref="swiper">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for='data in detailData.photo'
            :key="data.id"
          >
            <img :src="data.url" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="detail-main">
        <div class="detail-msg">
          <p>牛仔裤女新款韩版裤子显瘦减龄背带裤百搭宽松阔腿裤女学生吊带裤</p>
          <p>牛仔裤女新款韩版裤子显瘦减龄背带裤百搭宽松阔腿裤女学生吊带裤</p>
          <p>牛仔裤女新款韩版裤子显瘦减龄背带裤百搭宽松阔腿裤女学生吊带裤</p>
          <p>牛仔裤女新款韩版裤子显瘦减龄背带裤百搭宽松阔腿裤女学生吊带裤</p>
          <p>牛仔裤女新款韩版裤子显瘦减龄背带裤百搭宽松阔腿裤女学生吊带裤</p>
          <p>牛仔裤女新款韩版裤子显瘦减龄背带裤百搭宽松阔腿裤女学生吊带裤</p>
          <p>牛仔裤女新款韩版裤子显瘦减龄背带裤百搭宽松阔腿裤女学生吊带裤</p>
          <p>牛仔裤女新款韩版裤子显瘦减龄背带裤百搭宽松阔腿裤女学生吊带裤</p>
          <p>牛仔裤女新款韩版裤子显瘦减龄背带裤百搭宽松阔腿裤女学生吊带裤</p>
          <p>牛仔裤女新款韩版裤子显瘦减龄背带裤百搭宽松阔腿裤女学生吊带裤</p>
          <p>牛仔裤女新款韩版裤子显瘦减龄背带裤百搭宽松阔腿裤女学生吊带裤</p>
          <p>牛仔裤女新款韩版裤子显瘦减龄背带裤百搭宽松阔腿裤女学生吊带裤</p>
          <p>牛仔裤女新款韩版裤子显瘦减龄背带裤百搭宽松阔腿裤女学生吊带裤</p>
          <p>
            <span>49.94</span>
            <span>月销量：1019</span>
          </p>
        </div>
        <p class="title-img">
          <span></span>
          <span>图文详情</span>
          <span></span>
        </p>
      </div>
    </div>
    <div class="detail-footer">
      <i></i>
      <i></i>
      <button>加入购物车</button>
      <button>立即购买</button>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper/dist/js/swiper.min.js'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'detail',
  data () {
    return {
      detailData: {}
    }
  },
  created () {
    const { id } = this.$route.params
    this.$http.getDetails(id)
      .then(resp => {
        this.detailData = resp.detail
        console.log(this.detailData)
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
    }
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
  .detail-xq{
    flex: 1;
    overflow-x: hidden;
  }
  .detail-footer{
    width: 100%;
    height: 45px;
    border-top: 1px solid #dedede;
  }
}
</style>
