/* eslint-disable prettier/prettier */ /* eslint-disable prettier/prettier */
<template>
  <div class="sudoku">
    <table class="table">
      <tbody>
        <tr
          v-for="(row, indexRow) in 9"
          v-bind:key="indexRow"
          :class="[
            { border_bottom: (indexRow - 2) % 3 == 0 },
            { border_top: indexRow == 0 },
          ]"
        >
          <td
            :class="[
              { border_right: (indexCell - 2) % 3 == 0 },
              { border_left: indexCell == 0 },
            ]"
            class="cell"
            v-for="(cell, indexCell) in matrix[row - 1]"
            v-bind:key="indexCell"
          >
            <input
              type="text"
              pattern="[0-9.]"
              name="inputNumber"
              maxlength="1"
              v-model="matrix[indexRow][indexCell]"
              v-on:input="setValue(indexRow, indexCell)"
              max="9"
              min="1"
              :disabled="cell && !user[indexRow][indexCell]"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Sudoku",
  data() {
    return {
      matrix: [],
      user: [],
      value: null,
    };
  },
  created() {
    for (let x = 0; x < 9; x++) {
      let arr = [];

      for (let y = 0; y < 9; y++) {
        arr.push(false);
      }
      this.user.push(arr);
    }
    this.$store.commit("fillMatrixWithZero");

    this.matrix = this.$store.getters.getMatrix;

    this.matrix = this.genSudoku(this.matrix);
    this.matrix = this.removeNumbers(this.matrix);
  },
  mounted() {
    this.start = true;
  },

  methods: {
    // Function to generate random number
    getRandomNum(min, max) {
      return Math.floor(Math.random() * (max + min));
    },

    // Function oo check in vertical
    foundVertical(matrix, num, j) {
      for (let i = 0; i < 9; i++) {
        if (matrix[i][j] == num) {
          return true;
        }
      }

      return false;
    },

    // Function to reset a matrix row
    resetMatrixRow(array) {
      for (let i = 0; i < array.length; i++) {
        array[i] = 0;
      }
      return array;
    },

    // Function to check a square
    checkSquare(y, x, num, arrGen) {
      for (let i = y - (y % 3); i < y - (y % 3) + 3; i++) {
        for (let j = x - (x % 3); j < x - (x % 3) + 3; j++) {
          if (arrGen[i][j] == num) {
            return true;
          }
        }
      }

      return false;
    },

    // Main function to generate sudoku
    genSudoku(matrix) {
      let numTmp = 0,
        attempts = 0,
        j = 0,
        i = 0;

      while (i < matrix.length) {
        j = 0;
        attempts = 0;

        while (j < matrix[i].length) {
          if (attempts > 100) {
            matrix[i] = this.resetMatrixRow(matrix[i]);
            i--;
            break;
          }
          numTmp = this.getRandomNum(1, 9);
          if (
            !this.foundVertical(matrix, numTmp, j) &&
            !this.checkSquare(i, j, numTmp, matrix) &&
            !matrix[i].includes(numTmp)
          ) {
            matrix[i][j] = numTmp;
            j++;
          } else {
            attempts++;
          }
        }
        i++;
      }

      return matrix;
    },

    removeNumbers(matrix) {
      let numbers = 0;
      let x = 0,
        y = 0;

      while (numbers < 51) {
        x = this.getRandomNum(0, 9);
        y = this.getRandomNum(0, 9);

        if (this.matrix[x][y]) {
          this.matrix[x][y] = null;
          numbers++;
        }
      }

      return matrix;
    },

    setValue(x, y) {
      if (!isNaN(this.matrix[x][y])) {
        if (this.matrix[x][y] > 0) {
          this.value = parseInt(this.matrix[x][y]);
          this.matrix[x][y] = null;
          if (
            !this.foundVertical(this.matrix, this.value, y) &&
            !this.checkSquare(x, y, this.value, this.matrix) &&
            !this.matrix[x].includes(this.value)
          ) {
            this.matrix[x][y] = this.value;
            this.user[x][y] = true;
          } else {
            this.value = null;
          }
        } else {
          this.matrix[x][y] = null;
        }
      } else {
        this.matrix[x][y] = null;
      }
      this.value = null;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
table {
  width: auto;
  text-align: center;
  margin: 20px auto;

  .border_top {
    border-top: 2px solid #000;
  }

  .border_bottom {
    border-bottom: 2px solid #000;
  }

  .border_right {
    border-right: 2px solid #000;
  }

  .border_left {
    border-left: 2px solid #000;
  }
  .cell {
    padding: 0;

    input {
      text-align: center;
      font-size: 30px;
      width: 70px;
      height: 70px;
    }

    input:disabled {
      background-color: rgb(224, 224, 224);
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
