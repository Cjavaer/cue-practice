<template>
    <li class="todolist">
      <i icon="success" @click="todoComplete" v-if="complete"></i>
      <i icon="circle" @click="todoComplete" v-else></i>
      <span class="todoitem" :class="{completed:complete}">{{todo.item}}</span>
      <i icon="e_radio" v-if="complete"></i>
      <i icon="close" @click="deletTodoItem" v-else></i>
    </li>
</template>

<script>
export default {
  name:'demo-todo-item',
  props:['todo'],
  data(){
    return {
      complete:false
    }
  },
  computed:{
  },
  methods:{
    deletTodoItem(){
      this.$emit('todoItemCallback')
    },
    todoComplete(e){
      this.complete = !this.complete;
    }
  }
}
</script>
<style scoped>
.todolist{
  margin: 10px;
}
.todoitem{
  margin:10px;
  color:#f00;
}
.todoitem.completed{
  color:#999;
  text-decoration: line-through;
}
</style>


