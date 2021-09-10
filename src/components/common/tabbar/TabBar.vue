<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: rgb(64, 159, 223);
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: 0px -2px 3px rgba(12, 12, 12, 0.2);
  z-index: 9;
  line-height: 49px;
}
</style>