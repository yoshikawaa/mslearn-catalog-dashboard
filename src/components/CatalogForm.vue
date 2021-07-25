<template>
  <v-row align="center" justify="center" class="mb-auto">
    <v-col cols="12" lg="2" md="4" sm="6">
      <v-select
        label="Type"
        v-model="form.type"
        :items="types"
        chips
      ></v-select>
    </v-col>

    <v-col cols="12" lg="2" md="4" sm="6">
      <v-select
        label="Role"
        v-model="form.roles"
        :items="roles"
        item-text="name"
        item-value="id"
        multiple
        chips
        deletable-chips
      ></v-select>
    </v-col>

    <v-col cols="12" lg="2" md="4" sm="6">
      <v-select
        label="Product"
        v-model="form.products"
        :items="products"
        item-text="name"
        item-value="id"
        multiple
        chips
        deletable-chips
      ></v-select>
    </v-col>

    <v-col cols="12" lg="2" md="4" sm="6">
      <v-select
        label="Level"
        v-model="form.levels"
        :items="levels"
        item-text="name"
        item-value="id"
        multiple
        chips
        deletable-chips
      ></v-select>
    </v-col>

    <v-col cols="12" lg="1" md="4" sm="6">
      <v-checkbox
        v-model="form.isOnlySelectedLocale"
        label="Selected Locale Only"
      />
    </v-col>

    <v-col cols="12" lg="2" md="4" sm="6">
      <v-select
        label="Sort"
        v-model="form.sort"
        :items="sorts.filter((item) => item.types.includes(form.type))"
        chips
      ></v-select>
    </v-col>

    <v-col cols="12" lg="1" md="4" sm="6">
      <v-btn @click="reset">Reset</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "CatalogForm",
  data: () => ({
    form: {
      type: "l",
      roles: [],
      products: [],
      levels: [],
      isOnlySelectedLocale: false,
      sort: "p",
    },
  }),
  computed: {
    types() {
      return this.$store.state.locale === "en-us"
        ? [
            { text: "Learning Path", value: "l" },
            { text: "Module", value: "m" },
          ]
        : [
            { text: "ラーニングパス", value: "l" },
            { text: "モジュール", value: "m" },
          ];
    },
    roles() {
      return this.$store.state.catalog.roles;
    },
    products() {
      return this.$store.state.catalog.products;
    },
    levels() {
      return this.$store.state.catalog.levels;
    },
    sorts() {
      return this.$store.state.locale === "en-us"
        ? [
            { text: "Popularity", value: "p", types: ["l", "m"] },
            { text: "Rating", value: "r", types: ["m"] },
            { text: "Duration", value: "d", types: ["l", "m"] },
          ]
        : [
            { text: "人気", value: "p", types: ["l", "m"] },
            { text: "評価", value: "r", types: ["m"] },
            { text: "時間", value: "d", types: ["l", "m"] },
          ];
    },
  },
  watch: {
    "form.type"(newVal, oldVal) {
      if (oldVal === "m" && newVal === "l" && this.form.sort === "r") {
        this.form.sort = "p";
      }
    },
    form: {
      // require not arrow, but function.
      handler: function(newVal) {
        console.log(this);
        this.$emit("change", newVal);
      },
      deep: true,
    },
  },
  methods: {
    reset() {
      this.form = {
        type: "l",
        roles: [],
        products: [],
        levels: [],
        isOnlySelectedLocale: false,
        sort: "p",
      };
    },
  },
};
</script>