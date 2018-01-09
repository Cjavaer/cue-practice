<template>
  <div class="page-index">
      <c-head v-bind="header"></c-head>
      <div class="inde-banner">
        <img src="https://pic.c-ctrip.com/carch/biz/oline/noiphonex.jpg" width="100%" alt="">
      </div>
      <div class="index-from">
        <div class="index-tab">
          <ui-tab :datamodel="tabData" @ui-tab-callback="uiTabCallback" ref="uitab"></ui-tab>
        </div>
        <div class="index-pick-aiport index-query-box" v-if=" tabIndex == 0">
            <div class="flightno-box" brd="row">
              <p class="form-label">航班号</p>
              <p><input type="text" v-model="pickUoFlightNo" placeholder="请选择航班号" class="pick-flightno" readonly></p>
            </div>
            <div class="address-box" brd="row">
              <p class="form-label">送达地</p>
              <p><input type="text" v-model="pickUpAddress" placeholder="请选择送达地址" class="pick-address" readonly></p>
            </div>
            <ui-button v-bind="button" @click="validate"></ui-button>
        </div>
        <div class="index-drop-airport index-query-box" v-else>
            <div class="flightno-box" brd="row">
              <p class="form-label">日期</p>
              <p><input type="text" value="" placeholder="请选择用车时间" class="pick-flightno" readonly></p>
            </div>
            <div class="address-box" brd="row">
              <p class="form-label">出发地</p>
              <p><input type="text" value="" placeholder="请选择出发地址" class="pick-address" readonly></p>
            </div>
            <div class="address-box" brd="row">
              <p class="form-label">送达地</p>
              <p><input type="text" value="" placeholder="请选择送达地址" class="pick-address" readonly></p>
            </div>
          <ui-button v-bind="button" @click="validate"></ui-button>
        </div>
      </div>
  </div>
</template>

<script>
import Header from '@/components/common/header'
import Tab from '@/components/common/ui/uiTab'
import Button from '@/components/common/ui/uiButton'

export default {
  name: 'index',
  components:{
    [Header.name]:Header,
    [Tab.name]:Tab,
    [Button.name]:Button
  },
  data () {
    return {
      header:{
        back:false,
        backText:'',
        title:'携程海外接送机',
        handleText:'订单',
        returnHandle(){
          console.log('index父组件')
        },
        buttonHandle(){
          console.log('index父组件')
        }
      },
      button:{
        size:"mini"
      },
      tabData:[{
        name:'接机',
        id:0
      },{
        name:'送机',
        id:1
      }],
      tabIndex:0,
      self:this,
      pickUoFlightNo:'',
      pickUpAddress:'',
    }
  },
  mounted(){
  },
  methods:{
    uiTabCallback(data){
        this.tabIndex = data.id;
    },
    validate(){
      if(this.tabIndex == 0){
        if(!this.pickUoFlightNo){
          this.$showToast('请选择航班号');
          return false;
        }
        if(!this.pickUpAddress){
          this.$showToast('请选择送达地址');
          return false;
        }
      }else{

      }
      return true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inde-banner{
  min-height: 100px;
  background-color: #cbcece
}
.index-from{
  position: relative;
  top:-30px;
  left: 0;
  background: #fff;
  margin: 15px;
  border-radius: 4px;
  box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);
  z-index:10;
}
.index-tab{
  height: 44px;
  width:100%;
}
.index-query-box{
  padding: 10px 15px;
}
.flightno-box,.address-box{
  margin: 10px 0;
}
.form-label{
  font-size:12px;
  color:#969ea0;
}
</style>
