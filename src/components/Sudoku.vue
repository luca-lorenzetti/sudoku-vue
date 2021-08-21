<template>
  <div class="sudoku">
    <table class="table">
      <tbody>
        <tr v-for="(row, indexRow) in 9" v-bind:key="indexRow" :class="[{'border_bottom' : (indexRow-2)%3 == 0},{'border_top' : indexRow == 0}]">
          <td :class="[{'border_right' : (indexCell-2)%3 == 0},{'border_left' : indexCell == 0}]" class="cell" v-for="(cell, indexCell) in matrix[row-1]" v-bind:key="indexCell"> <input type="text" id="inputNumber" name="inputNumber" maxlength="1" v-bind:value="cell" max="9" min="1"></td>
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

table{
  width: auto;
  text-align: center;
  margin: 20px auto;

.border_top{
  border-top: 2px solid #000;
}

.border_bottom{
  border-bottom: 2px solid #000;
}

.border_right{
  border-right: 2px solid #000;
}

.border_left{
  border-left: 2px solid #000;
}
  .cell{
    padding: 0;

    input{
      text-align: center;
      font-size: 30px;
      width: 70px;
      height: 70px;
    }
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
