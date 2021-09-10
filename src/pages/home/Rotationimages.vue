
  <template>
  <div class="abc">
    <swiper :options="swiperOption">
      <swiper-slide
        class="swiper-slide"
        v-for="(item, index) in navpic"
        :key="index"
      >
        <img :src="item" />
      </swiper-slide>

      <!-- 分页器 -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- 左右箭头 -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>



<script>
export default {
  name: "Rotationimages",
  data() {
    return {
      swiperOptions: {},
      swiperOption: {
        //显示分页
        pagination: {
          el: ".swiper-pagination",
        },
        //设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        //自动轮播
        autoplay: {
          delay: 2000,
          //当用户滑动图片后继续自动轮播
          disableOnInteraction: false,
        },
        //开启循环模式
        loop: false,
      },
    };
  },
  props: {
    navpic: {
      type: Array,
      default: () => {},
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
.swiper-slide {
  overflow: hidden;
  height: 30vh;
}

/* 图片按钮大小 */
.swiper-button-prev,
.swiper-button-next {
  transform: scale(0.7);

  /* 设置左右按钮图片路径 */
  /* background-image: url(); */
}

/* 设置内容轮播 */
/* .abc1 {
  width: 100%;
  height: 120px;
  background-color: #666;
}
.abc2 {
  width: 100%;
  height: 120px;
  background-color: rgb(133, 32, 32);
}
.abc3 {
  width: 100%;
  height: 120px;
  background-color: rgb(41, 115, 199);
} */
</style>