<template>
  <div class="products">
    <div class="products-header">
      <ul>
        <router-link
          v-for="product in productsList"
          :key="product.id"
          :to="`/assemble/${product.id}`"
          tag="li"
        >{{product.name}}</router-link>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'assemble',
  data () {
    return {
      productsList: []
    }
  },
  created () {
    this.$http.getHomeData()
      .then(resp => {
        resp.list.shift()
        this.productsList = resp.list
        this.$nextTick()
          .then(() => {
            const { proId = resp.list[0].id } = this.$route.params
            console.log(this.$route.params)
            this.$router.push(`/assemble/${proId}`)
          })
      })
  }
}
</script>

<style lang="scss" scoped>
.products{
  width: 100%;
  .products-header{
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #eee;
    overflow-y: hidden;
    ul{
      width: 300%;
      height: 45px;
      li{
        float: left;
        padding: 0 10px;
        height: 45px;
        line-height: 45px;
        color: #666;
        font-size: 14px;
        border-bottom: 2px solid #fff;
        box-sizing: border-box;
        &.router-link-exact-active,
        &.router-link-active {
          color: #ea5172;
          border-bottom-color: #ea5172;
        }
      }
    }
  }
}
</style>
