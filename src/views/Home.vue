<template>
  <section></section>
</template>

<script>
import "swiper/swiper-bundle.css";
import Swiper from "swiper/bundle";
export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {},
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true
      // }
      navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2"
      }
    });
    setTimeout(() => document.querySelector("#myVid").play(), 0);
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.fin-banner-img {
  background-repeat: none;
}
.swiper-container {
  width: 100%;
}

.swiper-slide {
  img {
    width: 100%;
  }
}
.swiper-button-next2,
.swiper-button-prev2 {
  display: none;
}

#myVid {
  width: 100vw !important;
  height: 500px;
  object-fit: fill;
  position: relative;
}
main {
  position: relative;
}
main::after,
.overly {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  background: rgba(#fff, 0.6);
  width: 100vw !important;
  height: 500px;
  z-index: 1;
}

.overly {
  margin-top: 1.2rem;
  background: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 220px;
  place-items: center;
  grid-gap: 1rem;
  z-index: 2;
  nav {
    display: grid;
    place-items: center;
    width: 200px;
    height: 200px;
    padding-top: 10px;
    background: rgba(#fff, 0.8);
    border-radius: 100%;
    font-size: 120px;
    color: rgba(#000, 0.5);
    transform: scale(0.9);
    &:hover {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(#fff, 0.5);
    }
  }
}

.sh1,
.sh2 {
  object-fit: cover;
  width: 100%;
  height: auto;
}
</style>
