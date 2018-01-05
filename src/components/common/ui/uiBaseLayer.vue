<template>
  <div class="ui-base-layer" v-show="visiable">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:"ui-base-layer",
  data(){
    return {
      visiable:false,
      mount:true,
    }
  }
}
</script>
<style scoped>
.ui-base-layer{
  height: 100%;
  width: 100%;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
</style>



