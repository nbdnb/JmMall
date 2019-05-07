<template>
  <router-link :to="`/detail/${id}`" class="today-products" tag="div">
    <div class="product-mian">
      <dl>
        <dt>
          <img :src="image" />
        </dt>
        <dd>
          <p ref="myTitle">{{title}}</p>
          <p>
            <span>¥{{price}}</span>
            <span>¥{{originPrice}}</span>
          </p>
          <p>{{saleNum}}条评论</p>
        </dd>
      </dl>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'jmproductItem',
  props: {
    id: Number,
    image: String,
    title: String,
    price: Number,
    originPrice: Number,
    saleNum: Number
  }
}
</script>

<style lang='scss'>
.today-products{
  width: 100%;
  overflow-x: hidden;
  background-color: #f5f5f5;
  .product-mian{
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
