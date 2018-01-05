<template>
  <div class="ui-flight">
    <c-header></c-header>
    <div class="layer-flight-search"></div>
  </div>
</template>
<script>
import Header from '@/components/common/header'
export default {
  components:{
    [Header.name]:Header
  },
  name:'ui-flight',
  data(){
    return{};
  }
}
</script>

