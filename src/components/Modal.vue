<template>
  <div>
    <div class="overlay" @click="overlayClick">
      <div class="modal">
        <h1>This is My Modal</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Modal extends Vue {
  overlayClick(event: MouseEvent) {
    if (event.target === this.$el.querySelector(".overlay")) {
      this.$store.commit("hideModal");
    }
  }
}
</script>

<style scoped>
.overlay {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  z-index: 1000;
  height: 120px;
  width: 200px;
  border: solid 1px black;
  background-color: white;
}
</style>