<template>
  <div class="detailpage1">
    <div class="detailpage1box">
      <navbar>
        <img slot="left" src="@/assets/img/detailgage/back.svg" alt="" />
      </navbar>
    </div>
  </div>
</template>


<script scoped>
import navbar from "@/components/content/navbar/navbar";
export default {
  name: "detailpage1",
  components: { navbar },
};
</script>

<style>
.detailpage1 img {
  height: 100%;
  margin-right: 50px;
  transform: scale(0.7);
}
.detailpage1box {
  width: 100%;
  height: 800px;
  background-image: url("../../assets/img/detailgage/guoqingbc.jpg");
}
</style>