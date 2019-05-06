<template>
<div class="today-products">
  <a href="#"
    v-for="data in homeDataList"
    :key="data.id"
  >
    <dl>
      <dt>
        <img :src="data.image" />
      </dt>
      <dd>
        <p ref="myTitle">{{data.title}}</p>
        <p>
          <span>¥{{data.price}}</span>
          <span>¥{{data.originPrice}}</span>
        </p>
        <p>{{data.saleNum}}条评论</p>
      </dd>
    </dl>
  </a>
</div>
</template>

<script>
export default {
  name: 'today',
  data () {
    return {
      homeDataList: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$http.getHome().then(resp => {
        this.homeDataList = resp.items.list.reduce((res, item) => {
          if (item.cid !== undefined) res.push(item)
          return res
        }, [])
        this.homeDataList.title = this.homeDataList.forEach((item) => {
          item.title = item.title.slice(0,26)+'...'
        })
      })
    }
  }
}
</script>

<style lang='scss'>
  .today-products{
    width: 100%;
    overflow-x: hidden;
    background-color: #f5f5f5;
    a{
      display: block;
      width: 100%;
      margin-bottom: 8px;
      dl{
        height: 130px;
        background-color: #fff;
        padding-right: 19px;
        display: flex;
        dt{
          width: 45%;
          height: 130px;
          position: relative;
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
            span:nth-child(2){
              color: #999;
              font-size: 12px;
              text-decoration: line-through;
              margin-left: 6px;
            }
          }
          p:nth-child(3){
            font-size: 11px;
            color: #999;
            margin-top: 8px;
          }
        }
      }
    }
  }
</style>
