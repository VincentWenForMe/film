import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home';
import com from './modules/com';
import detail from './modules/detail';
import film from './modules/film';
import cinema from './modules/cinema';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    home,
    com,
    detail,
    film,
    cinema
  },
  strict: process.env.NODE_ENV !== 'production'
});

export default store;
