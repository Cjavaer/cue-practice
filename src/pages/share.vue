<template>
    <div class="cnode-layout">
        <div class="cnode-layout-content flex">
            <div class="topics-wrapper" flex="1" v-if="!loading">
                <div class="topics-empty" v-if="emptyTopics">未查询到数据...</div>
                <div class="topic-item-ui" v-else>
                        <ui-cnode-topic-item v-for="(topics,index) in topicsCellect" :topics="topics" :key="index"></ui-cnode-topic-item>
                </div>
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
import { getTopics } from '@/model/cnodeModel'
import PostCard from '@/components/cnode/postcard'
import TopicsItem from '@/components/cnode/TopicItem'

export default {
  name:'share',
  components:{
      [PostCard.name]:PostCard,
      [TopicsItem.name]:TopicsItem
  },
  data(){
      return {
          model: new getTopics(),
          topicsCellect:[],
          emptyTopics:false,
          loading:true
      }
  },
  async mounted(){
      try{
        console.time('async');
        let response = await this.model.fetch({
            page:1,
            tab:'share',
            limit:20
            })
        console.timeEnd('async');
        console.log(response.data);
        this.topicsCellect = response.data;
        this.loading = false;
      }catch(e){
          console.log(e);
          this.topicsCellect = [];
          this.emptyTopics = true;
          this.loading = false;
      }
    
  }
}
</script>
<style scoped>
</style>


