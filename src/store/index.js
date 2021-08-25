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
    certifications: [],
    constants: {
      msUrl: "https://docs.microsoft.com/",
      rolesPath: "/learn/roles/",
      certificationsPath: "/learn/certifications/",
      examsPath: "/learn/certifications/exams/",
      supportPath: "/learn/support/catalog-api",
      catalogUrl: "https://docs.microsoft.com/api/learn/catalog/",
      gitCertificationsUrl: "https://api.github.com/repos/MicrosoftDocs/learn-certs-pr.ja-jp/git/trees/master?recursive=true",
      gitCertificationUrl: "https://raw.githubusercontent.com/MicrosoftDocs/learn-certs-pr.ja-jp/live/",
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
    },
    certification(state, certification) {
      const catalog = state.catalog;
      // register name to certification
      const name = certification.uid.replace("certification.", "");
      certification.name = name;
      // register learningPath to certification
      certification.learningPaths = [];
      certification.duration_in_minutes = 0;
      const paths = certification.paths;
      if (paths && paths.length > 0) {
        for (let j in paths) {
          const learningPath = catalog.learningPaths.filter(
            (item) => item.uid.includes(paths[j].uid)
          )[0];
          if (learningPath) {
            certification.learningPaths.push(learningPath);
            certification.duration_in_minutes += learningPath.duration_in_minutes;
            // register certification to learningPath
            if (learningPath.certifications) {
              learningPath.certifications.push(name);
            } else {
              learningPath.certifications = [name];
            }
          }
        }
      }
      // register popularity to certification
      certification.popularity = (certification.learningPaths && certification.learningPaths.length > 0) ?
        average(certification.learningPaths.map((e) => e.popularity)) : 0;
      // register exams to certification
      certification.examNames = [];
      const exams = certification.exams;
      if (exams && exams.length > 0) {
        for (let k in exams) {
          const exam = exams[k].uid.replace("exam.", "");
          certification.examNames.push(exam);
        }
      }
      // register certification to state
      state.certifications.push(certification);
      state.certifications.sort(
        (a, b) => b.popularity - a.popularity
      );
    },
    certifications(state, certifications) {
      state.certifications = certifications;
    },
  },
  getters: {
    catalogUrl: (state) => () => {
      const url = state.constants.catalogUrl;
      return (state.locale === "") ? url : url + "?locale=" + state.locale;
    },
    rolesUrl: (state) => (role) => {
      return state.constants.msUrl + state.locale + state.constants.rolesPath + role;
    },
    certificationsUrl: (state) => (certification) => {
      return state.constants.msUrl + state.locale + state.constants.certificationsPath + certification;
    },
    examsUrl: (state) => (exam) => {
      return state.constants.msUrl + state.locale + state.constants.examsPath + exam;
    },
    supportUrl: (state) => () => {
      return state.constants.msUrl + state.locale + state.constants.supportPath;
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