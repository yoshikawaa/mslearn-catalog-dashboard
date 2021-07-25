<template>
  <div class="page">
    <v-sheet color="transparent">
      <v-row>
        <v-col
          cols="12"
          lg="3"
          md="4"
          sm="6"
          v-for="item in pageItems"
          :key="item.uid"
        >
          <v-card shaped height="100%">
            <v-avatar tile size="60" class="ml-4 mt-4">
              <v-img
                alt="Item Logo"
                class="shrink"
                contain
                :src="item.icon_url"
                transition="scale-transition"
              />
            </v-avatar>
            <v-card-title>
              {{ item.title }}
            </v-card-title>
            <v-card-subtitle>
              <v-progress-linear
                :value="item.popularity * 100"
                color="primary"
                rounded
                height="20"
              >
                <template v-slot:default="{ value }">
                  {{ Math.floor(value) }}% Popular
                </template>
              </v-progress-linear>
              <v-rating
                v-if="item.rating.average"
                :value="item.rating.average"
                half-increments
                dense
                background-color="primary"
                color="primary"
                readonly
              >
              </v-rating>
              <div class="duration">
                <template v-if="Math.floor(item.duration_in_minutes / 60) > 0">
                  {{ Math.floor(item.duration_in_minutes / 60) }} h
                </template>
                {{ item.duration_in_minutes % 60 }} m
              </div>
            </v-card-subtitle>
            <v-card-text>
              {{ item.summary }}
            </v-card-text>
            <v-card-actions class="justify-end mr-4 mb-4">
              <v-btn color="primary" :href="item.url" target="_blank"
                >Link</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>

    <infinite-loading
      spinner="circles"
      @infinite="infinited($event)"
      :identifier="identifier"
    >
      <div slot="spinner" class="mt-6 mb-6">
        <v-row align="center" justify="center">
          <v-progress-linear indeterminate color="primary" />
        </v-row>
      </div>
      <div slot="no-more"></div>
      <div slot="no-results"></div>
    </infinite-loading>
  </div>
</template>

<script>
export default {
  name: "CatalogPage",
  props: ["items"],
  data: () => ({
    size: 12,
    page: 1,
    pageItems: [],
    identifier: Date.now(),
  }),
  created() {
    this.loadPage(this.page);
  },
  watch: {
    items() {
      this.page = 1;
      this.pageItems = [];
      this.identifier = Date.now();
      this.loadPage(this.page);
    },
  },
  methods: {
    infinited($state) {
      this.page += 1;
      setTimeout(() => {
        if (this.loadPage(this.page) < this.items.length) {
          $state.loaded();
        } else {
          $state.complete();
        }
      }, 1000);
    },
    loadPage(page) {
      const current = this.size * page;
      const start = current - this.size;
      this.items
        .slice(start, current)
        .forEach((item) => this.pageItems.push(item));
      return current;
    },
  },
};
</script>
