<template>
  <div class="recommendpic">
    <div class="recommendpic_text"><span></span>宝贝详情<span></span></div>
    <img v-for="(item, index) in goods_a3" :key="index" :src="item" alt="" />
  </div>
</template>

<script>
export default {
  name: "recommendpic",
  data() {
    return {
      goods_a3: [],
    };
  },
  activated() {
    this.goods_a3 = this.$store.state.goods_a3;
    console.log(this.goods_a3);
  },
};
</script>


<style lang="less" scoped>
.recommendpic {
  .recommendpic_text {
    text-align: center;
    height: 20px;
    font-size: 14px;
    margin-bottom: 3%;
    span {
      display: inline-block;
      width: 40px;
      height: 25%;
      border-top: 1px solid #666;
      line-height: 44px;
      margin: 0 10px;
    }
  }
  img {
    width: 100%;
    margin-bottom: 1%;
  }
}
</style>