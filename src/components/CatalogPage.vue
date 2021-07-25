<template>
  <div class="page">
    <pagination
      :key="'t' + page + '/' + length"
      :current="page"
      :length="length"
      @change="paginated"
    />

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
            <v-rating
              :value="item.popularity * 5"
              half-increments
              background-color="primary"
              color="primary"
              readonly
            ></v-rating>
            {{ Math.floor(item.duration_in_minutes / 60) }}:{{
              item.duration_in_minutes % 60
            }}
          </v-card-subtitle>
          <v-card-text>
            {{ item.summary }}
          </v-card-text>
          <v-card-actions class="justify-end mr-4 mb-4">
            <v-btn color="primary" :href="item.url" target="_blank">Link</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <pagination
      :key="'b' + page + '/' + length"
      :current="page"
      :length="length"
      @change="paginated"
    />
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";
export default {
  components: { Pagination },
  name: "CatalogPage",
  props: ["locale", "items"],
  data: () => ({
    size: 12,
    page: 1,
  }),
  computed: {
    pageItems() {
      const current = this.size * this.page;
      const start = current - this.size;
      return this.items.slice(start, current);
    },
    length() {
      return Math.ceil(this.items.length / this.size);
    },
  },
  watch: {
    length(newVal) {
      if (0 < newVal && newVal < this.page) this.page = newVal;
    },
  },
  methods: {
    paginated(page) {
      this.page = page;
    },
  },
};
</script>
