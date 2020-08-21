<template>
  <section style="margin-top:-100px;">
    <img src="index_news_new.png" style="cursor:pointer;" @click="$router.push('news')" />
  </section>
</template>

<script>
const names = ['首頁', '關於合華', '焦點訊息', '產品介紹', '成功案例', '報修系統', '人力招募', '聯絡我們'];
export default {
	data() {
		return {
			names,
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section {
  width: 100vw;
  display: grid;
  place-items: center;
  padding-top: 140px;
  main {
    display: grid;
    width: 1200px;
    transform: translateX(100px);
    grid-template-columns: 1fr 2px 368px 2px 1fr;
    grid-template-rows: 250px;
    gap: 2.2rem;
    position: relative;
  }
  .small-dev-dtc {
    background: #707070 !important;
    border: 1px solid #707070;
  }
  .my-sec {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px repeat(4, 40px);
    color: black;
    > div {
      font-size: 20px;
      margin-bottom: 1rem;
    }
    > div:first-child {
      font-size: 22px;
    }
  }
}
.aside-right {
  position: absolute;
  right: -50px;
  top: -200px;
  .news-footer {
    position: absolute;
    top: 160%;
    left: 0px;
    width: 120px;
    height: 40px;
    border: 1px solid #007dd5 !important;
    border-radius: 28px;
    cursor: pointer;
    color: #007dd5 !important;
    background: white;
    font-size: 20px;
    text-align: center;
    line-height: 40px;
  }
  h5 {
    font-size: 40px;
    color: #3d63cb;
    font-weight: bolid;
    position: relative;
  }
  &::after,
  &::before {
    position: absolute;
    content: "焦點訊息";
    width: 200px;
    background: none;
    display: block;
    color: black;
    font-size: 24px;
    display: block;
    transform: translateY(-13px);
    clear: both;
  }
  &::before {
    content: "";
    background: #3d63cb;
    right: 0%;
    top: 0px;
    //margin-left: 12px;
    width: 4px;
    height: 115%;
    transform: translate(12px, 7px);
  }
}
</style>
