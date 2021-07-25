<script>
export default {
  name: "RouterEx",
  methods: {
    navigate(path) {
      if (this.$router.currentRoute.path === path) {
        this.$router.go(this.$router.currentRoute);
      } else {
        this.$router.push(path);
      }
    },
  },
};
</script>