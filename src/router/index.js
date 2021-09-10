import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../pages/home/Home')
const Cart = () => import('../pages/cart/Cart')
const Category = () => import('../pages/category/Category')
const Profile = () => import('../pages/profile/Profile')
const DetailPage1 = () => import('../pages/detailpage/DetailPage1')
const DetailPage2 = () => import('../pages/detailpage/DetailPage2')
const GoodsInfoGage = () => import('../pages/detailpage/GoodsInfoGage')


  

Vue.use(Router)
const routes= [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页',
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '首页',
    },
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      title: '购物车',
    },
  },
  {
    path: '/category',
    component: Category,
    meta: {
      title: '分类',
    },
  },
  {
    path: '/detailpage1',
    component: DetailPage1,
    meta: {
      title: '商品详情页',
    },
  },
 {
     path: '/detailpage2',
     component: DetailPage2,
     meta: {
      title: '商品详情页2',
    },
  },
  {
    path: '/goodsinfogage',
    component: GoodsInfoGage,
    meta: {
     title: '主商品详情页',
   },
 }
]
const router = new Router({
  routes,
  mode:'history'
})
const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};

// 进入路由前
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  // console.log(to,'+++');
  next()
})

// 离开路由前
router.afterEach( (to, from) =>{
  // console.log(to,'---');
})


export default  router