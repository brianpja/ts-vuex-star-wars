<template>
  <div>
    <h3>This is the Favorites list</h3>
    <div>{{ this.items }}</div>
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
    this.items = this.$store.getters.favorites;
  }
}
</script>

<style scoped>

</style>