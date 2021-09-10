<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  components: {},
};
</script>

<style scoped>
.left {
  width: 15%;
}
.center {
  flex: 1;
}
.right {
  width: 35%;
}
.navbar {
  /* overflow: hidden; */
  display: flex;
  width: 100%;
  height: 44px;
  text-align: center;
  line-height: 44px;
  font-size: 18px;
  color: #fff;
  background-color: rgb(64, 159, 223);
  align-content: center;
}
</style>