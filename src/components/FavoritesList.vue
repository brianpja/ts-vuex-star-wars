<template>
  <div>
    <h3>This is the Favorites list</h3>
    <div v-for="item of myFavorites" :key="item.name" class="item-wrapper">
      <span>{{ item.name }}</span>
      <button @click="removeFav(item)">X</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ItemModel from "@/models/item";

@Component
export default class FavoritesList extends Vue {
  items: Array<ItemModel>;

  constructor() {
    super();
    // this.items can be used in-place of myFavorites if you want
    this.items = this.$store.getters.favorites;
  }

  removeFav(item: ItemModel) {
    item.isFavorite = false;
    this.items = this.$store.getters.favorites;
  }

  // this method is an in-class getter instead of the getter in the store
  get myFavorites(): Array<ItemModel> {
    return this.$store.state.list.filter((item: ItemModel) => {
      return item.isFavorite;
    });
  }
}
</script>

<style scoped>
span {
  color: green;
  font-size: 24px;
  font-weight: 700;
  margin-right: 12px;
}

button {
  color: green;
  background-color: white;
  border: solid 2px green;
  font-weight: 700;
  border-radius: 3px;
}

.item-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
}
</style>