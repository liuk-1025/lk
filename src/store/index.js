import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import moduleA from './modules/moduleA'

Vue.use(Vuex)

const state = {
// 路由跳转相关
    topath: {
        // home首页商品跳转相关
            todetailpage1: "/detailpage1",
            todetailpage2: "/detailpage2",
            toCategory: "/Category",
            goodsinfogage:"/goodsinfogage"
    },
    recommend_goods: [],
    goods_a3:[]
}

const store =new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        a: moduleA
    }
})

export default store