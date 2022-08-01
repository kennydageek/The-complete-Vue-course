import Vue from 'vue';
import VueRouter from 'vue-router';
import TodoView from '@/views/TodoView';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'todo',
    component: TodoView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
