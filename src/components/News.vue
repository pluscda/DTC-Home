<template>
  <section style="margin-top:-100px;">
    <main>
      <nav class="aside-right">
        <h5>NEWS</h5>
        <footer class="news-footer" @click="$router.push('news')">更多消息</footer>
      </nav>
      <div style="padding:10px;" class="my-sec">
        <div>2019/10/06</div>
        <div>合華科技榮獲總統盃軟體創新卓</div>
        <div>越團隊最高獎,空轉後送遠距會診</div>
        <div>平臺發表記者會, 啟用典禮於福華</div>
        <div>飯店舉辦成功</div>
      </div>
      <div class="small-dev-dtc"></div>
      <div style="padding:10px;" class="my-sec">
        <div>2019/04/01</div>
        <div>與亞洲健康董事長蔡博士合作</div>
        <div>共同擴展泰國及緬甸醫療市場初期以血</div>
        <div>液淨化、醫學影像、醫院資訊系</div>
        <div>統、人員培訓及研發中心為主</div>
      </div>
      <div class="small-dev-dtc"></div>
      <div style="padding:10px;" class="my-sec">
        <div>2019/01/07</div>
        <div>恭賀本公司獲得衛生福利部FHIR</div>
        <div>偏遠地區遠距視訊會診平台訂單</div>
      </div>
    </main>
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
  padding-top: 320px;
  display: grid;
  place-items: center;
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
