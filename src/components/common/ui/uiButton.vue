<template>
  <div class="ui-button">
    <div class="button-box" :size="size" :ft="fontsize" v-on="$listeners">
        <slot name="icon"></slot>
       {{text}}
    </div>
  </div>
</template>
<script>
export default {
  name:'ui-button',
  props:{
    text:{
      type:String,
      default:()=>{
        return '查询'
      }
    },
    size:{
      type:String,
      default:()=>{
        return 'small'
      }
    },
    fontsize:{
      type:Number,
      default:()=>{
        return 14;
      }
    }
  },
  data(){
    return {
    };
  },
  methods:{
  }
}
</script>
<style scoped>
.button-box{
  border-radius: 4px;
  height: 44px;
  color:#fff;
  text-align: center;
  line-height: 44px;
  background:#F7BA00;
  width: 100%;
  margin: 0 auto;
  /* background: #ff0910; */
}
.button-box:active{
  -webkit-filter: brightness(0.8);
  filter: brightness(0.8);
}
[size~="medium"]{
  height:50px;
  line-height:50px;
}
[size~="small"]{
  height:44px;
  line-height:44px;
}
[size~="mini"]{
  height:40px;
  line-height:40px;
}
</style>

