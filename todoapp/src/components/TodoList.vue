<template>
  <div>
    <h1>TodoList</h1>

    <div class="todolist" v-for="todo in todos" :key="todo.id">
      <div class="todolist__item">
        <p class="todotext">{{ todo.todo }}</p>
        <div class="todo-icons">
          <input type="checkbox" name="" class="checkbox" />
          <!-- <p class="edit" @click="editTodo(todo.id)">
            <i class="fa-solid fa-pen"></i>
          </p> -->
          <p class="delete" @click="deleteTodo(todo.id)">
            <i class="fa-solid fa-trash"></i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'TodoList',
  computed: mapState(['todos']),

  methods: {
    deleteTodo(id) {
      this.$store.dispatch('deleteTodo', id);
    },
    editTodo(id) {
      this.$store.dispatch('editTodo', id);
    },
  },
};
</script>

<style scoped>
.btn-container {
  display: flex;
  justify-content: space-between;
  max-width: 50rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
button {
  border: 0;
  background-color: rgb(5, 84, 96);
  padding: 0.5rem 0;
  width: 30%;
  color: white;
  cursor: pointer;
}

.todolist {
  border: 2px solid #ccc;
  margin-top: 2rem;
  padding: 0 2rem;
  max-width: 49rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.todolist__item {
  display: flex;
  justify-content: space-between;
  /* border: 2px solid red; */
}

/* .todotext {
  text-decoration: line-through;
} */

.todo-icons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background: red; */
  width: 4rem;
}

.checkbox {
  accent-color: rgb(82, 162, 82);
  height: 1.6rem;
  width: 1rem;
}

.checked {
  text-decoration: underline;
}

.edit {
  color: rgb(195, 195, 66);
  cursor: pointer;
}

.delete {
  color: rgb(193, 13, 13);
  cursor: pointer;
}
</style>
