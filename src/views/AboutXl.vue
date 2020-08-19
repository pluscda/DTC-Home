<template>
  <section class="about-us">
    <DtcXlNavWhiteBar></DtcXlNavWhiteBar>
    <div class="banner">
      <img src="about_titlw.svg" width="140" />
    </div>
    <img src="about_text.jpg" class="dtc-body" />
  </section>
</template>

<script>
import DtcXlNavWhiteBar from '@/components/DtcXlNavWhiteBar.vue';

export default {
  data() {
    return {
      
    };
  },
  components:{
    DtcXlNavWhiteBar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.about-us {
  width: 100vw;
  color: black;
  display: flex;
  flex-direction: column;
}
.dtc-body {
  display: block;
  width: 1200px;
  margin: 4rem auto;
}
.banner {
  width: 100vw;
  height: 380px;
  background: url("/banner.jpg") no-repeat center center;
  background-size: cover;
  display: grid;
  place-items: center;
  > img {
    transform: translateY(40px);
  }
}
</style>
