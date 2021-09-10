<template>
  <div>
    <navbar class="navbar">
      <div slot="left"><div class="back" @click="toback"></div></div>
      <div slot="center">
        <div class="icon">
          <img src="@/assets/img/detailgage/sousuo.svg" alt="" />
        </div>
        <input type="search" name="" id="" value="笔记本" />
      </div>
      <div slot="right">
        <span> <img src="@/assets/img/detailgage/fenxiang.svg" alt="" /></span>
        <span> <img src="@/assets/img/detailgage/gouwuche.svg" alt="" /></span>
        <span class="dian">
          <img src="@/assets/img/detailgage/dian.svg" alt=""
        /></span>
      </div>
    </navbar>
  </div>
</template>

<script>
import navbar from "@/components/content/navbar/navbar.vue";
export default {
  name: "GoodsInfoGage",
  components: { navbar },
  data() {
    return {
      goodsid: {
        type: Array,
        default: null,
      },
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        loop: false,
      },
    };
  },
  methods: {
    toback() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.navtitle1 {
  width: 100%;
  position: absolute;
  z-index: 9;
  top: 44px;
  left: 0;
  color: black;
  font-weight: 500;
}
.navbar1 {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
}
.GoodsInfoSwiper {
  height: 400px;
  overflow: hidden;
}

.left .back {
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 1px solid black;
  border-bottom: none;
  border-left: none;
  transform: rotate(225deg);
  margin-left: -3px;
}
.center {
  position: absolute;
  background-color: #fff;
}
.center input::-webkit-search-cancel-button {
  display: none;
}
.center input {
  margin: 7px 0;
  float: right;
  width: 100%;
  height: 30px;
  border: none;
  outline-style: none;
  line-height: 44px;
  padding-left: 15%;
  color: #666;
  font-size: 16px;
  border-radius: 22px;
}
.icon {
  width: 20px;
  position: absolute;
  top: 3px;
  left: 17%;
  overflow: hidden;
}
.icon img {
  height: 100%;
}
.right span {
  display: inline-block;
  margin-left: 8px;
  padding: 6px 0;
}
.right span img {
  width: 25px;
}
</style>