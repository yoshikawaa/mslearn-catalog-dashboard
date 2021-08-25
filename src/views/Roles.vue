<template>
  <v-container fluid fill-height>
    <v-sheet color="transparent">
      <v-row>
        <v-col
          cols="12"
          lg="2"
          md="3"
          sm="4"
          v-for="item in roles"
          :key="item.id"
        >
          <v-card shaped height="100%">
            <v-avatar tile size="60" class="ml-4 mt-4">
              <v-icon
                class="shrink"
                color="primary"
                contain
                x-large
                transition="scale-transition"
                >mdi-account-multiple</v-icon
              >
            </v-avatar>
            <v-card-title>
              {{ item.name }}
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
            </v-card-subtitle>
            <v-card-text>
              <chart
                :key="item.name"
                :labels="levels"
                :data="[
                  item.rolePaths.filter((item) =>
                    item.levels.includes(levels[0])
                  ).length,
                  item.rolePaths.filter((item) =>
                    item.levels.includes(levels[1])
                  ).length,
                  item.rolePaths.filter((item) =>
                    item.levels.includes(levels[2])
                  ).length,
                ]"
              ></chart>
            </v-card-text>
            <v-card-actions class="justify-end mr-4 mb-4">
              <v-btn
                color="primary"
                :href="$store.getters.rolesUrl(item.id)"
                target="_blank"
                >Link</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
import Chart from "@/components/Chart.vue";
export default {
  components: { Chart },
  name: "Catalog",
  data: () => ({
    levels: ["beginner", "intermediate", "advanced"],
  }),
  computed: {
    roles() {
      return this.$store.state.catalog.roles;
    },
  },
};
</script>
