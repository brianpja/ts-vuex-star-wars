<template>
  <div class="item-container">
    <span>
      {{ item.name }}
    </span>
    <span>
      {{ item.homeworld }}
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ItemModel from "@/models/item";

@Component
export default class ListItem extends Vue {
  @Prop() item!: ItemModel | undefined;

  mounted() {
    console.log("item in list item", this.item);
  }
}
</script>

<style scoped></style>
