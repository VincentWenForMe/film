import api from '../api';
import * as types from '../types';

const state = {
  comingSoonList: [],
  nowPlayingList: []
};

const actions = {
  getComingList: ({ commit }, page) => {
    api.getComingList(page, (res) => {
      commit(types.COMING_SOON_LIST, res.data);
      console.log(res.data);
    })
  },
  getNowPlayingList: ({ commit }, page) => {
    api.getNowPlayingList(page, (res) => {
      commit(types.NOW_PAYING_LIST, res.data);
      console.log(res.data);
    })
  }
};

const getters = {
  getComingList: state => state.comingSoonList,
  getNowPlayingList: state => state.nowPlayingList,
};

const mutations = {
  [types.COMING_SOON_LIST](state, res) {
    state.comingSoonList = res.films;
  },
  [types.NOW_PAYING_LIST](state, res) {
    state.nowPlayingList = res.films;
  }
};

export default {
  state,
  actions,
  getters,
  mutations
}
