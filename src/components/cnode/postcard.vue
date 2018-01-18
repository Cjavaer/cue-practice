<template>
  <div class="cnode-postcard">
      <div class="postcard-one postcard-item">
          <p>公告</p>
          <p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
      </div>
      <div class="postcard-two postcard-item">
          <i icon="confirmtext"></i> 首页
      </div>
      <div class="postcard-three postcard-item">
        <p><i icon="confirmtext"></i> 个人信息</p>
        <p><i icon="profile"></i> jsamuel</p>
        <p><i icon="fly"></i> Cjavaer</p>
      </div>
  </div>
</template>
<script>
export default {
  name:'ui-cnode-postcard',
  data(){
      return{}
  }
}
</script>

<style scoped>
.cnode-postcard{
    box-sizing:border-box;
    width:280px;
    margin-left: 15px;
}
.postcard-item{
    margin-bottom: 14px;
    padding: 20px;
    background: #fff;
    border-radius: 4px;
    color: rgba(0, 0, 0, .65);
    font-size:14px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.1);
}
.postcard-item p{
    margin-bottom: 10px;
}
</style>


