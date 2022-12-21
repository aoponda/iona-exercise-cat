<template>
  <div class="text-center my-3">
    <div class="d-flex text-center">
      <HeaderLink to="/" exact>
        <h1>Cat Breed Browser</h1>
      </HeaderLink>
      <p>Presented by: ANLOponda</p>
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