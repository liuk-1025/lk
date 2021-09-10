<template>
  <discount-Swiper2>
    <ul slot="discount_1" v-for="(item, index) in goodsnamepage1" :key="index">
      <a href=""
        ><li>
          <img :src="item.img" alt="" />
        </li>
        <div>{{ item.name1 }}</div>
      </a>
    </ul>
    <ul slot="discount_2" v-for="(item, index) in goodsnamepage2" :key="index">
      <a href=""
        ><li>
          <img :src="item.img" alt="" />
        </li>
        <div>{{ item.name1 }}</div>
      </a>
    </ul>
  </discount-Swiper2>
</template>


<script>
import DiscountSwiper2 from "./DiscountSwiper2";
export default {
  components: { DiscountSwiper2 },
  name: "discount3",
  data() {
    return {
      goodsnamepage1: [
        {
          name1: "潮流女装",
          img: require("@/assets/img/home/discount3-img/a016.jpg"),
        },
        {
          name1: "时尚男装",
          img: require("@/assets/img/home/discount3-img/a017.jpg"),
        },
        {
          name1: "外套上衣",
          img: require("@/assets/img/home/discount3-img/a018.jpg"),
        },
        {
          name1: "衬衫T恤",
          img: require("@/assets/img/home/discount3-img/a019.jpg"),
        },
        {
          name1: "性感内衣",
          img: require("@/assets/img/home/discount3-img/a020.jpg"),
        },
        {
          name1: "针织毛衫",
          img: require("@/assets/img/home/discount3-img/a021.jpg"),
        },
        {
          name1: "潮流女包",
          img: require("@/assets/img/home/discount3-img/a022.jpg"),
        },
        {
          name1: "休闲男鞋",
          img: require("@/assets/img/home/discount3-img/a023.jpg"),
        },
        {
          name1: "其他配件",
          img: require("@/assets/img/home/discount3-img/a033.jpg"),
        },
        {
          name1: "木质拼图",
          img: require("@/assets/img/home/discount3-img/a034.jpg"),
        },
      ],
      goodsnamepage2: [
        {
          name1: "宝宝奶粉",
          img: require("@/assets/img/home/discount3-img/a024.jpg"),
        },
        {
          name1: "婴童用品",
          img: require("@/assets/img/home/discount3-img/a025.jpg"),
        },
        {
          name1: "美容护肤",
          img: require("@/assets/img/home/discount3-img/a026.jpg"),
        },
        {
          name1: "换季保养",
          img: require("@/assets/img/home/discount3-img/a027.jpg"),
        },
        {
          name1: "休闲零食",
          img: require("@/assets/img/home/discount3-img/a028.jpg"),
        },
        {
          name1: "生鲜果蔬",
          img: require("@/assets/img/home/discount3-img/a029.jpg"),
        },
        {
          name1: "时尚饰品",
          img: require("@/assets/img/home/discount3-img/a030.jpg"),
        },
        {
          name1: "潮流眼镜",
          img: require("@/assets/img/home/discount3-img/a031.jpg"),
        },
        {
          name1: "学习爱好",
          img: require("@/assets/img/home/discount3-img/a032.jpg"),
        },
        {
          name1: "女士香水",
          img: require("@/assets/img/home/discount3-img/a035.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
ul {
  justify-content: space-between;
  text-align: center;
  /* flex: 1; */
  width: 20%;
  margin: 20px 0;
  font-size: 15px;
  color: red;
}

ul li {
  margin: auto;
  height: 40px;
  width: 40px;
  overflow: hidden;
  border-radius: 10px 2px 10px 2px;
}
li img {
  height: 100%;
}
</style>