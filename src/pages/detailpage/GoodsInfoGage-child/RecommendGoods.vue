<template >
  <div class="recommendgoods">
    <div class="recommendgoods_pic"><img :src="pic_a" alt="" /></div>
    <p>{{ text_a }}</p>
    <p>
      ￥<span>{{ text_b }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "recommendgoods",
  props: {
    pic_a: {
      type: String,
      default: () => {},
    },
    text_a: {
      type: String,
      default: () => {},
    },
    text_b: {
      type: Number,
      default: () => {},
    },
  },
};
</script>

<style lang="less" scoped>
.recommendgoods {
  width: 100px;
  word-wrap: break-word;
  .recommendgoods_pic {
    background-color: red;
    width: 100%;
    height: 70%;
    border-radius: 10px;
  }
  & > :nth-child(2) {
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }
  & > :nth-child(3) {
    font-size: 12px;
    span {
      font-size: 18px;
      color: red;
    }
  }
}
</style>