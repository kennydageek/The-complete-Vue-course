<template>
  <div>
    <h1>TodoList</h1>

    <div class="btn-container">
      <button class="btn-all">All</button>
      <button class="btn-done">Done</button>
      <button class="btn-Todo">Todo</button>
    </div>

    <div class="todolist">
      <div class="todolist__item">
        <p>Learn Vue Basics</p>
        <div class="todo-icons">
          <input type="checkbox" name="" class="checkbox" />
          <p class="edit"><i class="fa-solid fa-pen"></i></p>
          <p class="delete"><i class="fa-solid fa-trash"></i></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
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

.todo-icons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background: red; */
  width: 5rem;
}

.checkbox {
  accent-color: rgb(82, 162, 82);
  height: 1.6rem;
  width: 1rem;
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
