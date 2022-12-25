<template>
  <Ticker />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Ticker from "./components/TickerComponent.vue";

export default defineComponent({
  name: "CatBreedBrowser",
  components: {
    Ticker,
  },
});
</script>
