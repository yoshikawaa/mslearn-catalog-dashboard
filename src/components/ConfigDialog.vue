<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    max-width="300px"
    @keydown="dialog = false"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on"> Open Dialog </v-btn>
    </template>
    <v-card>
      <v-card-title  class="grey darken-3 text-h5 white--text">
        <span>Configuration</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <p class="text-h6">Locale</p>
              <v-btn-toggle v-model="locale" tile group mandatory>
                <v-btn
                  v-for="item in locales"
                  :key="item.value"
                  :value="item.value"
                  >{{ item.label }}</v-btn
                >
              </v-btn-toggle>
            </v-col>
          </v-row>
          <v-divider class="mt-4 mb-4" />
          <v-row>
            <v-col cols="12">
              <p class="text-h6">Theme</p>
              <v-btn-toggle v-model="dark" tile group mandatory>
                <v-btn
                  v-for="item in themes"
                  :key="item.value"
                  :value="item.value"
                  >{{ item.label }}</v-btn
                >
              </v-btn-toggle>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ConfigDialog",
  props: ["isOpen"],
  data: () => ({
    dialog: false,
    reload: false,
    locale: "",
    locales: [
      { label: "English", value: "en-us" },
      { label: "Japanese", value: "ja-jp" },
    ],
    dark: false,
    themes: [
      { label: "light", value: false },
      { label: "dark", value: true },
    ],
  }),
  created() {
    this.dialog = this.isOpen;
    this.locale = this.$store.state.locale;
    this.dark = this.$vuetify.theme.dark;
  },
  watch: {
    locale(newVal) {
      this.$store.commit("locale", newVal);
      this.reload = true;
    },
    dark(newVal) {
      this.$vuetify.theme.dark = newVal;
    },
    dialog(newVal, oldVal) {
      if (!newVal && oldVal) this.$emit("closed", this.reload);
    },
  },
};
</script>