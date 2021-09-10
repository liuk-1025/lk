<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: {},
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
};
</script>

<style scoped>
</style>
