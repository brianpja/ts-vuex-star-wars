<template>
  <div class="home">
    <Header />
    <Search />
    <List />
    <ItemForm />
    <!-- <HelloWorld msg="This is a hello world message" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header";
import List from "@/components/List";
import ItemForm from "@/components/ItemForm";
import Search from "@/components/Search";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    Header,
    List,
    ItemForm,
    Search
  }
};
</script>
