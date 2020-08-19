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
  overflow-x: hidden;
}
.dtc-clip-path {
  clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0% 100%);
  height: 2021px;
  width: 100vw;
  background: #f7f7f7;
  transform: translateY(170px);
  > footer {
    height: 90px;
    background: #242424;
    display: grid;
    place-items: center;

    main {
      width: 288px;
      display: grid;
      grid-template-columns: 1fr;
      gap: 5px;
      > div:last-child {
        font-size: 13px;
      }
      nav {
        display: grid;
        grid-template-columns: max-content 1px max-content 1px max-content;
        gap: 1rem;
        > div {
          background: white;
          height: 70%;
        }
      }
    }
    h5 {
      color: #cecece;
      font-size: 18px;
      text-align: center;
      transform: translateX(-10px);
    }
    h6 {
      color: #f2f2f2;
      cursor: pointer;
      font-size: 14px;
    }
  }
}
</style>
