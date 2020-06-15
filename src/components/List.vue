<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-if="!isLoading">
      <div>
        <div v-for="item of this.$store.state.list" :key="item.name">
          <ListItem :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ListItem from "./ListItem.vue";

@Component({ components: { ListItem } })
export default class List extends Vue {
  private isLoading: boolean;

  constructor() {
    super();
    this.isLoading = false;
  }
  
  mounted() {
    this.isLoading = true;
    this.$store.dispatch("getList")
      .then(() => {
        this.isLoading = false;
      })
      .catch((error) => {
        console.log(error);
        this.isLoading = false;
      })
  }
}
</script>

<style scoped>
.item-container {
  display: flex;
  justify-content: space-around;
  color: green;
}
</style>
