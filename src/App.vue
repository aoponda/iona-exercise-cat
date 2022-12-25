<template>
  <HeaderComponent />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default defineComponent({
  name: "CatBreedBrowser",
  components: {
    HeaderComponent,
  },
});
</script>
