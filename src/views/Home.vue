<template>
  <div class="home">
    <div class="logo p-5 bg-light border rounded">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <div v-if="this.$store.getters.getStatus == 0" class="play_button mt-5">
      <button
        v-on:click="setStatus(1)"
        type="button"
        class="btn btn-dark pr-5 pl-5"
      >
        Let's play
      </button>
    </div>
    <stop-watch v-if="this.$store.getters.getStatus >= 1"></stop-watch>
    <transition name="bounce">
      <sudoku v-if="this.$store.getters.getStatus > 0 && this.$store.getters.getStatus != 5" />
    </transition>

    <h2 v-if="this.$store.getters.getStatus == 5">Sudoku completato</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import Sudoku from "@/components/Sudoku.vue";
import StopWatch from "@/components/StopWatch.vue";

export default {
  data() {
    return {
     
    };
  },
  mounted() {
   
    
  },
  methods: {
    setStatus(num) {
      this.$store.commit("setStatus", num);
    },
  },

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
