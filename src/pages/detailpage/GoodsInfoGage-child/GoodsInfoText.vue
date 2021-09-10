<template>
  <div class="GoodsInfoText">
    <div class="rows_1">
      ￥<span class="pricetext_16"
        >{{ price_info.a_price }}-{{ price_info.b_price }}</span
      >
      <span class="pricetext_red"
        >劵后￥<span class="pricetext_14">{{ price_info.c_price }}</span
        >起</span
      >
    </div>
    <div class="rows_2">
      <span class="pricetext_red_b" v-for="item in price_info.discount">
        {{ item }}</span
      >
      <span class="pricetext_right"
        >领劵
        <div class="rigthicon"></div
      ></span>
    </div>
    <div class="rows_3">
      <span class="tianmao">天猫</span>
      <span class="goodsnumber">月销{{ price_info.goodsnumber }}</span>
    </div>
    <div class="rows_4">{{ price_info.goodsname }}</div>
    <div class="rows_5">
      <ul>
        <li
          class="rows_5text"
          v-for="(item, index) in price_info.rows_5text"
          :key="index"
        >
          <img :src="item.pic5" alt="" />
          <span class="rows_5_text02">{{ item.text5 }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsInfoText",
  props: {
    price_info: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="less" scoped>
.GoodsInfoText {
  padding: 10px;
  margin: 2%;
  height: auto;
  width: 96%;
  border-radius: 15px;
  background-color: rgb(241, 240, 240);
  color: red;
  .rows_1 {
    height: 30px;
    font-size: 14px;
    line-height: 30px;
    .pricetext_16 {
      font-size: 20px;
      color: red;
    }
    .pricetext_red {
      color: #fff;
      background-color: rgb(247, 51, 2);
      padding: 3px 8px;
      font-size: 12px;
      border-radius: 15px;
    }
    .pricetext_14 {
      font-size: 16px;
    }
  }
  .rows_2 {
    height: 20px;
    margin: 8px auto;
    font-size: 14px;
    .pricetext_red_b {
      background-color: rgb(241, 207, 199);
      margin-right: 10px;
      color: rgb(255, 39, 1);
      padding: 1px 2px;
    }
    .pricetext_right {
      float: right;
    }
    .rigthicon {
      display: inline-block;
      width: 8px;
      height: 8px;
      border: 1px solid rgb(255, 39, 1);
      border-bottom: none;
      border-left: none;
      transform: rotate(45deg);
      margin-bottom: 1px;
      margin-left: -2px;
    }
  }
  .rows_3 {
    height: 20px;
    margin: 8px auto;
    .tianmao {
      background-color: red;
      color: #fff;
      font-size: 14px;
      border-radius: 10px;
      padding: 0 6px;
    }
    .goodsnumber {
      float: right;
      font-size: 12px;
      color: #666;
    }
  }
  .rows_4 {
    margin: 10px auto;
    font-weight: 550;
    color: black;
    font-size: 18px;
  }
  .rows_5 {
    margin-top: 4%;
    ul {
      display: flex;
      text-align: center;
      font-size: 14px;
      height: 30px;
    }
    .rows_5text {
      flex: 1;
    }
    img {
      height: 20px;
      vertical-align: middle;
    }
    .rows_5_text02 {
      display: inline-block;
      color: black;
    }
  }
}
</style>