<template>
  <div class="page-demo">
    <input type="text" v-model="question" placeholder="please enter you question words!" v-detect>
    <span class="answer">{{ answer }}</span>
    <p style="color:#0ff;text-align:center;margin:20px 0;">-------------------------demo分割线-------------------------</p>
    <input type="text" v-model="todoItem" placeholder="add todo" @keyup.enter="addTodo"/>
    <ul>
      <demo-todo-item
        v-for="(todo,index) in todoList"
        :key="index"
        :todo="todo"
        @todoItemCallback="deleteTodoItem(index)">
      </demo-todo-item>
    </ul>
    <p style="color:#0ff;text-align:center;margin:20px 0;">-------------------------demo分割线-------------------------</p>
    <div class="dynamic-fade-demo">
      IN: <input type="range" v-model="fadeInDuration" min="0" :max="maxFadeDuration">
      OUT: <input type="range" v-model="fadeOutDuration" min="0" :max="maxFadeDuration">
      <transition
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <p v-show="show" v-cloak>demo</p>
      </transition>
      <button @click="toggle">切换</button>
    </div>
    <div class="vuex-demo">
      <button @click="emitActionAsync">async</button>
      <button @click="emitMutationSync">sync</button>
      <p>A:{{ countA }}</p>
      <p>A:{{ injectA }}</p>
      <p>B:{{ countB }}</p>
      <p>B:{{ injectB }}</p>
    </div>
  </div>
</template>
<script>
import todoItem from '@/components/demo/todoItem'
import lodash from 'lodash'
import { GitHubUserModel } from "@/model/model"
import { mapState,mapMutations,mapActions } from 'vuex'
import { INCREMENT,INJECT } from '@/const'
// import { createNamespacedHelpers } from 'vuex' //命名空间辅助函数
// const { mapState,mapMutations,mapActions } = createNamespacedHelpers('testModuleA');

export default {
  name:'demo',
  components:{
    [todoItem.name]:todoItem
  },
  data(){
    return{
      todoList:[],
      nextId:0,
      todoItem:'',
      answer:'I cannot give you an answer until you ask a question!',
      question:'',
      testModel:new GitHubUserModel(),
      apiUrl:'',
      show:true,
      fadeInDuration:1000,
      fadeOutDuration:1000,
      maxFadeDuration:2000
    }
  },
  directives:{
    detect:{
      inserted(el){
      }
    }
  },
  watch:{
    question(newQuestion){
      this.answer = "Waiting for you to stop typing...";
      this.getAnswer();
    },
    fadeInDuration(newInDuration){
    },
    fadeOutDuration(newOutDuration){
    }
  },
  computed:{
    ...mapState('testModuleA',{
      countA:state => state.count,
      injectA:state => state.inject
    }),
    ...mapState('testModuleB',{
      countB:state => state.count,
      injectB:state => state.inject
    }),
  },
  beforeCreate(){
  },
  created(){
    this.apiUrl = this.testModel.url;
  },
  beforeMount(){
    // console.log(this.answer,'bm');
    // console.log(this.$el,'bm');
  },
  mounted(){
    // console.log(this.answer,'m');
    // console.log(this.$el,'m');
    console.log(this);
  },
  updated(){
    // console.log(this.$el,'u')
  },
  beforeUpdate(){
    // console.log(this.$el,'bu')
  },
  beforeDestroy(){
    // console.log(this,'bd')
  },
  destroyed(){
    // console.log(this,'d')
  },
  methods:{
    addTodo(){
      if(!this.todoItem){
        return;
      }
      this.todoList.push({
         item:this.todoItem,
         id:this.nextId++
      });
      this.todoItem="";
    },
    deleteTodoItem(index){
      this.todoList.splice(index,1);
      --this.nextId;
    },
    async getAnswer(){
      if(this.question.indexOf('?') === -1){
        this.answer = 'Questions usually contain a question mark. ;-)'
        return;
      }
      this.answer = 'Thinking...';
      try{
        this.testModel.url = this.apiUrl + this.question.slice(0,-1);
        let reponse = await this.testModel.fetch();
        this.answer = reponse.name || '查询不到该用户';
      }catch(e){
        this.answer =e.name;
      }

    },
    beforeEnter(el){
      console.log(el)
    },
    enter(el,done){
      console.log(el)
      done();
    },
    leave(el,done){
      console.log(el)
      done();
    },
    toggle(){
      this.show = !this.show;
    },
    emitActionAsync(){
      this.increment({count:40});
      
    },
    emitMutationSync(){
      // this.$store.commit(INCREMENT,{count:20});//正常书写
      // this.inject();//别名
      this.INJECT();//直接使用原名
    },
    // ...mapMutations({ //映射成别名
    //   'inject':INJECT
    // }),
    ...mapMutations('testModuleA',[//映射成原始名字
      INCREMENT,
      INJECT
    ]),
    // ...mapActions([ //映射成原始名字
    //    INCREMENT
    // ]),
    ...mapActions('testModuleA',{//映射成别名
      'increment':INCREMENT
    })
  }
}
</script>

<style scoped>
input{
  border:1px solid #a5d6f8;
  margin: 10px 0;
}
</style>
