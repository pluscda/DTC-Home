<template>
  <section class="dtc-home">
    <div class="d-flex justify-content-between align-items-center py-1 px-2">
      <div class="drawer d-flex flex-column justify-content-between ml-1" @click.stop="drawerEvent">
        <template v-if="!showDrawer">
          <span /><span /><span />
        </template>
      </div>
      <b-img src="home_image/logo_gray.svg" class="logo" />
      <div />
    </div>

    <aside class="position-fixed drawer-menu" v-if="showDrawer">
      <div class="cross position-absolute" @click.stop="drawerEvent" />
      <div v-for="({label, path}) in drawMenu" :key="path" v-text="label" class="mb-2" />
    </aside>

  </section>
</template>

<script>
//焦點訊息

export default {
  data() {
    return {
      showDrawer: false,
      drawMenu: [
        { label: '首頁', path: 'Home' },
        { label: '關於合華', path: 'about' },
        { label: '焦點訊息', path: 'news' },
        { label: '產品介紹', path: 'product' },
        { label: '成功案例', path: 'case' },
        { label: '聯絡我們', path: 'contact' }
      ]
    };
  },
  components: {
    
  },
  methods: {
    drawerEvent () {
      this.showDrawer = !this.showDrawer;
    }
  },
  mounted() {
    
  },
};
</script>
<style scoped lang="scss">
.dtc-home {
  min-height: 86.5vh;
  font-family: "Microsoft Jhenghei";
  .cross {
    width: 20px;
    height: 20px;
    right: 10px;
    top: 10px;
    background-color: #000;
  }
}
.logo {
  width: 38%;
}
.drawer {
  width: 16px;
  height: 14px;
  span {
    width: 100%;
    display: block;
    height: 2px;
    background-color: #000;
  }
}
.drawer-menu {
  height: calc(100vh - 36px);
  width: 67vw;
  background-color: rgba(255, 255, 255, .86);
  left: 0;
  top: 36px;
  color: #333;
  padding: 50px 45px 0;
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
