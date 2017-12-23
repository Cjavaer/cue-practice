<template>
  <div class="index">
      <c-head v-bind="header"></c-head>
      <div class="inde-banner">
        <img src="https://pic.c-ctrip.com/carch/biz/oline/noiphonex.jpg" width="100%" alt="">
      </div>
      <div class="index-from">
        <div class="index-tab">
          <ui-tab :datamodel="tabData" @changeTab="changeParent" ref="uitab"></ui-tab>
        </div>
      </div>
  </div>
</template>

<script>
import Header from '@/components/common/header'
import Tab from '@/components/common/ui/uiTab'

export default {
  name: 'index',
  components:{
    [Header.name]:Header,
    [Tab.name]:Tab
  },
  data () {
    return {
      header:{
        back:false,
        backText:'',
        title:'携程海外接送机',
        handleText:'订单',
        returnHandle(){
          console.log('父组件')
        },
        buttonHandle(){
          console.log('父组件')
        }
      },
      tabData:[{
        name:'接机',
        id:0
      },{
        name:'送机',
        id:1
      }]
    }
  },
  methods:{
    changeParent(e){
      //原生DOM操作自定义属性的方法：1.获取属性getAttribute 2.移除属性removeAttribute 3.判断是否有属性hasAttribute
      var el = e.currentTarget,
          id = el.getAttribute('id');
      this.$refs.uitab.currentIndex = id;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  padding-top: 44px;
}
.index-from{
  position: relative;
  top:-30px;
  left: 0;
  background: #fff;
  margin: 15px;
  border-radius: 4px;
  box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);
  padding:0 15px;
  z-index:10;
}
.index-tab{
  height: 44px;
  width:100%;
}
</style>
