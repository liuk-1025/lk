<template>
  <div class="HomeGoods">
    <ul>
      <li v-for="(item, index) in pic2" :key="index" @click="goodsinfo(index)">
        <div class="goods_img">
          <img :src="item.pic2a" />
        </div>
        <p class="goods_text">{{ item.introduce }}</p>
        <p>
          ￥<span>{{ item.price }}</span> <span>{{ item.buynum }}人购买</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "homegoods",
  props: {
    pic2: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {
    goodsinfo(index) {
      this.$router.push({
        path: this.$store.state.topath.goodsinfogage,
        query: {
          id: this.pic2[index].id,
        },
      });
    },
  },
};
</script>

<style scoped>
/* .HomeGoods ul::-webkit-scrollbar {
  display: none;
} */
.HomeGoods ul {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  margin-bottom: 54px;
  /* ----------高度有问题-------- */
  height: 1250px;
}
.HomeGoods ul li {
  box-shadow: 0 0 10px rgb(64, 159, 223);
  margin: 1.5% 0 0 1.5%;
  width: 47.75%;
  overflow: hidden;
  border-radius: 6px;
  height: 225px;
}
.goods_img {
  height: 180px;
  overflow: hidden;
}
.goods_img img {
  width: 100%;
}
.goods_text {
  overflow: hidden;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
span:nth-of-type(1) {
  color: red;
}
span:nth-of-type(2) {
  font-size: 12px;
}
</style>