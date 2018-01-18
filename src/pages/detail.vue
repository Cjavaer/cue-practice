<template>
  <div class="cnode-layout">
        <div class="cnode-layout-content flex">
            <div class="topic-wrapper" flex="1" v-if="!loading">
                <ui-cnode-topic-detail :topic = "topic"></ui-cnode-topic-detail>
            </div>
            <div flex="1" v-else>
                <div class="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="post-card-wrapper">
                <ui-cnode-postcard></ui-cnode-postcard>
            </div>
        </div>
    </div>
</template>
<script>
import { getTopic } from '@/model/cnodeModel'
import PostCard from '@/components/cnode/postcard'
import TopicDetail from '@/components/cnode/TopicDetail'

export default {
  name:'detail',
  components:{
      [PostCard.name]:PostCard,
      [TopicDetail.name]:TopicDetail
  },
  data(){
      return {
          model: new getTopic(),
          loading:true,
          topic:{}
      }
  },
  async mounted(){
      this.path = this.$route.path;
      this.model.url  = this.model.url + this.path;
      try{
          let topic = await this.model.fetch();
          this.topic = topic.data;
          this.loading = false;
          console.log(this.topic)
      }catch(e){
          this.loading = false;
          console.log(e);
      }
  }
}
</script>
