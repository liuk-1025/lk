<template>
  <div class="navtext">
    <span class="navtitle" v-for="item in navtext">{{ item }}</span>
  </div>
</template>

<script>
export default {
  name: "navtext",
  data() {
    return {
      navtext: ["宝贝", "评价", "详情", "推荐"],
    };
  },
};
</script>

<style scoped>
.navtext {
  display: flex;
  height: 34px;
  background-color: rgba(255, 255, 255, 0.5);
}
.navtitle {
  line-height: 34px;
  text-align: center;
  flex: 1;
  display: inline-block;
}
</style>