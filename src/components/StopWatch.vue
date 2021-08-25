<template>
  <div class="stopwatch">
    {{ this.$store.getters.getTime }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      startStopWatch: false
    };
  },

  mounted() {
    // eslint-disable-next-line no-unused-vars
    let checkStatus = setInterval(() => {
      if (this.$store.getters.getStatus == 2 && !this.startStopWatch) {
      console.log("Avvio");
        
        this.$store.commit("startTime");
        this.startStopWatch = true;
      }
    }, 1000);
  },
  methods: {},
  name: "StopWatch",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
