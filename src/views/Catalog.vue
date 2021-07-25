<template>
  <v-container fluid fill-height>
    <v-row v-if="loading" align="center" justify="center">
      <v-progress-linear indeterminate color="primary" />
    </v-row>
    <v-row v-else-if="err" align="center" justify="center">
      <v-alert type="error">{{ err }}</v-alert>
    </v-row>
    <template v-else class="catalog">
      <catalog-form :catalog="catalog" @change="changed" />
      <catalog-page :locale="locale" :items="items" />
    </template>
  </v-container>
</template>

<script>
import CatalogForm from "@/components/CatalogForm.vue";
import CatalogPage from "@/components/CatalogPage.vue";
export default {
  components: { CatalogForm, CatalogPage },
  name: "Catalog",
  data: () => ({
    loading: false,
    err: null,
    items: null,
  }),
  created() {
    const locale = this.locale;
    this.fetchCatalog(locale);
  },
  computed: {
    locale() {
      const locale = this.$store.state.locale;
      this.fetchCatalog(locale);
      return locale;
    },
    catalog() {
      return this.$store.state.catalog;
    },
  },
  methods: {
    fetchCatalog(locale) {
      // initialize.
      this.loading = true;
      this.err = null;

      const url = "https://docs.microsoft.com/api/learn/catalog/";
      const param = locale == "" ? locale : "?locale=" + locale;

      // fetch localed catalog.
      fetch(url + param)
        .then((response) => response.json())
        .then((json) => {
          this.$store.commit("catalog", json);
          this.items = json.learningPaths;
          this.loading = false;
        })
        .catch((err) => {
          this.err = err;
          this.loading = false;
        });
    },
    changed(form) {
      const items =
        form.type === "l" ? this.catalog.learningPaths : this.catalog.modules;
      this.items = items.filter((item) => {
        const isRoleMatches =
          form.roles.length === 0 ||
          form.roles.some((e) => item.roles.includes(e));
        const isProductMatches =
          form.products.length === 0 ||
          form.products.some((e) => item.products.includes(e));
        const isLevelMatches =
          form.levels.length === 0 ||
          form.levels.some((e) => item.levels.includes(e));
        const isLocaleMatches =
          !form.isOnlySelectedLocale || item.locale === this.locale;
        return (
          isRoleMatches && isProductMatches && isLevelMatches && isLocaleMatches
        );
      });
    },
  },
};
</script>
