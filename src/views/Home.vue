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
    <stop-watch v-if="status == 1"></stop-watch>
    <transition name="bounce">
      <sudoku v-if="status == 1" />
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import Sudoku from "@/components/Sudoku.vue";
import StopWatch from "@/components/StopWatch.vue";

export default {
  data() {
    return {
      status: null,
    };
  },
  mounted() {
    this.status = this.$store.getters.getStatus
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
    StopWatch,
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

.bounce-enter-active {
  animation: bounce-in 1.5s;
}
.bounce-leave-active {
  animation: bounce-in 1.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
