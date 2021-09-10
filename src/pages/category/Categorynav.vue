<template>
  <div class="Categorynav">
    <ul>
      <li
        v-for="(item, index) in itemgoodsall"
        :key="index"
        @click.stop="goodsposition(index)"
        :class="{ goodsbccolor: iscolor1 === index }"
      >
        {{ item.goodsname }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Categorynav",
  data() {
    return {
      iscolor1: 0,
    };
  },
  props: {
    itemgoodsall: {
      type: Array,
      default: () => {},
    },
  },
  methods: {
    goodsposition(index) {
      this.$emit("goodsposition", index);
      this.iscolor1 = index;
    },
  },
};
</script>

<style scoped>
.Categorynav::-webkit-scrollbar {
  display: none;
}

.Categorynav {
  font-size: 12px;
  overflow-x: scroll;
  width: 100%;
  color: black;
}
.Categorynav ul {
  width: 300%;
  overflow-y: hidden;
  padding: 5px 0;
}
.Categorynav li {
  /* line-height: 20px; */
  float: left;
  margin-right: 20px;
  border-radius: 15px;
  background-color: rgb(194, 192, 192);
  padding: 5px;
}
.Categorynav .goodsbccolor {
  background-color: rgb(250, 0, 0);
  color: #fff;
}
</style>