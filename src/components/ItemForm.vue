<template>
  <div>
    <form>
      <input v-model="newItem.name" placeholder="Name" required />
      <input v-model="newItem.homeworld" placeholder="Homeworld" required />
      <button @click.prevent="submitItem">submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ItemModel from "@/models/item";

@Component
export default class ItemForm extends Vue {
  newItem: ItemModel;

  constructor() {
    super();
    this.newItem = new ItemModel();
  }

  submitItem(): void {
    this.$store.dispatch("addItem", this.newItem);
    this.newItem = new ItemModel();
  }
}
</script>

<style scoped>
input {
  margin: 12px;
}
</style>