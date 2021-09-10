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
  name: "DiscountSwiper",
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 5000,
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
  border-radius: 10px;
}
</style>