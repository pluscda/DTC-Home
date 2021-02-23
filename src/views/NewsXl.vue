<template>
  <section class="about-us">
    <DtcXlNavWhiteBar></DtcXlNavWhiteBar>
    <div class="banner">
      <img src="news_title_new.png" width="140" />
    </div>

    <div class="items p-5 container shadow mt-5">
      <template v-for="([year, items],idx) in Object.entries(newsGroup).reverse()">
        <div :key="year" class="year mb-4">
          {{ year }}<font>年</font>
        </div>
        <div class="list pt-2 pl-2" :key="year + 'list'" :class="{'mb-5': idx < Object.keys(newsGroup).length - 1}">
          <div v-for="item in items" :key="item.date" class="mb-3">
            <div class="item-date" v-text="item.date" />
            <div class="item-content" v-text="item.content" />
          </div>
        </div>
      </template>
    </div>

    <div class="pages-dtc mt-4 mb-4 d-flex justify-content-center pt-5">
      <!-- <b-pagination-nav
        use-router
        v-model="currentPage"
        :number-of-pages="4"
        prev-text="上一頁"
        next-text="下一頁"
      ></b-pagination-nav> -->
      <b-pagination
        v-model="pagination.page"
        :total-rows="news.length"
        :per-page="pagination.per"
        aria-controls="my-table"
        prev-text="上一頁"
        next-text="下一頁"
      />
    </div>
  </section>
</template>

<script>
import DtcXlNavWhiteBar from '@/components/DtcXlNavWhiteBar.vue';
import news from "@/assets/js/news.js";
export default {
  data() {
    return {
      news,
      pagination: {
        page: 1,
        per: 16
      }
    };
  },
  components:{
    DtcXlNavWhiteBar
  },
  computed: {
    newsGroup () {
      const { page, per } = this.pagination;
      return this.news.slice((page - 1) * per, page * per).reduce((acc, cur) => {
        const _year = cur.date.substr(0, 4);
        if (acc.hasOwnProperty(_year)) {
          acc[_year].push(cur)
        } else {
          acc[_year] = [cur]; 
        }
        return acc;
      }, {});
    }
  },
  watch:{
    "pagination.page" () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.banner {
  width: 100vw;
  height: 380px;
  background: url("/news_banner.png") no-repeat center center;
  background-size: cover;
  display: grid;
  place-items: center;
  > img {
    transform: translateY(40px);
  }
}


.items {
  color: #555;
  .item-date {
    font-weight: bold;
    font-size: 1rem;
  }
  .item-content {
    font-size: 1.2rem;
    width: 100%;
    &:after {
      height: 2px;
      width: 100%;
      background-color: transparent;
      box-shadow: 0 0 5px #ccc;
      display: table;
      margin: 10px 0;
      content: '';
    }
  }
  .list {
    > div {
      display: grid;
      grid-template-columns: 110px 1fr;
      &:nth-last-child(1) {
        .item-content:after {
          display: none;
        }
      }
    }
  }
  .year {
    color: #3D63CB;
    font-weight: bold;
    font-size: 2.3rem;
    line-height: 1;
    font-family: 'Trebuchet MS', sans-serif !important;
    span {
      font-family: Microsoft Jhenghei !important;
    }
  }
}

</style>
