<template>
  <div class="recommendinfo">
    <div class="recommendinfo_1">
      <span>店铺推荐</span><span>查看全部<span class="rigthicon2"></span></span>
    </div>

    <div class="allgoods_1">
      <RecommendGoods
        class="goods_1"
        v-for="(item, index) in recommend_goods"
        :key="index"
        :pic_a="item.pic_7"
        :text_a="item.text_7"
        :text_b="item.Price_7"
      ></RecommendGoods>
    </div>
  </div>
</template>

<script>
import RecommendGoods from "./RecommendGoods";

export default {
  name: "recommendinfo",
  components: { RecommendGoods },
  data() {
    return {
      recommend_goods: [],
    };
  },
  activated() {
    this.recommend_goods = this.$store.state.recommend_goods;
  },
};
</script>


<style lang="less" scoped>
.recommendinfo {
  padding: 10px;
  border-top: 1px solid rgba(102, 102, 102, 0.2);
  margin: 0 2% 2% 2%;
  width: 96%;
  border-radius: 0 0 15px 15px;
  background-color: rgb(241, 240, 240);
  font-size: 15px;
  .recommendinfo_1 {
    padding: 2% 0;
    margin-bottom: 1%;
    & > span:nth-child(1) {
      font-size: 18px;
      font-weight: 600;
    }
    & > span:nth-child(2) {
      font-size: 14px;
      color: rgb(255, 39, 1);
      float: right;
      line-height: 26px;
      .rigthicon2 {
        display: inline-block;
        width: 8px;
        height: 8px;
        border: 1px solid rgb(255, 39, 1);
        border-bottom: none;
        border-left: none;
        transform: rotate(45deg);
        margin-bottom: 1px;
        margin-left: 2px;
      }
    }
  }
  .allgoods_1 {
    display: flex;
    flex-wrap: wrap;
    .goods_1 {
      float: left;
      width: 96%/3;
      height: 170px;
      margin-right: 2%;
      margin-bottom: 5%;
    }
    .goods_1:nth-child(3n) {
      margin-right: 0;
    }
  }
}
</style>