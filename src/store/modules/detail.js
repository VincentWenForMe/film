import api from '../api';
import * as types from '../types';

const state = {
  detail: {
    cover: {
      origin: ''
    }
  }
};
const actions = {
  getFilmDetail: ({ commit }, id) => {
    api.getFilmDetail(id, (res) => {
      commit(types.DETAIL_GET_INFO, res.data);
    });
  }
};
const getters = {
  getFilmDetail: state => state.detail,
};
const mutations = {
  [types.DETAIL_GET_INFO](state, res) {
    state.detail = res.film;
  }
};

export default {
  state,
  actions,
  getters,
  mutations
}
