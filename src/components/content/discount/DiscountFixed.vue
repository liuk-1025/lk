<template>
  <div class="discount">
    <slot name="discount_1"></slot>
  </div>
</template>

<script>
export default {
  name: "DiscountFixed",
};
</script>

<style scoped>
.discount {
  background-image: linear-gradient(
    rgb(98, 153, 190),
    rgba(250, 250, 250, 0.5)
  );
  width: 100%;
  height: 100%;
  display: flex;
  transition: all 1s;
  border-radius: 10px;
}
</style>