<template>
  <div class="cnode-topics-item">
      <div class="topics-item-wrapper">
        <div class="user-info">
            <span class="user-avatar">
                <img :src="topics.author.avatar_url" alt="logo" height="100%" width="100%">
            </span>
            <span class="user-name">{{topics.author.loginname}}</span>
        </div>
        <router-link class="topic-title" :to="topics.id"> 
            <h1>{{topics.title}}</h1>
        </router-link>
        <p class="line-break"></p>
        <div class="topic-simple-intro">
            原文地址：知乎专栏 https://zhuanlan.zhihu.com/p/31640541 给大家介绍下，Egg 2.0 正式版，今天 12.3 冒泡啦，距 3.21 的 Egg 1.0 版本 时隔 8 个月。 Egg 是阿里 Node.js 的核心基础框架，面向『企业级的 Web 基础框架』这个领域，提供了「微内核 + 插件机制 + 框架定制能力」，完美达成生态共建和差异化定制的平
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name:'ui-cnode-topic-item',
  props:{
      topics:{
          type:Object,
          required:true
      }
  },
  data(){
      return {
      }
  },
  filters:{

  }
}
</script>
<style scoped>
.topics-item-wrapper{
    box-shadow: 0 1px 4px rgba(0, 0, 0, .1);
    margin-bottom: 14px;
    border-radius: 4px;
    background: #fff;
    padding: 24px;
    line-height: 1.5;
}
.user-avatar{
    border-radius: 50%;
    width:30px;
    height: 30px;
    display: inline-block;
    border:1px solid #ddd;
}
.user-avatar img{
    border-radius: 100%;
}
.topic-title{
    font-weight: 700;
    font-size: 20px;
    color:rgba(0,0,0,.65);
    width:80%;
    text-decoration-line: none;
}
@keyframes scaleAnimate{
    0%{
        transform: translateX(10%);
    }
    100%{
        transform: translateX(0);
    }
}
.topic-title:hover h1{
    animation: scaleAnimate .3s ease;
}
.topic-title h1{
    width:100%;
    overflow: hidden;
    text-overflow: ellipsis;
}
.line-break{
    height: 1px;
    width:100%;
    background: #000;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    margin:10px 0;
}
.topic-simple-intro{
    width: 90%;
    font-size: 14px;
    color:rgba(0, 0, 0, .65)
}
</style>
