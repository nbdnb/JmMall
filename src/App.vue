<template>
  <div class="app">
    <div class="main">
      <router-view @search-show='serchS()'></router-view>
    </div>

    <router-view name="footer"></router-view>

    <transition
      name="sAnimation"
      enter-active-class="animated slideInRight"
    >
      <div class="search-mask" v-show="isShow" ref="mysearch">
        <div class="search-header">
          <i class="backhome">&#xe636;</i>
          <label>
            <i @click="goBack">&#xe71c;</i>
            <input type="text"
              placeholder="搜索商品 分类 功效"
              @keyup="searchShowList"
              @keyup.enter="toSearch"
              v-model="value"
            />
          </label>
          <span @click="toSearch">搜索</span>
        </div>
        <ul class="search-list">
          <li
            v-for="search in searchList"
            :key="search.id"
          >
            <span v-if="isSearchShow">{{search.name}}</span>
            <span v-else>{{search.title}}</span>
            <i>&#xe635;</i>
          </li>
        </ul>
      </div>
    </transition>
    <div class="cover-mask" v-show="isShow"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      // 点击搜索后出现的大的半透明的盒子
      isShow: false,
      value: '',
      searchList: [],
      // 搜索时还没有在输入框输入任何内容时显示的盒子
      isSearchShow: true
    }
  },
  created () {
    this.searchInit()
  },
  methods: {
    toSearch () {
      if (this.value !== '') {
        this.$router.push(`/search?value=${this.value}`)
        this.isShow = false
      }
    },
    serchS () {
      this.isShow = true
    },
    searchShowList () {
      this.$http.getSearchData(this.value)
        .then(resp => {
          resp.list.shift()
          this.searchList = resp.list
          this.isSearchShow = false
          if (this.value === '') {
            this.isSearchShow = true
            this.searchInit()
          }
        })
    },
    searchInit () {
      this.$http.getHomeData()
        .then(resp => {
          resp.list.shift()
          this.searchList = resp.list
        })
    },
    goBack () {
      this.isShow = false
      // 未完成此功能
      // this.$refs.mysearch.style.width = "80%"
    }
  }
}
</script>

<style lang='scss'>
html,
body,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
address,
em,
img,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
// HTML5 display-role reset for older browsers
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
a{
  text-decoration: none;
}
i{
  font-family: iconfont;
}
input{
  outline: none;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
html,
body {
  height: 100%;
  overflow: hidden;
}
.app {
  display: flex;
  flex-direction: column;
  height: 100%;
  header {
    height: 40px;
  }
  .main {
    flex: 1;
    overflow-x: hidden;
  }
}
.cover-mask{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.5);
  z-index: 2;
}
.search-mask{
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 3;
  animation-direction: 500ms;
  .search-header{
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #a4a4a4;
    font-size: 14px;
    border-bottom: 1px solid #eee;
    i{
      &.backhome{
        font-size: 30px;
      }
    }
    label{
      width: 270px;
      height: 30px;
      background-color: #f5f5f5;
      box-shadow: 1px 1px 1px #dddddd inset;
      border-radius: 20px;
      position: relative;
      i{
        position: absolute;
        left: 5%;
        top: 6px;
        font-size: 20px;
      }
      input{
        width: 270px;
        height: 30px;
        background-color: #f5f5f5;
        box-shadow: 1px 1px 1px rgb(221, 221, 221) inset;
        border: none;
        border-radius: 20px;
        padding-left: 35px;
        box-sizing: border-box;
      }
    }
  }
  .search-list{
    width: 100%;
    overflow-x: hidden;
    flex: 1;
    li{
      padding: 0 15px;
      height: 45px;
      line-height: 45px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      color: #666;
      border-bottom: 1px solid #eee;
      span{
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      i{
        font-size: 22px;
        color: #ccc;
      }
    }
  }
}

@font-face {
  font-family: 'iconfont';  /* project id 1171498 */
  src: url('//at.alicdn.com/t/font_1171498_1sgdf480thp.eot');
  src: url('//at.alicdn.com/t/font_1171498_1sgdf480thp.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1171498_1sgdf480thp.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1171498_1sgdf480thp.woff') format('woff'),
  url('//at.alicdn.com/t/font_1171498_1sgdf480thp.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1171498_1sgdf480thp.svg#iconfont') format('svg');
}
.animated {
  -webkit-animation-duration: 300ms;
  animation-duration: 300ms;
  -webkit-animation-delay: 300ms;
  animation-delay: 300ms;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.slideInRight {
  -webkit-animation-name: slideInRight;
  animation-name: slideInRight;
}
</style>
