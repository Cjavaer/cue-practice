<template>
  <div class="ui-tab">
    <ul class="ui-tab-wrapper flex">
      <li
        class="ui-tab-item"
        :class="{'current-item': item.id == currentIndex }"
        flex="1 row v-center h-center"
        :key="item.id"
        :id="item.id"
        @click="onChange"
        v-for="item in tabData">
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
        name:'按钮',
        id:0
      },{
        name:'按钮',
        id:1
      }]
    }
  },
  inheritAttrs:false,
  data(){
     return{
        currentIndex: 0,
        tabData: this.datamodel
     }
  },
  watch:{},
  methods:{
      onChange(e){
        //原生DOM操作自定义属性的方法：1.获取属性getAttribute 2.移除属性removeAttribute 3.判断是否有属性hasAttribute
        var el = e.currentTarget,
            id = el.getAttribute('id'),
            data;
        data = this.tabData[id];
        this.currentIndex = id;
        this.$emit('ui-tab-callback',data);
      },
      getIndex(){
        return this.currentIndex;
      },
      setIndex(index){
        this.currentIndex = index;
      }
  }
}
</script>
<style scoped>
.ui-tab{
  width:100%;
  height:100%;
  max-width: 100%;
  max-height: 44px;
}
.ui-tab-wrapper{
  height:100%;
  width: 100%;
  background: #d0d0d0;
  color: #fff;
  border-radius: 4px 4px 0 0;
}
.ui-tab-item{
  height:100%;
  text-align: center;
  border-radius: 4px 4px 0 0;
}
.current-item{
  background: #fff;
  color: #000;
}
</style>


