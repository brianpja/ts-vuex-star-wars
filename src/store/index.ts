import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import ItemModel from "@/models/item";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "Header Title from Store",
    list: Array<ItemModel>(),
    filteredList: Array<ItemModel>(),
    planets: [],
    showModal: false
  },
  getters: {
    favorites(state) {
      return state.list.filter(item => {
        return item.isFavorite;
      })
    }
  },
  mutations: {
    setList(state, list) {
      const transformedList: Array<ItemModel> = list.map((item: any) => {
        return new ItemModel(item.name, item.homeworld);
      })
      state.list = transformedList;
      state.filteredList = transformedList;
    },
    addItem(state, item: ItemModel) {
      state.list.push(item);
    },
    filterList(state, searchTerm: string) {
      if (searchTerm === "") {
        state.filteredList = state.list;
        return;
      }
      const filteredList: Array<ItemModel> = state.list.filter(item => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      state.filteredList = filteredList;
    },
    setPlanets(state, list) {
      state.planets = list.map((planet: any) => { return planet.name });
    },
    showModal(state) {
      state.showModal = true;
    },
    hideModal(state) {
      state.showModal = false;
    }
  },
  actions: {
    getList(context) {
      return axios
        .get("https://swapi.dev/api/people/")
        .then(response => {
          context.commit("setList", response.data.results);
        })
        .catch(() => {
          console.log("there has been an error");
        });
    },
    addItem(context, item) {
      context.commit("addItem", item);
    },
    getPlanets(context) {
      return axios
        .get("https://swapi.dev/api/planets/")
        .then(response => {
          context.commit("setPlanets", response.data.results);
        })
        .catch(() => {
          console.log("an error has occured while getting planets");
        })
    }
  },
  modules: {}
});
