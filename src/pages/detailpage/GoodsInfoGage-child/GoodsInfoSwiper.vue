<template>
  <div>
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide v-for="(item, index) in swiper_pic" :key="index">
        <img :src="item" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "GoodsInfoSwiper",
  data() {
    return {
      swiperOption: {},
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        loop: false,
      },
    };
  },
  props: {
    swiper_pic: {
      type: Array,
      default: () => {},
    },
  },
};
</script>

<style>
img {
  width: 100%;
}

</style>