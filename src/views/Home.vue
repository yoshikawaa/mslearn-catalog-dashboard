<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <config-dialog v-if="dialog" :isOpen="true" @closed="closed" />
      <v-progress-linear v-else-if="loading" indeterminate color="primary" />
      <v-alert v-else-if="err" type="error">{{ err }}</v-alert>
    </v-row>
  </v-container>
</template>

<script>
import ConfigDialog from "@/components/ConfigDialog.vue";
import Yaml from "js-yaml";
export default {
  components: { ConfigDialog },
  mixins: [Yaml],
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
        this.fetchCatalog();
      } else {
        this.$router.push(this.from ?? "/roles");
      }
    },
    fetchCatalog() {
      fetch(this.$store.getters.catalogUrl())
        .then((response) => response.json())
        .then((json) => {
          this.$store.commit("catalog", json);
          this.fetchCertifications();
          this.loading = false;
          this.$router.push(this.from ?? "/roles");
        })
        .catch((err) => {
          this.err = err;
          this.loading = false;
        });
    },
    fetchCertifications() {
      this.$store.commit("certifications", []);
      fetch(this.$store.state.constants.gitCertificationsUrl)
        .then((response) => response.json())
        .then((json) => {
          for (let i in json.tree) {
            const item = json.tree[i];
            if (item.path.match(/learn-certs-pr\/[a-z|0-9|-]+\/index.yml/g)) {
              fetch(this.$store.state.constants.gitCertificationUrl + item.path)
                .then((response) => response.text())
                .then((text) => Yaml.load(text))
                .then((yaml) => {
                  if (yaml.uid && yaml.uid.includes("certification.")) {
                    this.$store.commit("certification", yaml);
                  }
                })
                .catch((err) => {
                  this.err = err;
                  this.loading = false;
                });
            }
          }
        })
        .catch((err) => {
          this.err = err;
          this.loading = false;
        });
    },
  },
};
</script>