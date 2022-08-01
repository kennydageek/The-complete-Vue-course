import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: ['Learn vue basics', 'Build an app'],
    newTodo: '',
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
