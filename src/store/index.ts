import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import ItemModel from "@/models/item";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "Header Title from Store",
    list: Array<ItemModel>()
  },
  mutations: {
    setList(state, list) {
      state.list = list;
    },
    addItem(state, item: ItemModel) {
      state.list.push(item);
    }
  },
  actions: {
    getList(context) {
      return axios
        .get("https://swapi.dev/api/people/")
        .then(response => {
          context.commit("setList", response.data.results);
        })
        .catch(error => {
          console.log("there has been an error", error);
        });
    },
    addItem(context, item) {
      context.commit("addItem", item);
    }
  },
  modules: {}
});
