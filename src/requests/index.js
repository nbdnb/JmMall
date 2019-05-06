import axios from 'axios'

import { Indicator, Toast } from 'mint-ui'

const ajax = axios.create()

ajax.interceptors.request.use(config => {
  Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  })
  return config
})

ajax.interceptors.response.use(resp => {
  Indicator.close()
  if (resp.data.code === 200) {
    return resp.data.data
  } else {
    Toast('出错了！')
  }
})

export const getHome = () => {
  return ajax.get('api/tab/1?start=0')
}

export const getHomeData = () => {
  return ajax.get('http://www.xiongmaoyouxuan.com/api/tabs')
}

export const getSearchData = (value) => {
  return ajax.get(`http://www.xiongmaoyouxuan.com/api/search?word=${value}`)
}
