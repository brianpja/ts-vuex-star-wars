<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-if="!isLoading">
      <div>
        <div
          class="item-container"
          v-for="item of this.$store.state.list"
          :key="item.name"
        >
        <span>
          {{ item.name }}
        </span>
        <span>
          {{ item.homeworld }}
        </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";


@Component
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
        console.log("newstate", this.$store.state);
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
}

</style>