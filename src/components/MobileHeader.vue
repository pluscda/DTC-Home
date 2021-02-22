<template>
  <div class="mobile-header" :style="`padding-top: ${headerHeight}px`">


    <div id="mainHeader" class="d-flex justify-content-between align-items-center py-1 px-2 position-fixed w-100 border-bottom">
      <div class="drawer d-flex flex-column justify-content-between ml-1" @click.stop="drawerEvent">
        <template v-if="!showDrawer">
          <span /><span /><span />
        </template>
      </div>
      <b-img src="home_image/logo_gray.svg" class="logo" />
      <div />
    </div>

    <transition name="fade">
      <aside class="position-fixed drawer-menu" :style="`top: ${headerHeight}px`" v-if="showDrawer">
        <b-icon icon="x" font-scale="2" class="cross position-absolute" @click.stop="drawerEvent" />
        <div v-for="({label, name}) in drawMenu" :key="name" v-text="label" class="mb-2" @click.stop="navigateTo(name)" />
      </aside>
    </transition>

    <div class="position-fixed scroll-button shadow p-1" @click.stop="scrollToTop" variant="primary" pill>
      <b-img src="homeMobile_image/arrowDown2.svg" />
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      showDrawer: false,
      drawMenu: [
        { label: '首頁', name: 'HomeMobile' },
        { label: '關於合華', name: 'AboutMobile' },
        { label: '焦點訊息', name: 'newsMobile' },
        { label: '產品介紹', name: 'ProductMobile' },
        { label: '成功案例', name: 'successMobile' },
        { label: '聯絡我們', name: 'contactMobile' }
      ],
      headerHeight: 57
    };
  },
  
  components: {
    
  },
  methods: {
    drawerEvent () {
      this.showDrawer = !this.showDrawer;
    },
    navigateTo (name) {
      this.$router.push({ name });
      this.drawerEvent();
    },
    scrollToTop () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }
};
</script>
<style scoped lang="scss">

.fade-enter-active, .fade-leave-active {
  transition: opacity .25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.mobile-header {
  font-family: "Microsoft Jhenghei";
  .cross {
    right: 10px;
    top: 10px;
  }
  .logo {
    width: 210px;
  }
  .drawer {
    width: 24px;
    height: 21px;
    span {
      width: 100%;
      display: block;
      height: 3px;
      background-color: #000;
      border-radius: 5px;
    }
  }
  .drawer-menu {
    z-index: 200;
    height: calc(100vh - 36px);
    width: 67vw;
    background-color: rgba(255, 255, 255, .86);
    left: 0;
    color: #333;
    padding: 50px 45px 0;
    font-weight: bold;
    font-size: 1.2rem;
  }
}

.scroll-button {
  right: 30px;
  bottom: 30px;
  background-color: #48C7E8;
  border-radius: 100px;
}

#mainHeader {
  left: 0;
  top: 0;
  z-index: 201;
  background-color: rgba(255, 255, 255, .95);
}
</style>
