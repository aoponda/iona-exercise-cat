<template>
  <div class="text-center my-3">
    <h1>Cat Breed Browser</h1>
    <div class="d-flex justify-content-center">
      <HeaderLink to="/" exact>Home</HeaderLink>
      <HeaderLink to="/breed">List</HeaderLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderLink from "./HeaderLink.vue";

export default defineComponent({
  components: { 
    HeaderLink 
  }
})
</script>