<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="showModal">Show Modal</button>
    <Modal v-if="this.$store.state.showModal" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Modal from "@/components/Modal.vue";

@Component({
  components: {
    Modal
  }
})
export default class About extends Vue {
  showModal() {
    console.log('show modal');
    this.$store.commit("showModal");
  }
}
</script>
