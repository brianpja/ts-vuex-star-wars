<template>
  <div class="item-container">
    <span>
      {{ item.name }}
    </span>
    <span>
      {{ getPlanetName(item.homeworld) }}
    </span>
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
    const trimmedUrl: string = url.slice(0, url.length - 1);
    const index: string = trimmedUrl.slice(trimmedUrl.lastIndexOf("/") + 1);
    const num: number = parseInt(index);
    return this.$store.state.planets[num - 1] || "sorry no planet";
  }

  // mounted() {
  //   console.log("item in list item", this.item);
  // }
}
</script>

<style scoped></style>
