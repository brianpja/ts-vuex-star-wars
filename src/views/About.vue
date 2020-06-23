<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="showModal">Show Modal</button>
    <Modal v-if="this.$store.state.showModal" />
    <custom-datepicker 
      @dateSelected  = "setDate($event)"
      :date          = "selectedDate" 
      :primaryColor  = "primaryColor"
      :wrapperStyles = "wrapperStyles"
      :limits        = "limits"
    />
    <h2>{{ selectedDate }}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Modal from "@/components/Modal.vue";
import CustomDatepicker from "vue-custom-datepicker";
import moment from "moment";

@Component({
  components: {
    Modal,
    "custom-datepicker": CustomDatepicker
  }
})
export default class About extends Vue {
  selectedDate = moment().format('YYYY-MM-DD');
  wrapperStyles = { width: '325px' };
  primaryColor = "#0918bc";
  limits = {
    start: '2017-04-02',
    end: '2017-05-22'
  };
  showModal() {
    this.$store.commit("showModal");
  }

  setDate(date: Date) {
    this.selectedDate = date;
  }
}
</script>
