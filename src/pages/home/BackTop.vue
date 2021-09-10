<template>
  <div class="backtop">TOP</div>
</template>

<script>
export default {
  name: "backtop",
  data() {
    return {
      // isbacktop: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
.backtop {
  position: fixed;
  right: 15px;
  bottom: 60px;
  width: 40px;
  height: 40px;
  /* border: 1px solid rgb(241, 4, 4); */
  border-radius: 40px;
  text-align: center;
  line-height: 40px;
  /* font-weight: 500; */
  z-index: 12000;
  color: rgb(224, 220, 220);
  background-image: radial-gradient(red, rgba(1, 7, 8, 0.5));
}
</style>