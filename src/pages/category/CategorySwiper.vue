<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide
        class="swiperslide"
        v-for="(item, index) in picdata"
        :key="index"
      >
        <img :src="item" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  components: {},
  name: "CategorySwiper",
  props: {
    picdata: {
      type: Array,
      default: () => {},
    },
  },

  data() {
    return {
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
};
</script>

<style scoped>
.swiperslide img {
  width: 100%;
}
/* .swiper-pagination {
  top: 80%;
} */
.swiperslide {
  width: 100%;
  border-radius: 2px;
  /* overflow: hidden; */
  height: 15vh;
}
</style>