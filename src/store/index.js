import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    locale: "en-us",
    catalog: [],
  },
  mutations: {
    locale(state, locale) {
      state.locale = locale;
    },
    catalog(state, catalog) {
      state.catalog = catalog;
    }
  }
})

export default store
