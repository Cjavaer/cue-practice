<template>
  <transition
      name="custom-animation"
      enter-active-class="animated flipInX"
      leave-active-class="animated flipOutX"
      :duration="2500"
      >
    <div class="ui-base-layer" v-if="visiable">
      <slot></slot>
    </div>
  </transition>
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



