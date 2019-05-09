<template>
  <div class="backtop" v-show="isShow">
    <i @click="backToTop">&#xe661;</i>
  </div>
</template>

<script>
export default {
  name: 'backtop',
  data () {
    return {
      isShow: false,
      container: document.querySelector(this.topContainer)
    }
  },
  props: ['topContainer'],
  created () {
    this.container.addEventListener('scroll', (e) => {
      if (this.container.scrollTop > 100) {
        this.isShow = true
      }
      if (this.container.scrollTop <= 0) {
        this.isShow = false
      }
    })
  },
  methods: {
    backToTop () {
      let scrollToptimer = setInterval(() => {
        let top = this.container.scrollTop
        let speed = top / 4
        if (this.container.scrollTop !== 0) {
          this.container.scrollTop -= speed
        } else {
          this.container.scrollTop -= speed
        }
        if (top === 0) {
          clearInterval(scrollToptimer)
        }
      }, 30)
    }
  }
}
</script>

<style lang='scss' scoped>
.backtop{
  i{
    position: absolute;
    bottom: 60px;
    right: 10px;
    font-size: 36px;
    color: #999;
  }
}
</style>
