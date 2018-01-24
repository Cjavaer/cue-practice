<template>
  <div>Dynamic</div>
</template>

<script>
import { getTopics } from '@/model/cnodeModel'
export default {
  name:'dynamic-view',
  data(){
      return {
          model: new getTopics()
      }
  },
  async created(){
      try{
        let response = await this.model.fetch({
            page:1,
            tab:'all',
            limit:20
        })
        console.log(response);
      }catch(e){
          console.log(e);
      }
  }
}
</script>

