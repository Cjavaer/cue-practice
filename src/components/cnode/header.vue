<template>
  <div class="cnode-header">
      <div class="logo"><router-link to="/"><img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" title="logo" alt="logo"></router-link></div>
      <div class="nav right">
          <p class="topics">
              <router-link class="topics-tab" v-for=" (topic,index) in topics" :to="topic.link" :key="index"> 
                  {{topic.name}}
              </router-link>
          </p>
      </div>
  </div>
</template>
<script>
export default {
  name:'ui-cnode-header',
  data(){
      return{
          topics:[
              {
                  name:'首页',
                  link:'all',
                  id:0,
              },
              {
                  name:'精华',
                  link:'good',
                  id:1
              },
              {
                  name:'分享',
                  link:'share',
                  id:2
              },
              {
                  name:'问答',
                  link:'ask',
                  id:3
              },
              {
                  name:'招聘',
                  link:'job',
                  id:4
              },
              {
                  name:'测试',
                  link:'dev',
                  id:5
              }
          ]
      }
  }
}
</script>
<style scoped>
a{
 text-decoration-line: none;
}
.cnode-header{
    background: #444;
    width:100%;
    position: relative;
    top:0;
    z-index: 999;
    font-size:13px;
    padding: 5px;
    overflow: hidden;
}
.logo{
    width:120px;
    padding: 3px 20px;
    height: 34px;
    line-height: 34px;
    color:#ccc;
    font-weight: 700;
    float:left;
}
.nav.right{
    float: right;
    margin-right:0;
    height: 34px;
    line-height: 34px;
    padding: 3px 20px;
}
.nav .topics-tab{
    float: left;
    color:#fff;
    margin-left: 20px;
    cursor: pointer;
}
.nav .topics-tab:hover{
    color:#aaa;
}
</style>

