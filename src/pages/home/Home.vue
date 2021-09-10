<template>
  <div id="name">
    <navbar class="navtop"><div slot="center">好货商城</div></navbar>
    <goods-navigation
      ref="asd"
      class="a2"
      :class="{ navigation: isnavigation }"
      @itemclick="itemclick_a"
      :title="['流行', '新款', '精选']"
    ></goods-navigation>
    <scroll
      class="scrollheigth"
      ref="scrollmethod"
      :probe-type="3"
      @scroll="scrollposition"
    >
      <div>
        <!-- 原生滚动  -->
        <!-- <div @scroll="as123" class="poi"> -->
        <rotationimages :navpic="navpic"></rotationimages>
        <h4>推荐热门</h4>
        <discount1></discount1>
        <h4>流行爆款</h4>
        <discount2></discount2>
        <h4>商品分类</h4>
        <discount3></discount3>
        <goods-navigation
          ref="asd"
          @itemclick="itemclick_a"
          :title="['流行', '新款', '精选']"
        ></goods-navigation>
        <home-goods :pic2="type1"></home-goods>
      </div>
    </scroll>
    <back-top
      @click.native="backlick"
      ref="backtop"
      v-show="isblock"
    ></back-top>
    <!-- </div> -->
  </div>
</template>

<script>
import Scroll from "../../components/scroll/Scroll";
import { gethome } from "@/network/home";
import Rotationimages from "./Rotationimages";
import HomeGoods from "./HomeGoods";
import Navbar from "../../components/content/navbar/navbar";
import Discount1 from "../../components/content/discount/Discount1";
import Discount2 from "../../components/content/discount/Discount2";
import Discount3 from "../../components/content/discount/Discount3";
import GoodsNavigation from "./GoodsNavigation";
import BackTop from "./BackTop";

export default {
  name: "Home",
  components: {
    Rotationimages,
    Navbar,
    Discount1,
    Discount2,
    Discount3,
    HomeGoods,
    GoodsNavigation,
    BackTop,
    Scroll,
  },
  data() {
    return {
      pic2: [],
      navpic: [],
      title: [],
      goodslist1: [],
      type1: [],
      diff: 1000,
      // scroll: "",
      isblock: false,
      isnavigation: false,
    };
  },
  // 进入第一次加载组件时
  created() {
    this.gethomeallnavpic();
    this.gethomeallpic();
  },
  deactivated() {},
  activated() {},
  mounted() {
    console.log(this.$refs.asd.$el.offsetTop);
  },
  methods: {
    //请求本地json文件
    gethomeallnavpic() {
      gethome().then((res) => {
        this.navpic = res.data.navpic;
        this.type1 = res.data.pic2;
      });
    },
    gethomeallpic() {
      gethome().then((res) => {
        this.pic2 = res.data.pic2;
        this.pic3 = res.data.pic3;
        this.pic4 = res.data.pic4;
      });
    },

    itemclick_a(index) {
      switch (index) {
        case 0:
          this.type1 = this.pic2;
          break;
        case 1:
          this.type1 = this.pic3;
          break;
        case 2:
          this.type1 = this.pic4;
          break;
      }
    },
    backlick() {
      this.$refs.scrollmethod.scrollTo(0, 0, 500);
    },
    // 监听滚动位置
    scrollposition(pos) {
      var top = this.$refs.asd.$el.offsetTop;
      pos.y < -top ? (this.isblock = true) : (this.isblock = false);
      pos.y < -top ? (this.isnavigation = true) : (this.isnavigation = false);
    },
    imageok() {},
  },
};
</script>

<style scoped>
.navtop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  color: #fff;
  box-shadow: 0px 0px 30px rgba(100, 100, 100, 0.8);
  padding-left: 20%;
}
.navigation {
  position: fixed;
  top: 44px;
  left: 0;
  z-index: 10;
  background-color: #fffffb;
  color: black;
  transition: all 0.5s;
  display: block;
}

.scrollheigth {
  position: fixed;
  top: 44px;
  bottom: 44px;
  left: 0;
  right: 0;
  height: 100vh;
}

/* 原生滚动 */
/* .poi {
  height: 800px;
  overflow-y: scroll;
} */
h4 {
  font-weight: 500;
  color: black;
  background-image: linear-gradient(
    rgba(255, 0, 0, 0.068),
    rgba(0, 0, 255, 0.089)
  );
  text-align: center;
  box-shadow: 0 0 2px rgba(5, 5, 5, 0.3);
  height: 30px;
  line-height: 30px;
}
.a2 {
  display: none;
}
</style>