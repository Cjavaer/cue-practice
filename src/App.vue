<template>
  <div id="app-template">
    <div class="header">
          <ui-cnode-header></ui-cnode-header>   
    </div>
    <router-view/>
  </div>
</template>

<script>
import 'normalize.css';
import 'reset-css/reset.css';
import 'animate.css'
import '@/style/common.css';
import Header from '@/components/cnode/header'
export default {
  name: 'app',
  components:{
    [Header.name]:Header
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
