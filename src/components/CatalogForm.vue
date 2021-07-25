<template>
  <v-row align="center" justify="center" class="mb-auto">
    <v-col cols="12" offset-lg="1" lg="2" md="4" sm="6">
      <v-select
        label="Type"
        v-model="form.type"
        :items="types"
        chips
        @change="changed"
      ></v-select>
    </v-col>

    <v-col cols="12" lg="2" md="4" sm="6">
      <v-select
        label="Role"
        v-model="form.roles"
        :items="catalog.roles"
        item-text="name"
        item-value="id"
        multiple
        chips
        deletable-chips
        @change="changed"
        @click:clear="changed"
      ></v-select>
    </v-col>

    <v-col cols="12" lg="2" md="4" sm="6">
      <v-select
        label="Product"
        v-model="form.products"
        :items="catalog.products"
        item-text="name"
        item-value="id"
        multiple
        chips
        deletable-chips
        @change="changed"
        @click:clear="changed"
      ></v-select>
    </v-col>

    <v-col cols="12" lg="2" md="4" sm="6">
      <v-select
        label="Level"
        v-model="form.levels"
        :items="catalog.levels"
        item-text="name"
        item-value="id"
        multiple
        chips
        deletable-chips
        @change="changed"
        @click:clear="changed"
      ></v-select>
    </v-col>

    <v-col cols="12" lg="1" md="4" sm="6">
      <v-checkbox
        v-model="form.isOnlySelectedLocale"
        label="Selected Locale Only"
        @change="changed"
      />
    </v-col>

    <v-col cols="12" lg="2" md="4" sm="6">
      <v-btn @click="reset">Reset</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "CatalogForm",
  props: ["catalog"],
  data: () => ({
    form: {
      type: "l",
      roles: [],
      products: [],
      levels: [],
      isOnlySelectedLocale: false,
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
  },
  methods: {
    changed() {
      this.$emit("change", this.form);
    },
    reset() {
      this.form = {
        type: "l",
        roles: [],
        products: [],
        levels: [],
        isOnlySelectedLocale: false,
      };
      this.$emit("change", this.form);
    },
  },
};
</script>