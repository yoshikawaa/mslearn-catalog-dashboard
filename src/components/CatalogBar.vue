<template>
  <v-snackbar v-model="snackbar" right transition="slide-x-reverse-transition">
    {{ count > 0 ? "Good" : "Oops" }}! You found
    <span class="font-weight-bold accent--text">{{ count }}</span>
    items!
    <template v-slot:action="{ attrs }">
      <v-btn icon v-bind="attrs" @click="snackbar = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "CatalogBar",
  props: ["count"],
  data: () => ({
    snackbar: false,
  }),
  mounted() {
    this.snackbar = true;
  },
  watch: {
    count() {
      this.snackbar = false;
      this.snackbar = true;
    },
  },
};
</script>