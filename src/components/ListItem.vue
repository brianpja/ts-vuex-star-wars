<template>
  <div class="item-container">
    <span>
      {{ item.name }}
    </span>
    <span>
      {{ getPlanetName(item.homeworld) }}
    </span>
    <input type="checkbox" name="fav" :id="`${item.name}fav`" v-model="item.isFavorite" @click="onClick" />
    <label :for="`${item.name}fav`">Mark as favorite</label>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ItemModel from "@/models/item";

@Component
export default class ListItem extends Vue {
  @Prop() item!: ItemModel;
  planet: string;

  constructor() {
    super();
    this.planet = "";
  }

  getPlanetName(url: string) {
    if (!url.includes('http://')) return url;
    const trimmedUrl: string = url.slice(0, url.length - 1);
    const index: string = trimmedUrl.slice(trimmedUrl.lastIndexOf("/") + 1);
    const num: number = parseInt(index);
    return this.$store.state.planets[num - 1] || "sorry no planet";
  }

  onClick() {
    console.log("clicking", this.item);
  }
}
</script>

<style scoped>
span {
  margin: 0px 20px;
}
.item-container {
  margin: 8px 0px;
}
</style>
