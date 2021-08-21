import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    matrix: []
  },
  mutations: {
    fillMatrixWithZero(state){

      for (let i = 0; i < 9; i++) {
          let arr = [];
  
          for (let j = 0; j < 9; j++) {
              arr.push(0);
          } 
          state.matrix.push(arr);       
      }

    }
  },
  actions: {
    fillMatrixWithZero(state){
      state.commit('fillMatrixWithZero')
    }
  },
  getters:{
    getMatrix(state){
      return state.matrix;
    }
  },
  modules: {},
});
