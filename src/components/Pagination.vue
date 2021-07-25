<template>
  <v-row justify="center">
    <v-pagination
      v-model="page"
      :length="length"
      :total-visible="totalVisible"
      circle
      @input="input"
    ></v-pagination>
  </v-row>
</template>

<script>
export default {
  name: "Pagination",
  props: ["current", "length"],
  data: () => ({ page: null }),
  mounted() {
    this.page = this.current;
  },
  computed: {
    totalVisible() {
      return this.$vuetify.breakpoint.xsOnly ? 5 : 9;
    },
  },
  methods: {
    input(selectedPage) {
      this.$emit("change", selectedPage);
    },
  },
};
</script>
