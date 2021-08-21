<template>
  <div class="sudoku">
    <table class="table">
      <tbody>
        <tr v-for="(row, indexRow) in 9" v-bind:key="indexRow">
          <td class="cell" v-for="(cell, indexCell) in matrix[row-1]" v-bind:key="indexCell"> <input type="text" id="inputNumber" name="inputNumber" maxlength="1" v-bind:value="cell" max="9" min="1"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Sudoku",
  data:function(){
    return{
      matrix:[[0,0,0,0,0,0],[0,0,0,0,0]]
    }
  },
  created(){
    this.$store.commit('fillMatrixWithZero');
    this.matrix = this.$store.getters.getMatrix;
  },
  mounted(){
    console.log(this.matrix[0])
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

tr{
  max-width: 500px !important;
}
.cell{
  padding: 0;
    max-width: 80px !important;

  input{
    text-align: center;
    font-size: 30px;
    width: 80px;
    height: 80px;
  }
}


h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
