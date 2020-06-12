import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "Header Title from Store",
    list: []
  },
  mutations: {
    setList(state, list) {
      state.list = list;
    }
  },
  actions: {
    getList(context) {
      console.log('context', context)

      return axios.get('https://swapi.dev/api/people/')
        .then((response) => {
          console.log('response', response)
          context.commit('setList', response.data.results);
        })
        .catch((error) => {
          console.log('there has been an error');
        })
    }
  },
  modules: {}
});
