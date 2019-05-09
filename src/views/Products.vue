<template>
  <div
    v-infinite-scroll="getProductsData"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10"
  >
    <JmProductItem
      v-for="data in productsList"
      :key="data.id"
      :id="data.id"
      :title="data.title"
      :image="data.image"
      :price="data.price"
      :originPrice="data.originPrice"
      :saleNum="data.saleNum"
    ></JmProductItem>

      <BackTop topContainer=".main"></BackTop>

    <div v-if="isEnd" class="nomore">没有更多了...</div>
  </div>
</template>

<script>
import JmProductItem from '@/components/JmProductItem'
export default {
  name: 'products',
  components: {
    JmProductItem
  },
  data () {
    return {
      productsList: [],
      start: 0,
      isEnd: false,
      loading: false
    }
  },
  methods: {
    getProductsData () {
      this.loading = true
      const { proId } = this.$route.params
      this.$http.getProductsList(proId, this.start)
        .then(resp => {
          this.productsList = this.productsList.concat(resp.items.list)
          this.productsList.title = this.productsList.forEach((item) => {
            item.title = item.title.slice(0, 26) + '...'
          })
          this.isEnd = resp.items.isEnd
          this.start = resp.items.nextIndex
          this.loading = false
        })
    },
    backTop () {
      console.log(1)
    }
  },
  // beforeRouteEnter (to, from, next) {
  //   next(vm => {
  //     vm.getProductsData()
  //   })
  // },
  beforeRouteUpdate (to, from, next) {
    this.productsList = []
    this.start = 0
    next()
    this.getProductsData()
  }
}
</script>

<style lang='scss' scoped>
.nomore{
  background-color: #eee;
  color: #999;
  line-height: 32px;
  margin: 8px;
  text-align: center;
  border-radius: 2px;
  font-size: 14px;
}
</style>
