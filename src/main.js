// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from './store'
import less from 'less'

Vue.config.productionTip = false
Vue.use(less)
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

