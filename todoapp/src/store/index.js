import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      // { id: 1, todo: 'Arrange my bag', done: true },
      // { id: 2, todo: 'All is well', done: false },
      // { id: 3, todo: 'learn vuex', done: false },
      // { id: 4, todo: 'build a todo app', done: false },
    ],
    newTodo: '',
  },
  getters: {},
  mutations: {
    ADD_TODO(state) {
      state.todos.push({
        id: state.todos.length + 1,
        todo: state.newTodo,
        done: false,
      });

      state.newTodo = '';
    },

    DELETE_TODO: (state, id) => {
      state.todos = state.todos.filter((todo) => {
        return todo.id != id;
      });
      return state.todos;
    },

    EDIT_TODO: (state, id) => {
      state.newTodo = state.todos[id - 1].todo;
      console.log(state.newTodo);
      console.log(id);
      // console.log(state), console.log(id);
    },
  },
  actions: {
    addTodo({ commit }) {
      commit('ADD_TODO');
    },
    deleteTodo({ commit }, id) {
      commit('DELETE_TODO', id);
    },
    editTodo({ commit }, id) {
      commit('EDIT_TODO', id);
    },
  },
});
