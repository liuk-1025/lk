<template>
  <div class="goodsnavigation">
    <div
      @click="itemstyle(index)"
      class="allnavitem"
      :class="{ allnavitem1: index === color1 }"
      v-for="(item, index) in title"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsNavigation",
  data() {
    return {
      color1: 0,
    };
  },
  methods: {
    itemstyle(index) {
      this.color1 = index;
      this.$emit("itemclick", index);
    },
  },
  props: {
    title: {
      type: Array,
      default: () => {},
    },
  },
};
</script>

<style scoped>
.goodsnavigation {
  display: flex;
  height: 40px;
  text-align: center;
  line-height: 40px;
  width: 100%;
}
.allnavitem {
  flex: 1;
}
.allnavitem1 span {
  padding: 3px;
  border-bottom: 2px solid rgb(241, 2, 62);
  color: rgb(241, 2, 62);
  font-size: 18px;
  font-weight: 500;
}
</style>