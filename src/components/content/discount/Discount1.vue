<template>
  <discount-fixed id="discount1" ref="aass">
    <ul
      slot="discount_1"
      v-for="(item, index) in goodsname"
      :key="index"
      :class="{ scale1: isscale }"
    >
      <li @click="todetailpage1">
        <img ref="imgto" :src="item.img" alt="" />
      </li>
      <div>{{ item.name1 }}</div>
    </ul>
  </discount-fixed>
</template>

<script>
import DiscountFixed from "./DiscountFixed";
export default {
  name: "discount1",
  components: { DiscountFixed },
  data() {
    return {
      isscale: false,
      num: 0,
      goodsname: [
        {
          name1: "热门推荐",
          img: require("@/assets/img/home/discount1-img/a001.jpg"),
          img1: require("@/assets/img/home/discount1-img/a001.jpg"),
        },
        {
          name1: "时尚前沿",
          img: require("@/assets/img/home/discount1-img/a002.jpg"),
          img1: require("@/assets/img/home/discount1-img/a001.jpg"),
        },
        {
          name1: "特价优惠",
          img: require("@/assets/img/home/discount1-img/a003.jpg"),
          img1: require("@/assets/img/home/discount1-img/a001.jpg"),
        },
        {
          name1: "更多商品",
          img: require("@/assets/img/home/discount1-img/a004.jpg"),
          img1: require("@/assets/img/home/discount1-img/a001.jpg"),
        },
      ],
    };
  },
  methods: {
    get() {
      if (this.num == 0) {
        this.isscale = true;
        this.num = 1;
      } else {
        this.isscale = false;
        this.num = 0;
      }
    },
    todetailpage1() {
      this.$router.push(this.$store.state.topath.todetailpage1);
    },
  },
  mounted() {
    this.timer = setInterval(this.get, 3000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
@import "../../../assets/css/discount.css";
.scale1 {
  /* background-color: rgba(92, 153, 155, 0.541); */
  background-image: linear-gradient(
    rgb(154, 197, 226),
    rgba(250, 250, 250, 0.5)
  );
  transition: all 3s;
  transform: scale(0.9);
}
</style>