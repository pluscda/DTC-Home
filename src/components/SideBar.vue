<template>
  <section>
    <b-sidebar
      width="430px"
      v-model="show"
      id="sidebar-1"
      title="護理站電子板維護"
      shadow
      bg-variant="light"
      text-variant="dark"
      aria-controls="sidebar-1"
      aria-expanded="true"
      style="position: relative;"
    >
      <div class="pl-4">
        <p>Key F1: 1 畫面</p>
        <p>Key F4: 4分割畫面</p>
        <p>Key F6: 6分割畫面</p>
        <p>Key F8: FullScreen 畫面</p>
      </div>
    </b-sidebar>
  </section>
</template>

<script>
export default {
  name: "Slider1",
  components: {},
  data() {
    return {
      show: true,
      sidebar: "",
      fullMap: false,
      school: "",
      year,
      years,
      tab: 1,
      liveList: [],
      names: [],
      code: "",
      schoolfee: [],
      strstr: "",
    };
  },
  components: {},
  props: ["map", "showSideBar", "currentCenter", "currentZoom", "item"],
  methods: {},

  async mounted() {
    this.$root.$on("open-sidebar", () => {
      this.show = true;
    });
  },

  watch: {},
};
</script>

<style lang="scss" scoped></style>
