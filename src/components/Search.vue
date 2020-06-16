<template>
  <input v-model="searchTerm" @input="onChange" placeholder="search by name" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Search extends Vue {
  searchTerm: string;

  constructor() {
    super();
    this.searchTerm = "";
  }

  onChange() {
    console.log("on input change")
    this.$store.commit("filterList", this.searchTerm);
  }
}
</script>