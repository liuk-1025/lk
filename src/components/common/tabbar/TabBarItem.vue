<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive">
      <slot name="item-icon-a"> </slot>
    </div>
    <div v-else>
      <slot name="item-icon-b"> </slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#fff",
    },
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path);
    },
    activeStyle() {
      return this.isActive ? {} : { color: this.activeColor };
    },
  },
  methods: {
    itemClick() {
      // this.$router.push(this.path);
      this.$router.replace(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 16px;
  line-height: 24px;
}
.tab-bar-item img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
</style>