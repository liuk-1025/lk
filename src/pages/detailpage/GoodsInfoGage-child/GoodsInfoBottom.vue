<template>
  <div class="goodsinfobottom">
    <div class="goodsbottonleft">
      <div class="goodsbottonleft_item" v-for="item in goods_item">
        <img :src="item.item_pic" alt="" />
        <div class="goodsbottonleft_text">{{ item.item_text }}</div>
      </div>
    </div>
    <div class="goodsbottonright">
      <p>加入购物车</p>
      <p>立即购买</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsinfobottom",
  data() {
    return {
      goods_item: [
        {
          item_text: "店铺",
          item_pic: require("@/assets/img/detailgage/店铺.svg"),
        },
        {
          item_text: "客服",
          item_pic: require("@/assets/img/detailgage/kefu.svg"),
        },
        {
          item_text: "收藏",
          item_pic: require("@/assets/img/detailgage/shoucang.svg"),
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.goodsinfobottom {
  width: 100%;
  display: flex;
  background-color: #fff;
  border-top: 1px solid rgb(190, 187, 187);
  text-align: center;
  img {
    width: 20px;
  }
  .goodsbottonleft {
    width: 40%;
    height: 50px;
    display: flex;
    font-size: 14px;
    padding: 5px 0;
    .goodsbottonleft_item {
      flex: 1;
      .goodsbottonleft_text {
        margin-top: -5px;
      }
    }
  }
  .goodsbottonright {
    display: flex;
    width: 60%;
    line-height: 50px;
    p {
      flex: 1;
      font-size: 16px;
      color: rgb(248, 245, 245);
    }
    & > p:nth-child(1) {
      border-radius: 22px 0 0 22px;
      background-image: linear-gradient(
        left,
        rgb(250, 170, 51),
        rgb(247, 150, 4)
      );
    }
    & > p:nth-child(2) {
      background-image: linear-gradient(
        left,
        rgb(231, 72, 23),
        rgb(248, 117, 77)
      );
      border-radius: 0 22px 22px 0;
    }
  }
}
</style>