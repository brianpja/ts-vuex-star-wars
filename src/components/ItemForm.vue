<template>
  <div>
    <form>
      <input v-model="name" placeholder="item.name" />
      <input v-model="homeworld" placeholder="item.homeworld" />
      <button>submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Item from "@/models/item";

@Component
export default class ItemForm extends Vue {
  item: Item;

  constructor() {
    super();
    this.item = {
      name: "",
      homeworld: ""
    }
  }
}
</script>

<style scoped>
input {
  margin: 12px;
}
</style>