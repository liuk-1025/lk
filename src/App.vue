<template>
  <div id="app">
    <tab-bar-all></tab-bar-all>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import TabBarAll from "@/components/content/TabBarAll/TabBarAll";

export default {
  name: "App",
  components: {
    TabBarAll,
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
