<template>
  <div>CDynamic</div>
</template>

<script>
import { getTopics } from '@/model/cnodeModel'
export default {
  name:'cdynamic-view',
  data(){
      return {
          model: new getTopics()
      }
  },
  async created(){
     try{
        let response = await this.model.fetch({
            page:1,
            tab:'ask',
            limit:20
        })
        console.log(response);
      }catch(e){
          console.log(e);
      }
  }
}
</script>

