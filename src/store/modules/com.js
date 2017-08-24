import * as types from '../types';

const state = {
  title: '',
  loading: 0,
  leftNavState: false,
  /*isBack: false,
  isShare: false,
  isFooter: false,*/
};
const actions = {
  comCof({ commit }, settings) {
    commit(types.COM_CONF, settings);
  },

};
const getters = {
  comCof: state => state,
  title: state => state.title,
};
const mutations = {
  [types.COM_CONF](state, settings) {
    state = Object.assign(state, settings);
  }
};

export default {
  state,
  actions,
  getters,
  mutations
}
