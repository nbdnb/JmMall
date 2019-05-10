<template>
  <ul>
    <router-link
      tag='li'
      v-for='nav in navs'
      :key='nav.name'
      :to='nav.path'
      :event="$route.path.includes(nav.path) ? '' : 'click'"
    >
      <span class="icon" v-html="nav.meta.icon"></span>
      <span class="title">{{nav.meta.title}}</span>
      <span class="totalCount" v-show="nav.path === '/cart'">{{totalCartCount | lt100}}</span>

    </router-link>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
import routes from '@/router/routes'
export default {
  name: 'jm-header',
  data () {
    return {
      navs: routes.filter(route => route.meta.isTab === true)
    }
  },
  computed: {
    ...mapGetters([
      'totalCartCount'
    ])
  }
}
</script>

<style lang='scss' scoped>
  ul{
    display: flex;
    height: 50px;
    box-sizing: border-box;
    border-top: 1px solid #dedede;
    li{
      width: 25%;
      height: 50px;
      text-align: center;
      color: #787878;
      position: relative;
      span{
        display: block;
        &.icon{
          height: 32px;
          line-height: 32px;
          font-family: 'iconfont';
          font-size: 35px;
        }
        &.title{
          height: 18px;
          line-height: 18px;
          font-size: 12px;
        }
        &.totalCount{
          position: absolute;
          background-color: #fe4070;
          color: #fff;
          top: -4px;
          left: 55%;
          padding: 0 3px;
          line-height: 18px;
          font-size: 12px;
          border-radius: 20px;
        }
      }
      &.router-link-exact-active,
      &.router-link-active {
        color: #ea5172;
      }
    }
  }
</style>
