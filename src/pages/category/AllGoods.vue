<template>
  <div>
    <div v-for="(item, index) in itemgoodsall" :key="index">
      <h5>{{ item.goodsname }}</h5>
      <ol class="goods">
        <li
          v-for="(item1, index) in item.goodschild"
          :key="index"
          @click="goodsiteminfo(item1)"
        >
          <div class="pic001">
            <img :src="item1.goodspic" alt="" />
          </div>
          <p>{{ item1.goodstext }}</p>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "goods",
  data() {
    return {
      all1: [],
    };
  },
  props: {
    itemgoodsall: {
      type: Array,
      default: () => {},
    },
  },
  created() {
    this.itemgoodsall.forEach((e) => {
      e.goodschild.forEach((e1) => {
        this.all1 = e1.goodstext;
      });
    });
    console.log(this.all1);
  },
  methods: {
    goodsiteminfo(item1) {
      this.$router.push({
        path: this.$store.state.topath.goodsinfogage,
        query: {
          id: item1.id,
        },
      });
    },
  },
};
</script>

<style scoped>
.goods {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  margin: 10px 0;
}
.goods li {
  margin-bottom: 5%;
  width: 30%;
  /* border: 1px solid red; */
  text-align: center;
  padding: 5px;
  margin-left: 2.5%;
}
.pic001 {
  height: 80%;
  overflow: hidden;
  margin-bottom: 5%;
}
.goods p {
  height: 15%;
  font-size: 12px;
}
.goods img {
  width: 100%;
}
</style>