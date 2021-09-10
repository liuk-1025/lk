<template>
  <div>
    <discount-Swiper>
      <ul
        slot="discount_1"
        v-for="(item, index) in goodsnamepage1"
        :key="index"
      >
        <li @click="todetailpage2">
          <img :src="item.img" alt="" />
        </li>
        <div>{{ item.name1 }}</div>
      </ul>
      <ul
        slot="discount_2"
        v-for="(item, index) in goodsnamepage2"
        :key="index"
      >
        <li @click="todetailpage2">
          <img :src="item.img" alt="" />
        </li>
        <div>{{ item.name1 }}</div>
      </ul>
    </discount-Swiper>
  </div>
</template>


<script>
import DiscountSwiper from "./DiscountSwiper";
export default {
  components: { DiscountSwiper },
  name: "discount2",
  data() {
    return {
      goodsnamepage1: [
        {
          name1: "女装男装",
          img: require("@/assets/img/home/discount2-img/a006.jpg"),
        },
        {
          name1: "鞋类箱包",
          img: require("@/assets/img/home/discount2-img/a007.jpg"),
        },
        {
          name1: "母婴用品",
          img: require("@/assets/img/home/discount2-img/a008.jpg"),
        },
        {
          name1: "护肤彩妆",
          img: require("@/assets/img/home/discount2-img/a009.jpg"),
        },
        // {
        //   name1: "汇吃美食",
        //   img: require("@/assets/img/home/discount2-img/a010.jpg"),
        // },
      ],
      goodsnamepage2: [
        {
          name1: "珠宝配饰",
          img: require("@/assets/img/home/discount2-img/a011.jpg"),
        },
        {
          name1: "家装建材",
          img: require("@/assets/img/home/discount2-img/a012.jpg"),
        },
        {
          name1: "家居家纺",
          img: require("@/assets/img/home/discount2-img/a013.jpg"),
        },
        {
          name1: "百货市场",
          img: require("@/assets/img/home/discount2-img/a014.jpg"),
        },
        // {
        //   name1: "汽车用品",
        //   img: require("@/assets/img/home/discount2-img/a015.jpg"),
        // },
      ],
    };
  },
  methods: {
    todetailpage2() {
      this.$router.push(this.$store.state.topath.todetailpage2);
    },
  },
};
</script>

<style scoped>
@import "../../../assets/css/discount.css";
</style>