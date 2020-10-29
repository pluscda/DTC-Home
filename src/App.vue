<template>
  <div id="app" :style="showPrivacy || showTerm ? 'overflow:hidden !important;' : ''">
    <router-view />
    <footer>
      <main>
        <h5 style="transform:translate(-15px,8px) !important;">DATACOM TECH</h5>
        <nav>
          <h6 @click="showPrivacy = true" style="transform:translateX(15px)">隱私權政策</h6>
          <div style="transform:translateX(15px)"></div>
          <h6 @click="showTerm = true" style="transform:translateX(-15px)">使用者條款</h6>
        </nav>
        <div style="color:white;transform:translate(20px, -7px);font-size:12px;">Copyright©2020 DATACOM. All rights reserved.</div>
      </main>
    </footer>
    <aside v-show="showPrivacy" class="my-term">
      <div @click="showPrivacy = false">
        <span class="my-close"><i class="fas fa-times-circle"></i></span>
        <img src="privacy.png" />
      </div>
    </aside>
    <aside v-show="showTerm" class="my-term" @click="showTerm = false">
      <div @click="showTerm = false">
        <span class="my-close"><i class="fas fa-times-circle"></i></span>
        <img src="term.png" />
      </div>
    </aside>
  </div>
</template>

<script>
// @ is an alias to /src
import DtcXlNavBar from "@/components/DtcXlNavBar.vue";

export default {
  name: "Home",
  components: {
    DtcXlNavBar,
  },
  data() {
    return {
      showPrivacy: false,
      showTerm: false,
    };
  },
  watch: {
    $route(to, from) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
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
  font-family: "Microsoft JhengHei", Helvetica, Arial, sans-serif !important;
}
#app {
  font-family: "Microsoft JhengHei", Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  overflow-x: hidden;
  > * {
    overflow-y: hidden !important;
  }
}

footer {
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
      grid-template-columns: max-content 1px max-content;
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
    margin-left: 2rem;
  }
}
.my-term {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(#fff, 0.95);
  display: grid;
  place-items: center;
  z-index: 9999999999;
  > div {
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
    overflow-y: auto;
    position: relative;
    img {
      display: block;
      z-index: 99999999999;
    }
    .my-close {
      cursor: pointer;
      position: sticky;
      top: 1rem;
      transform: translateX(500px);
      color: black;
      font-size: 24px;
    }
  }
}
</style>
