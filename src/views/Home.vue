<template>
  <div class="home">
    <div class="logo p-5 bg-light border rounded">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  data () {
    return {
    }
  },
  props: {
  },
  name: "Home",
  metaInfo() {
        return { 
          title: "Sudoku",
        }
    },
  components: {
  
  },
};
</script>

<style lang="scss">
.logo{
  text-align: center;
}
</style>