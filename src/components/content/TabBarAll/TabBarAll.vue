<template>
  <div class="tab-bar-all">
    <tab-bar>
      <tab-bar-item path="/home">
        <img
          slot="item-icon-a"
          src="@/assets/img/tabbar/icon-home-a.svg"
          alt=""
        />
        <img
          slot="item-icon-b"
          src="@/assets/img/tabbar/icon-home-b.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img
          slot="item-icon-a"
          src="@/assets/img/tabbar/icon-sort-a.svg"
          alt=""
        />
        <img
          slot="item-icon-b"
          src="@/assets/img/tabbar/icon-sort-b.svg"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img
          slot="item-icon-a"
          src="@/assets/img/tabbar/icon-Shopping-a.svg"
          alt=""
        />
        <img
          slot="item-icon-b"
          src="@/assets/img/tabbar/icon-Shopping-b.svg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img
          slot="item-icon-a"
          src="@/assets/img/tabbar/icon-my-a.svg"
          alt=""
        />
        <img
          slot="item-icon-b"
          src="@/assets/img/tabbar/icon-my-b.svg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "TabBarAll",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
</style>