<template>
  <div class="page-demo">
    <input type="text" v-model="todoItem" placeholder="add todo" @keyup.enter="addTodo"/>
    <ul>
      <demo-todo-item 
        v-for="(todo,index) in todoList" 
        :key="index" 
        :todo="todo"
        @deleteCallback="deleteTodoItem(index)">
      </demo-todo-item>
    </ul>
  </div>
</template>
<script>
import todoItem from '@/components/demo/todoItem'

export default {
  name:'demo',
  components:{
    [todoItem.name]:todoItem
  },
  data(){
    return{
      todoList:[],
      nextId:0,
      todoItem:''
    }
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
      debugger;
      this.todoList.splice(index,1);
      --this.nextId
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
