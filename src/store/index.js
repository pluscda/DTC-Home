import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMobile: false
  },
  mutations: {
    m_setIsMobile(state, mode) {
      state.isMobile = mode;
    }
  },
  actions: {},
  modules: {}
});
