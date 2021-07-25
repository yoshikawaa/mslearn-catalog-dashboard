import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// functions
const language = (lang) => ((window.navigator.languages && window.navigator.languages[0]) ||
  window.navigator.language ||
  window.navigator.userLanguage ||
  window.navigator.browserLanguage).includes(lang);
const average = (arr) => arr.reduce((prev, current) => prev + current, 0) / arr.length;

const store = new Vuex.Store({
  state: {
    locale: language("ja") ? "ja-jp" : "en-us",
    catalog: [],
    constants: {
      catalogUrl: "https://docs.microsoft.com/api/learn/catalog/",
      rolesUrl: "https://docs.microsoft.com/ja-jp/learn/roles/",
    }
  },
  mutations: {
    locale(state, locale) {
      state.locale = locale;
    },
    catalog(state, catalog) {
      const roles = catalog.roles;
      const learningPaths = catalog.learningPaths;
      for (let i in roles) {
        const role = roles[i];
        role.rolePaths = learningPaths.filter((item) =>
          item.roles.includes(role.id)
        );
        role.popularity = average(role.rolePaths.map((e) => e.popularity));
      }
      state.catalog = catalog;
    }
  },
  getters: {
    catalogUrl: (state) => () => {
      const url = state.constants.catalogUrl;
      return (state.locale === "") ? url : url + "?locale=" + state.locale;
    },
    filterCatalog: (state) => (form) => {
      // non filter.
      if (form === undefined) {
        return state.catalog.learningPaths.sort((a, b) => b.popularity - a.popularity);
      }
      // filter by type
      const items =
        form.type === "m" ? state.catalog.modules : state.catalog.learningPaths;
      // filter by conditions
      const filteredItems = items.filter((item) => {
        const isRoleMatches =
          form.roles.length === 0 ||
          form.roles.some((e) => item.roles.includes(e));
        const isProductMatches =
          form.products.length === 0 ||
          form.products.some((e) => item.products.includes(e));
        const isLevelMatches =
          form.levels.length === 0 ||
          form.levels.some((e) => item.levels.includes(e));
        const isLocaleMatches = !form.isOnlySelectedLocale || item.locale === state.locale;
        return (
          isRoleMatches && isProductMatches && isLevelMatches && isLocaleMatches
        );
      });
      // sort
      return filteredItems.sort((a, b) =>
        (form.sort === "d") ? b.duration_in_minutes - a.duration_in_minutes :
        (form.sort === "r" && a.rating.average && a.rating.average) ? b.rating.average - a.rating.average :
        b.popularity - a.popularity);
    }
  }
})

export default store