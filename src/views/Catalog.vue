<template>
  <v-container fluid fill-height>
    <template class="catalog">
      <catalog-form @change="changed" />
      <catalog-page :items="items" />
      <catalog-bar :count="items.length" />
    </template>
  </v-container>
</template>

<script>
import CatalogForm from "@/components/CatalogForm.vue";
import CatalogPage from "@/components/CatalogPage.vue";
import CatalogBar from "@/components/CatalogBar.vue";
export default {
  components: { CatalogForm, CatalogPage, CatalogBar },
  name: "Catalog",
  data: () => ({
    items: null,
  }),
  created() {
    this.items = this.$store.getters.filterCatalog();
    this.snackbar = true;
  },
  computed: {
    locale() {
      return this.$store.state.locale;
    },
    catalog() {
      return this.$store.state.catalog;
    },
  },
  methods: {
    changed(form) {
      this.items = this.$store.getters.filterCatalog(form);
    },
  },
};
</script>
