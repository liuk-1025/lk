<template>
  <div class="Category">
    <scroll class="scroll" :probe-type="3">
      <div class="goodsleft">
        <ul>
          <li
            :class="[
              { goodsbccolor: iscolor === index },
              { goodsbccolor1: iscolor === index + 1 },
              { goodsbccolor2: iscolor === index - 1 },
            ]"
            @click="goodsitem(index)"
            v-for="(item, index) in goodsnameall"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </scroll>
    <Categorynav
      :itemgoodsall="itemgoodsall"
      @goodsposition="goodsposition_a"
      :class="{ goodsnav: isnav }"
      class="a1"
    ></Categorynav>
    <scroll
      class="scroll"
      :probe-type="3"
      @scroll="scrollposition1"
      ref="scroll"
    >
      <div class="goodsright">
        <CategorySwiper class="swiper" :picdata="picdata"></CategorySwiper>
        <Categorynav
          @goodsposition="goodsposition_a"
          ref="goodsnav"
          :itemgoodsall="itemgoodsall"
          :class="{ goodsnav: isnav }"
        ></Categorynav>
        <AllGoods ref="goodsposition" :itemgoodsall="itemgoodsall"></AllGoods>
      </div>
    </scroll>
  </div>
</template>
<script>
import Categorynav from "./Categorynav";
import { getcategory } from "@/network/category";
import CategorySwiper from "./CategorySwiper";
import AllGoods from "./AllGoods.vue";
import BackTop from "../home/BackTop.vue";
import Scroll from "../../components/scroll/Scroll";

export default {
  name: "Category",
  components: { CategorySwiper, Categorynav, AllGoods, BackTop, Scroll },
  data() {
    return {
      picdata: [],
      itemgoodsall: [],
      iscolor: 0,
      navoffsetTop: 0,
      isnav: false,
      goodstop: 0,
      goodsnameall: [
        "推荐分类",
        "京东超市",
        "电脑办公",
        "京东国际",
        "家居厨房",
        "母婴童装",
        "手机",
        "家具家装",
        "运动户外",
        "男装",
        "女装",
        "家电",
        "鞋靴",
        "内衣搭配",
        "数码",
        "个护清洁",
        "宠物鲜花",
        "箱包",
        "生鲜",
        "医疗保健",
        "钟表珠宝",
        "玩具乐器",
        "汽摩生活",
        "美妆护肤",
        "生活旅行",
        "图书文娱",
      ],
    };
  },
  created() {
    getcategory().then((res) => {
      this.itemgoodsall = res.data[0];
      this.picdata = this.itemgoodsall[0].swiperpic;
    });
  },
  methods: {
    goodsitem(index) {
      getcategory().then((res) => {
        this.itemgoodsall = res.data[index];
        this.picdata = this.itemgoodsall[0].swiperpic;
        this.picdata = this.itemgoodsall[0].swiperpic;
      });
      this.iscolor = index;
    },
    scrollposition1(pos) {
      var top1 = this.$refs.goodsnav.$el.offsetTop;
      pos.y < -top1 ? (this.isnav = true) : (this.isnav = false);
      this.pos1 = pos;
    },
    goodsposition_a(index) {
      this.goodstop = this.$refs.goodsposition.$el.children[index].offsetTop;
      this.$refs.scroll.scrollTo(0, -this.goodstop + 38, 500);
      console.log(this.$refs.goodsposition
      );
    },
  },
};
</script>

<style scoped>
.goodsleft,
.goodsright {
  position: fixed;
  top: 0;
}
.scroll {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 70%;
}
.goodsleft {
  left: 0;
  width: 30%;
  background-color: #fff;
}
.goodsleft ul li {
  text-align: center;
  padding: 8px 0;
  /* border: 1px solid red; */
  font-size: 14px;
  background-color: rgb(238, 237, 237);
}

.goodsright {
  right: 0;
  width: 70%;
  background-color: #fff;
  padding: 2%;

  /* ----------高度有问题-------- */
  height: 2050px;
}
.goodsleft ul .goodsbccolor {
  background-color: #fff;
  color: red;
}
.goodsleft ul .goodsbccolor1 {
  border-radius: 0 0 12px 0;
  background-color: rgb(238, 237, 237);
}
.goodsleft ul .goodsbccolor2 {
  border-radius: 0 12px 0 0;
  background-color: rgb(238, 237, 237);
}
.Category .goodsnav {
  position: fixed;
  top: 0;
  left: 32%;
  z-index: 12;
  background-color: #fff;
  transition: all 0.8s;
  display: block;
}
.a1 {
  display: none;
}
.goodsnav1 {
  color: blue;
}
</style>