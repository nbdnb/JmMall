<template>
  <ul class="tomorrow">
    <li
      v-for="data in homeDataListTomo"
      :key="data.id"
    >
      <a href="#"><img :src="data.image"></a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'tomorrow',
  data () {
    return {
      homeDataListTomo: []
    }
  },
  methods: {
    getDataTom () {
      this.$http.getHome().then(resp => {
        this.homeDataListTomo = resp.items.list.reduce((res, item) => {
          if (item.cid === undefined) res.push(item)
          return res
        }, [])
      })
    }
  },
  created () {
    this.getDataTom()
  }
}
</script>

<style lang='scss' scoped>
.tomorrow{
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: flex-start;
  li{
    width: 49%;
    height: 0;
    padding-top: percentage(414/562);
    position: relative;
    overflow: hidden;
    margin-bottom: 2%;
    a{
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      img{
        max-width: 100%;
      }
    }
  }
}
</style>
