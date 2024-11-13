import { createRouter, createWebHistory } from 'vue-router';
import HelloWord from '@view/HelloWorld.vue';
import About from '@view/About.vue';

const routes = [
  {
    path: '/',
    component: HelloWord,
  },
  {
    path: '/about',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
