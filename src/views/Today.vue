<template>
<div
  v-infinite-scroll="getData"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10"
>
  <JmProductItem
    v-for="data in homeDataList"
    :key="data.id"
    :id="data.id"
    :title="data.title"
    :image="data.image"
    :price="data.price"
    :originPrice="data.originPrice"
    :saleNum="data.saleNum"
  ></JmProductItem>
  <div v-if="isEnd" class="nomore">没有更多了...</div>
</div>
</template>

<script>
import JmProductItem from '@/components/JmProductItem'
export default {
  name: 'today',
  components: {
    JmProductItem
  },
  data () {
    return {
      homeDataList: [],
      start: 0,
      isEnd: false,
      loading: false
    }
  },
  created () {
    // this.getData()
  },
  methods: {
    getData () {
      this.loading = true
      this.$http.getHome(this.start).then(resp => {
        this.homeList = resp.items.list.reduce((res, item) => {
          if (item.cid !== undefined) res.push(item)
          return res
        }, [])
        this.homeDataList = this.homeDataList.concat(this.homeList)
        this.homeDataList.title = this.homeDataList.forEach((item) => {
          item.title = item.title.slice(0, 26) + '...'
        })
        this.isEnd = resp.items.isEnd
        this.start = resp.items.nextIndex
        this.loading = false
      })
    }
  }
}
</script>

<style lang='scss'>

</style>
