<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <locale-dialog v-if="dialog" :isOpen="true" @closed="closed" />
      <v-progress-linear v-else-if="loading" indeterminate color="primary" />
      <v-alert v-else-if="err" type="error">{{ err }}</v-alert>
    </v-row>
  </v-container>
</template>

<script>
import LocaleDialog from "@/components/LocaleDialog.vue";
export default {
  components: { LocaleDialog },
  name: "Home",
  data: () => ({
    from: null,
    dialog: true,
    loading: false,
    err: null,
  }),
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (to.path != from.path) {
        vm.from = from;
      }
    });
  },
  methods: {
    closed(localeChanged) {
      this.dialog = false;
      this.loading = true;
      this.err = null;

      if (this.$store.state.catalog.length === 0 || localeChanged) {
        // fetch localed catalog.
        fetch(this.$store.getters.catalogUrl())
          .then((response) => response.json())
          .then((json) => {
            this.$store.commit("catalog", json);
            this.loading = false;
            this.$router.push(this.from ?? "/roles");
          })
          .catch((err) => {
            this.err = err;
            this.loading = false;
          });
      } else {
        this.$router.push(this.from ?? "/roles");
      }
    },
  },
};
</script>