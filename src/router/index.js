import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/home.vue';
import Detail from '../pages/detail.vue';
import Film from '../pages/film.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/film/:type',
      name: 'film',
      component: Film
    }
  ]
})
