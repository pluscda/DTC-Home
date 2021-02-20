<template>
  <div class="product-item p-3">
    <b-button variant="outline-primary" size="sm" @click.stop="$router.go(-1)">
      <b-icon icon="chevron-left" variant="primary" />
      產品介紹
    </b-button>

    <div class="pacs-items" v-if="pacsItems.length > 0">
      <div>PACS型號選單</div>
      <div class="d-flex flex-wrap">
        <div v-for="pacs in pacsItems" :key="pacs.key" class="pacs-btn p-2" v-text="pacs.title" @click.stop="$router.replace({ path: `/productMobile/${pacs.key}` })" />
      </div>
    </div>

    <div class="mt-2 px-2 pb-4 pt-3 item-frame shadow border" v-if="item">
      <dtc-title :main="item.title" :sub="item.sub" />
      <div class="border p-2 my-3 bg-white">
        <b-img :src="item.img" class="w-100" />
      </div>
      <div class="paragraphs">
        <p v-for="(parag,idx) in item.contents" :key="'parag' + idx" v-text="parag" />
      </div>
      <div class="steps">
        <div v-for="(step, idx) in item.steps" :key="'step' + idx" class="shadow-sm d-flex align-items-start py-2 bg-white mx-auto" :class="{'mt-4': idx > 0}">
          <div class="step-number mx-2 shadow" v-text="idx + 1" />
          <div class="flex-grow-1">
            <div class="step-title" v-html="step.title" />
            <div class="step-sub" v-html="step.sub" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { products } from "@/assets/js/products.js";
import dtcTitle from "@/components/dtc-title.vue";
export default {
  components: {
    dtcTitle
  },
  data () {
    return {
      item: null,
      products
    }
  },
  created () {
    this.findItem();
  },
  methods: {
    findItem () {
      // if (!this.$route.params.hasOwnProperty('itemName')) this.$router.replace({ name: 'ProductMobile' });
      let { itemName } = this.$route.params;
      if (itemName === 'Pictures') itemName = 'DC-100';
      const _item = this.products.find(({ key }) => key === itemName);
      
      if(!_item) this.$router.replace({ name: 'ProductMobile' });
      this.item = _item;
    },
    isMatchPacs(str) {
      return str.includes('DC-') || str.includes('DICOM-');
    }
  },
  computed: {
    pacsItems () {
      if (!this.item) return [];
      return this.isMatchPacs(this.item.title)
        ? this.products.filter(({key}) => this.isMatchPacs(key))
        : [];
    }
  }
}
</script>

<style lang="scss" scoped>
.product-item {
  color: #333;
}
.item-frame {
  background-color: #eee;
}

.paragraphs {
  > p {
    text-indent: 2rem;
  }
}

.steps {
  > div {
    width: 100%;
    max-width: 300px;
    border-radius: 15px;
  }

  .step-number {
    color: #fff;
    font-size: 1.5rem;
    background: linear-gradient(90deg, rgba(34,116,201,1) 0%, rgba(13,192,232,1) 100%);
    border-radius: 100px;
    width: 36px;
    height: 36px;
    text-align: center;
  }
  .step-title {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
  }
  .step-sub {
    text-align: center;
  }
}
</style>
