<template>
  <div class="page-demo">
    <input type="text" v-model="question" placeholder="please enter you question words!">
    <span class="answer">{{ answer }}</span>
    <input type="text" v-model="todoItem" placeholder="add todo" @keyup.enter="addTodo"/>
    <ul>
      <demo-todo-item
        v-for="(todo,index) in todoList"
        :key="index"
        :todo="todo"
        @todoItemCallback="deleteTodoItem(index)">
      </demo-todo-item>
    </ul>
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
      question:'',
      testModel:new GitHubUserModel(),
      apiUrl:''
    }
  },
  watch:{
    question(newQuestion){
      this.answer = "Waiting for you to stop typing...";
      this.getAnswer();
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
