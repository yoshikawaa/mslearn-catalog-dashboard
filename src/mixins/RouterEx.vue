<script>
export default {
  name: "RouterEx",
  methods: {
    navigate(path) {
      if (this.$router.currentRoute.path != path) {
        this.$router.push(path);
      }
    },
  },
};
</script>