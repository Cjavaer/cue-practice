<template>
    <li @click="$emit('deleteCallback')">
      {{todo.item}}
      <span style="margin-left:10px;color:#f00;">x</span>
    </li>
</template>

<script>
export default {
  name:'demo-todo-item',
  props:['todo'],
  computed:{
  },
  methods:{
  }
}
</script>


