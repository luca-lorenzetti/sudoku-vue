<template>
  <div id="app" class="container">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
$font_path: '~@/assets/font/';

// REGULAR
@font-face{
  font-family: "Sudoku";
  src: local("Sudoku"),
   url($font_path +'Sudoku.ttf') format("truetype");
}

body{
  > *{
    font-family: "Sudoku";
  }
}
#app{
  width: 100%;
}
</style>
