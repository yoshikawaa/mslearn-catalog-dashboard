<template>
  <v-container fluid fill-height>
    <v-sheet color="transparent">
      <v-row>
        <v-col
          cols="12"
          lg="2"
          md="3"
          sm="4"
          v-for="item in certifications"
          :key="item.uid"
        >
          <v-card shaped height="100%">
            <v-avatar tile size="60" class="ml-4 mt-4">
              <v-img
                alt="Role Logo"
                class="shrink"
                contain
                :src="$store.state.constants.msUrl + item.iconUrl"
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
              <div class="duration">
                <template v-if="Math.floor(item.duration_in_minutes / 60) > 0">
                  {{ Math.floor(item.duration_in_minutes / 60) }} h
                </template>
                {{ item.duration_in_minutes % 60 }} m
              </div>
            </v-card-subtitle>
            <v-card-text>
              <chart
                :key="item.uid"
                :labels="levels"
                :data="[
                  item.learningPaths.filter((item) =>
                    item.levels.includes(levels[0])
                  ).length,
                  item.learningPaths.filter((item) =>
                    item.levels.includes(levels[1])
                  ).length,
                  item.learningPaths.filter((item) =>
                    item.levels.includes(levels[2])
                  ).length,
                ]"
              ></chart>
            </v-card-text>
            <v-card-actions class="justify-end mr-4 mb-4">
              <v-btn
                color="primary"
                :href="$store.state.constants.certificationsUrl + item.name"
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
  name: "Certifications",
  data: () => ({
    levels: ["beginner", "intermediate", "advanced"],
  }),
  computed: {
    certifications() {
      return this.$store.state.certifications;
    },
    learningPaths() {
      return this.$store.state.catalog.learningPaths;
    },
  },
};
</script>