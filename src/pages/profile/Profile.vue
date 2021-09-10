<template>
  <div>
    <div class="dd">分类</div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  components: {},
};
</script>

<style scoped>
@keyframes xiaoxiong {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -1600px 0;
  }
}
.dd {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 30px;
  /* border-radius: 10px; */
  background-image: url(../../../src/assets/img/12.jpg);
  animation: xiaoxiong 5s infinite;
  color: #fff;
  text-align: center;
  line-height: 30px;
  font-size: 20px;
}
body {
  background-color: rgb(72, 129, 77);
}
</style>