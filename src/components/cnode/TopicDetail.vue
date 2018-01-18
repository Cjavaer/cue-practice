<template>
  <div class="cnode-topic-detail">
      <h1 class="topic-detail-title">{{ topic.title }}</h1>
      <div v-html="topic.content"></div>
  </div>
</template>
<script>
export default {
  name:'ui-cnode-topic-detail',
  props:{
      topic:{
          type:Object,
          required:true
      }
  },
  data(){
      return {
      }
  }
}
</script>
<style scoped>
.cnode-topic-detail{
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    padding: 24px;
    font:14px/1.5 "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    white-space:pre-wrap; 
}
.topic-detail-title{
    font-weight: 600;
    font-size: 20px;
}
</style>
