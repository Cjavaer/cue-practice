<template>
  <div class="page-demo">
    <c-head v-bind="header"></c-head>
    <div>demo</div>
  </div>
</template>
<script>
import Header from '@/components/common/header'

export default {
  name:'demo',
  components:{
    [Header.name]:Header
  },
  data(){
    return{
      header:{
        back:true,
        backText:'',
        title:'demo',
        handleText:'',
        returnHandle(){
          console.log('demo组件')
        },
        buttonHandle(){
          console.log('demo组件')
        }
      },
    }
  },
  methods:{
  }
}
</script>
