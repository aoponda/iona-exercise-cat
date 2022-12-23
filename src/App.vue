<template>
  <Ticker />
  <router-view />    
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Ticker from "./components/Ticker.vue";

export default defineComponent({
  name: "CatBreedBrowser",
  components: { 
    Ticker
  }
})
</script>
