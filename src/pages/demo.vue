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
  </div>
</template>
<script>
import todoItem from '@/components/demo/todoItem'
import lodash from 'lodash'
import { GitHubUserModel } from "@/model/model"

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
      question:'sdadas',
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
  beforeCreate(){
    // console.log(this.answer,'bc');
    // console.log(this.$el,'bc');
  },
  created(){
    // console.log(this.answer,'c');
    // console.log(this.$el,'c');
  },
  beforeMount(){
    // console.log(this.answer,'bm');
    // console.log(this.$el,'bm');
  },
  mounted(){
    // console.log(this.answer,'m');
    // console.log(this.$el,'m');
    console.log(this);
    this.show = false;
    this.apiUrl = this.testModel.url;
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
    }
  }
}
</script>
<style scoped>
input{
  border:1px solid #a5d6f8;
  margin: 10px 0;
}
</style>
