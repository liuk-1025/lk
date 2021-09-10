<template>
  <div class="discount">
    <swiper :options="swiperOption">
      <swiper-slide class="swiper-slide">
        <div class="discount">
          <slot name="discount_1"></slot>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <div class="discount">
          <slot name="discount_2"></slot>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "DiscountSwiper2",
  data() {
    return {
      ull: [],
      swiperOptions: {},
      swiperOption: {
        //自动轮播
        autoplay: {
          delay: 8000,
          disableOnInteraction: true,
        },
        loop: true,
      },
    };
  },
};
</script>

<style scoped>
.discount {
  background-image: linear-gradient(
    rgb(98, 153, 190),
    rgba(250, 250, 250, 0.5)
  );
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
}
.swiper-slide {
  overflow: hidden;
  height: auto;
}
</style>