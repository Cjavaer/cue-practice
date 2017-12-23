<template>
  <div class="ui-tab">
    <ul class="ui-tab-wrapper flex">
      <li class="ui-tab-item" :class="{'current-item':item.id == currentIndex ? true : false}" flex="1 row v-center h-center" :key="item.id" :id="item.id" @click="changeStatus" v-for="item in datamodel">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'ui-tab',
  props:{
    "datamodel":{
      type:Array,
      default:[{
        name:'按钮1',
        id:0
      },{
        name:'按钮2',
        id:1
      }]
    }
  },
  data(){
     return{
        currentIndex:0
     }
  },
  methods:{
      changeStatus(e){
          this.$emit('changeTab',e);
      }
  }
}
</script>
<style scoped>
.ui-tab{
  width:100%;
  height:100%;
}
.ui-tab-wrapper{
  height:100%;
  width: 100%;
}
.ui-tab-item{
  height:100%;
  text-align: center;
}
.current-item{
  background: #e8e8e8;
}
</style>


