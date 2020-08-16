<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script>
// @ is an alias to /src
import DtcXlNavBar from "@/components/DtcXlNavBar.vue";

export default {
  name: "Home",
  components: {
    DtcXlNavBar
  }
};
</script>


<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  outline: none !important;
  box-sizing: border-box;
}
#app {
  font-family: "Microsoft JhengHei", Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}
</style>
