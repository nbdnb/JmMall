<template>
  <div>
    <div class="search-header">
      <i @click='goBack'>&#xe636;</i>
      <span>{{title}}</span>
      <i>&#xe71f;</i>
    </div>
    <div class="search-desc">
      <span @click="priceNomal" :class="isActive ? 'active' : '' ">默认</span>
      <span @click="priceAsce" :class="isActive1 ? 'active' : '' ">价格最低</span>
      <span @click="priceDesc" :class="isActive2 ? 'active' : '' ">价格最高</span>
    </div>
    <JmProductItem
      v-for="data in searchResult"
      :key="data.id"
      :id="data.id"
      :title="data.title"
      :image="data.image"
      :price="data.price"
      :originPrice="data.originPrice"
      :saleNum="data.saleNum"
    ></JmProductItem>
  </div>
</template>

<script>
import JmProductItem from '@/components/JmProductItem'
export default {
  name: 'search',
  data () {
    return {
      title: this.$route.query.value,
      searchResult: [],
      isActive: true,
      isActive1: false,
      isActive2: false
    }
  },
  created () {
    this.priceNomal()
  },
  components: {
    JmProductItem
  },
  methods: {
    priceDesc () {
      this.isActive = this.isActive1 = false
      this.isActive2 = true
      this.searchResult = this.searchResult.sort((a, b) => {
        return b.price - a.price
      })
    },
    priceAsce () {
      this.isActive = this.isActive2 = false
      this.isActive1 = true
      this.searchResult = this.searchResult.sort((a, b) => {
        return a.price - b.price
      })
    },
    priceNomal () {
      this.isActive2 = this.isActive1 = false
      this.isActive = true
      this.$http.getSearchData(this.title)
        .then(resp => {
          this.searchResult = resp.list
          this.searchResult.title = this.searchResult.forEach((item) => {
            item.title = item.title.slice(0, 26) + '...'
          })
        })
    },
    goBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.search-header{
  height: 45px;
  border-bottom: 1px solid #eee;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span{
    color: #333;
    font-size: 16px;
  }
  i{
    font-size: 30px;
    color: #bbb;
  }
}
.search-desc {
  height: 45px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span{
    font-size: 14px;
    color: #666;
    &.active{
      color: #ea5172;
    }
  }
}

// a{
//   display: block;
//   width: 100%;
//   margin-bottom: 8px;
//   border-bottom: 1px solid #eee;
//   dl{
//     height: 130px;
//     background-color: #fff;
//     padding-right: 19px;
//     display: flex;
//     dt{
//       width: 45%;
//       height: 130px;
//       position: relative;
//       img{
//         width: 70%;
//         height: 70%;
//         position: absolute;
//         top: 0;
//         left: 0;
//         right: 0;
//         bottom: 0;
//         margin: auto;
//       }
//     }
//     dd{
//       width: 55%;
//       height: 130px;
//       p:nth-child(1){
//         font-size: 13px;
//         margin-bottom: 36px;
//         margin-top: 14px;
//         color: #5e5e5e;
//       }
//       p:nth-child(2){
//         font-size: 20px;
//         color: #ea5172;
//         span:nth-child(2){
//           color: #999;
//           font-size: 12px;
//           text-decoration: line-through;
//           margin-left: 6px;
//         }
//       }
//       p:nth-child(3){
//         font-size: 11px;
//         color: #999;
//         margin-top: 8px;
//       }
//     }
//   }
// }
</style>
