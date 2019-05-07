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

export const getHome = (start = 0) => {
  return ajax.get(`api/tab/1?start=${start}`)
}

export const getHomeData = () => {
  return ajax.get('/api/tabs')
}

export const getSearchData = (value) => {
  return ajax.get(`/api/search?word=${value}`)
}

export const getProductsList = (proId, start = 0) => {
  return ajax.get(`api/tab/${proId}?start=${start}`)
}

export const getDetails = (id) => {
  return ajax.get(`api/detail?id=${id}`)
}
