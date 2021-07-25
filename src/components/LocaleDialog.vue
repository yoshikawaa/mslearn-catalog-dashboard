<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    max-width="300px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on"> Open Dialog </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Change Locale</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="1">
              <v-radio-group v-model="locale" mandatory @change="changed">
                <v-radio
                  v-for="item in locales"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </v-radio-group>
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
  name: "LocaleDialog",
  props: ["isOpen"],
  data: () => ({
    dialog: false,
    locales: [
      { label: "English", value: "en-us" },
      { label: "Japanese", value: "ja-jp" },
    ],
    locale: "",
  }),
  mounted() {
    this.dialog = this.isOpen;
    this.locale = this.$store.state.locale;
  },
  watch: {
    dialog(newVal, oldVal) {
      if (!newVal && oldVal) this.$emit("closed");
    },
  },
  methods: {
    changed() {
      this.$store.commit("locale", this.locale);
      this.dialog = false;
    },
  },
};
</script>