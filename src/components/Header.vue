<template>
  <div class="header">
    <h1>{{ this.$store.state.title }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {

}
</script>

<style scoped>

</style>