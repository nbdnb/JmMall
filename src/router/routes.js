import JmFooter from '../components/JmFooter'

const Home = () => import('../views/Home')
const Assemble = () => import('../views/Assemble')
const Cart = () => import('../views/Cart')
const Mine = () => import('../views/Mine')

const Today = () => import('../views/Today')
const Tomorrow = () => import('../views/Tomorrow')
const Products = () => import('../views/Products')
const Search = () => import('../views/Search')
const Detail = () => import('../views/Detail')

export default [
  {
    path: '/',
    redirect: '/home',
    meta: {
      isTab: false
    }
  }, {
    path: '/search',
    name: 'search',
    component: Search,
    meta: {
      isTab: false
    }
  }, {
    path: '/home',
    name: 'home',
    components: {
      default: Home,
      footer: JmFooter
    },
    meta: {
      isTab: true,
      title: '首页',
      icon: '&#xe71f;'
    },
    children: [{
      path: '/home',
      redirect: '/home/today'
    }, {
      path: 'today',
      name: 'today',
      components: {
        default: Today
      }
    }, {
      path: 'tomorrow',
      name: 'tomorrow',
      components: {
        default: Tomorrow
      }
    }
    ]
  }, {
    path: '/assemble',
    name: 'assemble',
    components: {
      default: Assemble,
      footer: JmFooter
    },
    meta: {
      isTab: true,
      title: '拼团',
      icon: '&#xe71b;'
    },
    children: [
      {
        path: ':proId',
        name: 'products',
        component: Products
      }
    ]
  }, {
    path: '/cart',
    name: 'cart',
    components: {
      default: Cart,
      footer: JmFooter
    },
    meta: {
      isTab: true,
      title: '购物车',
      icon: '&#xe718;'
    }
  }, {
    path: '/mine',
    name: 'mine',
    components: {
      default: Mine,
      footer: JmFooter
    },
    meta: {
      isTab: true,
      title: '我的',
      icon: '&#xe720;'
    }
  }, {
    path: '/detail/:id',
    name: 'detail',
    component: Detail,
    meta: {
      isTab: false
    }
  }
]
