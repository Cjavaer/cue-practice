<template>
  <div class="header flex">
    <span class="header-back" @click="returnHandle">
      <span  v-if="back">
        <em v-if="isTextRight">{{backText}}</em>
        <i icon="close" v-else></i>
      </span>
    </span>
    <span class="header-title" flex="1">{{title}}</span>
    <span class="header-handle" @click="buttonHandle">{{handleText}}</span>
  </div>
</template>

<script>
export default {
  name:'c-head',
  props:{
    "back":{
      type:Boolean,
      default:true
    },
    "title":{
      type:String,
      default:'头部'
    },
    "backText":{
      type:String,
      default:'返回'
    },
    "handleText":{
      type:String,
      default:''
    },
    "returnHandle":{
      type:Function,
      default(){
        console.log('dasda')
      }
    },
    "buttonHandle":{
      type:Function,
      default(){
        console.log('dasda')
      }
    }
  },
  data(){
    return {
        isTextRight:!!this.leftText
    }
  },
  methods:{
  }
}
</script>
<style scoped>
.header{
  position: fixed;
  left: 0;
  top: 0;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 1px 1px 1px #ccc;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  box-sizing: border-box;
}
.header-back,.header-handle{
  width: 60px;
}
</style>

