<template>
  <div class="stopwatch">
    {{ this.$store.getters.getTime }}
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {
    // eslint-disable-next-line no-unused-vars
    let checkStatus = setInterval(() => {
      if (this.$store.getters.getStatus == 1) {
        this.$store.commit("startTime");
        this.$store.commit("setStatus", 2);

      }
    }, 500);
  },
  methods: {},
  name: "StopWatch",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
