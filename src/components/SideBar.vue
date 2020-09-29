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
    this.$root.$on("open-sidebar", () => (this.show = true));
  },

  watch: {},
};
</script>

<style lang="scss" scoped>
.chart-dtc {
  background: white;
  border-radius: 10px;
  margin: 1px 7px;
}
</style>
