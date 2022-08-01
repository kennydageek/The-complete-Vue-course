<template>
  <div class="home">
    <TodoInput />
    <TodoList />
  </div>
</template>

<script>
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';

export default {
  name: 'TodoView',
  components: {
    TodoInput,
    TodoList,
  },
};
</script>
