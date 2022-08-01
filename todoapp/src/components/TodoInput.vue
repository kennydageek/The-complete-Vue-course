<template>
  <div class="todo-input">
    <div class="todo-box">
      <div class="todo-icon">
        <img src="../assets/book-solid.svg" alt="" class="todo-icon__icon" />
      </div>
      <input type="text" class="todo-input__input" placeholder="New Todo" />
    </div>
    <div class="todo-button">
      <button>Add new task</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
};
</script>

<style scoped>
.todo-input {
  border: 2px solid #ccc;
  padding: 1rem;
  max-width: 50rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  /* background: red; */
}

.todo-box {
  display: flex;
  background: red;
  justify-content: center;
  margin-bottom: 1rem;
}

.todo-icon {
  width: 1rem;
  background-color: rgb(5, 84, 96);
  padding: 0.5rem;
}

.todo-icon__icon {
  width: 100%;
}

.todo-input__input {
  width: 100%;
  padding: 0 1rem;
}

.todo-input__input:focus {
  outline: 0;
}

button {
  width: 100%;
  padding: 0.5rem 0;
  color: white;
  background-color: rgb(5, 84, 96);
  border: 0;
  cursor: pointer;
}
</style>
