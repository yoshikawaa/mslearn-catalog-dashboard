<script>
import { Doughnut } from "vue-chartjs";
import colors from 'vuetify/lib/util/colors'
export default {
  extends: Doughnut,
  mixins: [colors],
  name: "Chart",
  props: ["labels", "data"],
  mounted() {
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          backgroundColor: [colors.blue.base, colors.amber.base, colors.red.base],
          borderColor: this.$vuetify.theme.dark ? "#000000" : "#FFFFFF",
          data: this.data,
        },
      ],
    });
  },
};
</script>