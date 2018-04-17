import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
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
