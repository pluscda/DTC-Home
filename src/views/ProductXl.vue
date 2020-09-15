<template>
  <section class="about-us">
    <DtcXlNavWhiteBar></DtcXlNavWhiteBar>
    <div class="banner">
      <img src="ris_title.png" height="76" v-if="activeIdx == 0" />
      <img src="pacs_title.png" height="76" v-if="activeIdx == 1" />
      <img src="his_title.png" height="76" v-if="activeIdx == 2" />
      <img src="srrs_title.png" height="76" v-if="activeIdx == 3" />
      <img src="emr_title.png" height="76" v-if="activeIdx == 4" />
      <img src="pes_title.png" height="76" v-if="activeIdx == 5" />
      <img src="lis_title.png" height="76" v-if="activeIdx == 6" />
      <img src="ctps_title.png" height="76" v-if="activeIdx == 7" />
      <img src="mris_title.png" height="76" v-if="activeIdx == 8" />
      <img src="ads_title.png" height="76" v-if="activeIdx == 9" />
    </div>
    <div class="dtc-body">
      <nav>
        <div @click="activeIdx = i" :class="i == activeIdx ? 'active-nav-dtc' : ''" v-for="(item, i) in names" :key="i">{{ item }}</div>
      </nav>
      <main v-for="(item, i) in imgs" :key="i" v-if="i == activeIdx">
        <img :src="item" />
      </main>
    </div>
  </section>
</template>

<script>
import DtcXlNavWhiteBar from "@/components/DtcXlNavWhiteBar.vue";
const dummy = `RIS-放射資訊系統 PACS-影像醫學傳輸系統 HIS-醫院資訊系統 SRRS-手術記錄報告系統 EMR-電子病例管理系統 PES-病理檢驗系統 LIS-檢驗資訊系統 CTPS-癌症管理系統 MRIS-病歷掃描倉儲系統 ADS-血液淨化管理系統`;
const names = dummy.split(" ");
const imgs = [
  "ris_content.png",
  "//unsplash.it/890/1094?image=1",
  "2020-09-15 09.29.44.jpg",
  "//unsplash.it/890/1094?image=3",
  "//unsplash.it/890/1094?image=4",
  "//unsplash.it/890/1094?image=5",
  "//unsplash.it/890/1094?image=6",
  "//unsplash.it/890/1094?image=7",
  "//unsplash.it/890/1094?image=8",
  "//unsplash.it/890/1094?image=9",
];
export default {
  data() {
    return {
      names,
      activeIdx: 0,
      imgs,
    };
  },
  components: {
    DtcXlNavWhiteBar,
  },
  watch: {
    activeIdx() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
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
  display: grid;
  grid-template-columns: 234px 1fr;
  width: 1200px;
  gap: 1rem;
  margin: 4rem auto;
  > nav {
    display: flex;
    flex-direction: column;
    > div:first-child {
      margin-top: 60px;
    }
    > div {
      margin-bottom: 30px;
      cursor: pointer;
    }
    main {
      display: flex;
      flex-direction: column;
      > img {
        display: block;
        object-fit: cover;
        width: 100%;
      }
    }
  }
}
.banner {
  width: 100vw;
  height: 380px;
  background: url("/product_banner.png") no-repeat center center;
  background-size: cover;
  display: grid;
  place-items: center;
  > img {
    transform: translateY(40px);
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
      grid-template-columns: max-content 1px max-content 1px max-content;
      gap: 1rem;
      > div {
        background: white;
        height: 70%;
        cursor: pointer;
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
.active-nav-dtc {
  color: #274db7;
}
</style>
