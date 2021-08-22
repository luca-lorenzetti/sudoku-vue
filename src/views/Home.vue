<template>
  <div class="home">
    <div class="logo p-5 bg-light border rounded">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <div v-if="status == 0" class="play_button mt-5">
      <button
        v-on:click="setStatus(1)"
        type="button"
        class="btn btn-dark pr-5 pl-5"
      >
        Let's play
      </button>
    </div>
    <sudoku v-if="status == 1" />
  </div>
</template>

<script>
// @ is an alias to /src
import Sudoku from "@/components/Sudoku.vue";

export default {
  data() {
    return {
      status: null,
    };
  },
  mounted() {
    this.status = 0;
  },
  methods: {
    setStatus(num) {
      this.status = num;
    },
  },
  props: {},
  name: "Home",
  metaInfo() {
    return {
      title: "Sudoku",
    };
  },
  components: {
    Sudoku,
  },
};
</script>

<style lang="scss">
.logo,
.play_button {
  text-align: center;
}
.play_button {
  > button {
    font-size: 50px;
  }
}
</style>
