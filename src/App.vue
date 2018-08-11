<template>
  <div id="app">
    <v2x-map></v2x-map>
  </div>
</template>

<script>
  import V2xMap from './components/Map'
  export default {
    components: { V2xMap },
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
</style>
