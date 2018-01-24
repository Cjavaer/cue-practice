<template>
  <div class="contain">
      <keep-alive>
        <!-- 加上keep-alive后切换动态组件不会对动态组件进行完全切换，而是使用缓存机制。不会请求组件内接口和不会销毁组件 -->
        <component :is="currentView"></component>
      </keep-alive>
      <button @click="dynamic">DYNAMIC</button>
      <button @click="cdynamic">CDYNAMIC</button>
  </div>
</template>
<script>
import Dynamic from './dynamic'
import CDynamic from './cdynamic'
export default {
  name:'dynamic',
  components:{
      //[Dynamic.name]:Dynamic
  },
  data(){
      return{
          currentView:Dynamic
      }
  },
  methods:{
      dynamic(){
          this.currentView = Dynamic
      },
      cdynamic(){
          this.currentView = CDynamic
      }
  }
}
</script>

<style>
</style>
