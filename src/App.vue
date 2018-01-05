<template>
  <div id="app">
    <router-view/>
    <div class="modal-layer"></div>
  </div>
</template>

<script>
import 'normalize.css';
import 'reset-css/reset.css';
import '@/style/common.css';

export default {
  name: 'app',
  beforeCreate(){
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
