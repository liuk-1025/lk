<template>
  <div id="GoodsInfoGage">
    <!-- 导航区域 —— 搜索/返回/分享/设置..-->
    <GoodsInfoGageNav class="modular_1"></GoodsInfoGageNav>
    <!-- 商品信息 -->
    <NavTitle class="modular_2"></NavTitle>
    <!-- 轮播图 -->
    <GoodsInfoSwiper
      class="modular_3"
      :swiper_pic="swiper_pic"
    ></GoodsInfoSwiper>
    <!-- 商品信息 —— 价格/销量/标题/分享.. -->
    <GoodsInfoText class="modular_4" :price_info="price_info"></GoodsInfoText>
    <!-- 物流相关 -->
    <Logistics class="modular_5" :logistics_info="logistics_info"></Logistics>
    <!-- 评价留言 -->
    <Comment class="modular_6" :evaluate_info="evaluate_info"></Comment>
    <!-- 店铺评分/店铺商品推荐 -->
    <Business class="modular_7"></Business>
    <!-- 11 -->
    <RecommendInfo></RecommendInfo>
    <!-- 加入购物车/购买/店铺/客服/收藏 -->
    <RecommendPic></RecommendPic>
    <PriceDescription></PriceDescription>
    <GoodsInfoBottom class="modular_8"></GoodsInfoBottom>
  </div>
</template>

<script>
import GoodsInfoGageNav from "./GoodsInfoGage-child/GoodsInfoGageNav.vue";
import NavTitle from "./GoodsInfoGage-child/NavTitle.vue";
import GoodsInfoSwiper from "./GoodsInfoGage-child/GoodsInfoSwiper.vue";
import GoodsInfoText from "./GoodsInfoGage-child/GoodsInfoText.vue";
import Logistics from "./GoodsInfoGage-child/Logistics.vue";
import Comment from "./GoodsInfoGage-child/Comment.vue";
import Business from "./GoodsInfoGage-child/Business.vue";
import RecommendInfo from "./GoodsInfoGage-child/RecommendInfo.vue";
import RecommendPic from "./GoodsInfoGage-child/RecommendPic.vue";
import PriceDescription from "./GoodsInfoGage-child/PriceDescription.vue";
import GoodsInfoBottom from "./GoodsInfoGage-child/GoodsInfoBottom.vue";

export default {
  name: "GoodsInfoGage",
  components: {
    GoodsInfoGageNav,
    NavTitle,
    GoodsInfoSwiper,
    GoodsInfoText,
    Logistics,
    Comment,
    Business,
    RecommendInfo,
    GoodsInfoBottom,
    RecommendPic,
    PriceDescription,
  },
  data() {
    return {
      // 轮播图_数据
      swiper_pic: [
        require("@/assets/img/detailgage/a1001.jpg"),
        require("@/assets/img/detailgage/a1002.jpg"),
        require("@/assets/img/detailgage/a1003.jpg"),
      ],
      // 价格相关_数据
      price_info: {
        a_price: 10.5,
        b_price: 37.5,
        c_price: 7.5,
        d_price: 12,
        discount: ["淘金币可抵0.54元起", "店铺劵88减3"],
        goodsnumber: 4000,
        // 大于多少拼接字符串+ "+"
        pri_add: "+",
        goodsname: "汽车拾音节奏灯声控音乐音律灯桌面氛围灯LED音频灯车家两用",
        rows_5text: [
          {
            text5: "推荐",
            pic5: require("@/assets/img/detailgage/wodetuijian.svg"),
          },
          {
            text5: "帮我选",
            pic5: require("@/assets/img/detailgage/renwu-tuandui.svg"),
          },
          {
            text5: "分享",
            pic5: require("@/assets/img/detailgage/fenxiang.svg"),
          },
        ],
      },
      // 物流相关_数据
      logistics_info: {
        pic6: [
          "https://img1.baidu.com/it/u=4024355062,620624686&fm=26&fmt=auto&gp=0.jpg",
          "https://img1.baidu.com/it/u=4024355062,620624686&fm=26&fmt=auto&gp=0.jpg",
          "https://img1.baidu.com/it/u=4024355062,620624686&fm=26&fmt=auto&gp=0.jpg",
          "https://img1.baidu.com/it/u=4024355062,620624686&fm=26&fmt=auto&gp=0.jpg",
        ],
        pic6_num: 12,
        city: "广东广州",
      },
      // 评论相关_数据
      evaluate_info: {
        comment_num: 39,
        comment_label: [
          "性价比高(33)",
          "外观制作漂亮(3)",
          "质量不错(23)",
          "客服回复及时(36)",
        ],
        user_name: "t**5",
        comment_time: "3",
        comment_text:
          "这玩意也确实好玩而且性价比也高，多买几条装在房间也可以省电",
        comment_pic: [
          "https://img1.baidu.com/it/u=4024355062,620624686&fm=26&fmt=auto&gp=0.jpg",
          "https://img1.baidu.com/it/u=4024355062,620624686&fm=26&fmt=auto&gp=0.jpg",
          "https://img1.baidu.com/it/u=4024355062,620624686&fm=26&fmt=auto&gp=0.jpg",
          "https://img1.baidu.com/it/u=4024355062,620624686&fm=26&fmt=auto&gp=0.jpg",
        ],
        user_pic:
          "https://img1.baidu.com/it/u=4024355062,620624686&fm=26&fmt=auto&gp=0.jpg",
        pic6_num: 12,
        city: "广东广州",
      },
    };
  },
  created() {
    // this.goodsid = this.$route.params.id;
    this.goodsid = this.$route.query.id;
    // getGoodsInfoGage(this.goodsid).then((res) => {
    //   console.log(res);
    // });
    this.$store.commit("getdetailpage_a");
  },
};
</script>

<style lang="less" scoped>
#GoodsInfoGage {
  padding-bottom: 60px;
  .modular_2 {
    width: 100%;
    position: fixed;
    top: 44px;
    left: 0;
    z-index: 9;
  }
  .modular_8 {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9;
  }
}
</style>