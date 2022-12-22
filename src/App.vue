<template>
  <Header />
  <router-view />    
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";

export default defineComponent({
  name: "CatBreedBrowser",
  components: { 
    Header
  }
})
</script>
