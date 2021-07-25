<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <locale-dialog :isOpen="true" @closed="closed" />
    </v-row>
  </v-container>
</template>

<script>
import LocaleDialog from "@/components/LocaleDialog.vue";
export default {
  components: { LocaleDialog },
  name: "Home",
  data: () => ({}),
  methods: {
    closed() {
      this.$router.push("/catalog");
    },
  },
};
</script>