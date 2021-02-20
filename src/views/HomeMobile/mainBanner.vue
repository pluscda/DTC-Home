<template>
  <div class="position-relative">
    <b-img src="homeMobile_image/main_left.jpg" class="home-banner" />
    <div class="position-absolute d-flex align-items-center justify-content-end" style="left: 0; right: 0; bottom: 0; top: 0;">
      <div class="mr-5">
        <div class="px-4 py-2 home-slogan">
          <h3>DATACOME <br />TECHNOLOGY CORP.</h3>
          <h4>
            <div>讓合華科技團隊</div>
            <div>為您打造專業醫療等級的院所</div>
            <div>提供給您最專業、</div>
            <div>完整的系統解決方案。</div>
          </h4>
        </div>
        <b-button size="sm" variant="light" class="shadow mx-auto d-table immediate mt-2">立即洽詢</b-button>
        <b-icon icon="chevron-double-down" class="mx-auto d-table mt-1" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.home-banner {
  width: 100vw;
}
.home-slogan {
  background-color: rgba(5, 0, 70, 0.35);
  h3 {
    font-size: 0.9rem;
    font-weight: bold;
    border-bottom: 2px solid rgba(22, 0, 102, .85);
    padding-top: 0;
    padding-bottom: 5px;
    margin-bottom: 5px;
  }
  h4 {
    font-size: 0.7rem;
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }
}
.immediate {
  font-size: 0.7rem;
  font-weight: bold;
  color: rgba(22, 0, 102, .85);

}

</style>
