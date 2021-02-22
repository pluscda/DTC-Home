<template>
  <div class="news">
    <dtc-banner title="焦點訊息" path="首頁/焦點訊息" image="newsMobile_image/news_banner.jpg" />
    <div class="items px-3 py-4">
      <template v-for="[year, items] in Object.entries(newsGroup).reverse()">
        <div v-text="year" :key="year" class="year" />
        <div class="list pt-2 pl-2" :key="year + 'list'">
          <div v-for="item in items" :key="item.date" class="mb-3">
            <div class="item-date" v-text="item.date" />
            <div class="item-content" v-text="item.content" />
          </div>
        </div>
      </template>
    </div>
    <div class="d-flex justify-content-center">
      <b-pagination
        v-model="pagination.page"
        :total-rows="news.length"
        :per-page="pagination.per"
        aria-controls="my-table"
      />
    </div>
  </div>
</template>

<script>
import dtcBanner from "@/components/dtc-banner.vue";
import news from "@/assets/js/news.js";
export default {
  components: {
    dtcBanner
  },
  data() {
    return {
      news,
      pagination: {
        page: 1,
        per: 16
      }
    };
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
  methods: {
    
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
  .items {
    display: grid;
    grid-template-columns: 42px 1fr;
    color: #555;
    .item-date {
      color: #000;
      font-weight: bold;
      font-size: .7rem;
    }
    .item-content {
      font-size: .9rem;
    }
    .list {
      border-left: 1px solid #3D63CB;
      position: relative;
      &:before {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 30px;
        background-color: #3D63CB;
        position: absolute;
        left: -1px;
        top: 0px;
        transform: translateX(-50%);
      }
    }
    .year {
      color: #3D63CB;
      font-weight: bold;
      font-size: .9rem;
      line-height: 1;
    }
  }
</style>
