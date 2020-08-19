<template>
  <section class="about-us">
    <div class="about-container">
      <main>
        <h5>ABOUT US</h5>
        <h6>關於我們</h6>
        <p>合華科技創立於民國七十六年，一</p>
        <p>直是以專業化的資訊服務為經營的</p>
        <p>方向，專業醫療背景的負責人與開</p>
        <p>發團隊，擁有優越的整合技術與</p>
        <p>經驗以及底層DICOM核心技術，可整</p>
        <p>合各種不同醫療儀器與各家HIS/</p>
        <p>PACS廠商的系統及有效解決各種疑</p>
        <p>難與技術問題，提供醫療院所更高</p>
        <p>規的管理與流程改造建議</p>
        <div class="more-about mt-3" @click="$router.push('about')">瞭解更多</div>
      </main>
      <nav>
        <p>專 利 技 術</p>
        <img src="home_image/copyright_img.png" class="dtc-imgs" />
        <main class="nav-main">
          <div>專利技術</div>
          <div>1.醫療影像資料擷取整合裝置</div>
          <div>2.遠距醫療無線偵測系統</div>
          <div>3.手術影像無線傳輸紀錄及管理系統</div>
          <div>4.門診報到裝置及門診報到系統專利</div>
          <div>5.手術房影像傳輸管理系統及使用其之醫療管理系統專利</div>
        </main>
      </nav>
      <nav>
        <p>國 際 證 照 及 品 質</p>
        <img src="home_image/quality_img.png" class="dtc-imgs" />
        <main class="nav-main">
          <div>獲獎紀錄</div>
          <div>1.醫學影像軟體獲得國家優良商品金牌獎</div>
          <div>2.2018第一屆總統盃黑客松軟體創新大賽優良團隊前五名</div>
        </main>
      </nav>

      <nav>
        <p>國際證照及品質</p>
        <img src="home_image/prize_img.png" class="dtc-imgs" />
        <main class="nav-main">
          <div>國際證照及品質</div>
          <div>1.ISO 9001認證</div>
          <div>2.GMP及FDAClass II認證</div>
          <div>3.資料庫證照（Oracle,SQL）3張</div>
          <div>4.網路系統（CCNA等）4張</div>
          <div>5.伺服器及系統專業證照 （MCP,MCSE,MCSA等）14張</div>
          <div>6.磁碟陣列（EMC）1張</div>
        </main>
      </nav>
    </div>
  </section>
</template>

<script>
const names = ["首頁", "關於合華", "焦點訊息", "產品介紹", "成功案例", "報修系統", "人力招募", "聯絡我們"];
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
.about-us {
  width: 100vw;
  display: grid;
  place-items: center;
  color: black;
}

h5 {
  font-size: 40px;
  color: #3d63cb;
  font-weight: bolid;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    display: block;
    width: 4px;
    background: #3d63cb;
    height: 80px;
    top: 6px;
    left: -15px;
  }
}
h6 {
  color: black;
  font-size: 24px;
  display: block;
  margin-bottom: 20px;
}
.about-container {
  display: grid;
  grid-template-columns: 289px repeat(3, 300px);
  grid-template-rows: 450px;
  gap: 10px;
  > main:first-child {
    p {
      margin: 0;
      margin-bottom: 10px;
    }
  }
  > nav {
    position: relative;
    .dtc-imgs {
      width: 300px;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
    }
    p {
      position: absolute;
      top: 8px;
      left: 4px;
      writing-mode: vertical-lr;
      color: white;
      font-size: 24px;
    }
  }
}
.more-about {
  width: 120px;
  height: 40px;
  border: 1px solid #007dd5;
  border-radius: 28px;
  color: #007dd5;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  //transform: translateX(60px);
  cursor: pointer;
}

.nav-main {
  position: absolute;
  opacity: 0;
  top: 100%;
  left: 0;
  right: 0;
  bottom: 0%;
  background: rgba(#000, 0.1);
  width: 100%;
  height: 0;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 88;
  font-size: 16px;
  padding: 0 10px;
  transition: all 1s ease-in-out;
  > div {
    margin-bottom: 1rem;
  }
  > div:first-child {
    font-size: 24px;
  }
}
nav:hover {
  .nav-main {
    transition: all 0.8s ease-in-out;
    opacity: 1 !important;
    top: 0;
    height: 100%;
    background: rgba(#000, 0.9);
    cursor: pointer;
  }
}
</style>
