import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Banana from '@/components/Banana';
import Blog from '@/components/Blog';
import Article from '@/components/Article';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/banana',
      name: 'Banana',
      component: Banana,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/blog/:id',
      name: 'Article',
      props: true,
      component: Article,
    },
  ],
});
