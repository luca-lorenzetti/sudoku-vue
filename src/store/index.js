import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    matrix: [],
    time: {
      seconds: 0,
      minutes: 0,
      hours: 0,
      status: 0,
    },
  },
  mutations: {
    fillMatrixWithZero(state) {
      for (let i = 0; i < 9; i++) {
        let arr = [];

        for (let j = 0; j < 9; j++) {
          arr.push(0);
        }
        state.matrix.push(arr);
      }
    },

    setStatus(state, status) {
      state.time.status = status;
    },
    startTime(state) {
      let timer = setInterval(() => {
        if (state.time.status == 2) {
          state.time.seconds++;
          if (state.time.seconds == 60) {
            state.time.seconds = 0;
            state.time.minutes++;
          }
          if (state.time.minutes == 60) {
            state.time.minutes = 0;
            state.time.hours++;
          }
          if (state.status == 0) {
            clearInterval(timer);
          }
        }
      }, 1000);
    },
  },
  actions: {
    fillMatrixWithZero(state) {
      state.commit("fillMatrixWithZero");
    },

    startTime(state) {
      state.commit("startTime");
    },

    setStatus(state, status) {
      console.log("Setto status a" + status);
      state.commit("setStatus", status);
    },
  },
  getters: {
    getMatrix(state) {
      return state.matrix;
    },

    getTime(state) {
      return `${state.time.hours}:${state.time.minutes}:${state.time.seconds}`;
    },

    getStatus(state) {
      return state.time.status;
    },
  },
  modules: {},
});
