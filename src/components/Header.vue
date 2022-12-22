<template>

  <b-container fluid class="ticker">
    <b-row>
      <b-col cols="3" class="ticker-left">Cat Breed Browser</b-col>
      <b-col cols="6"></b-col>
      <b-col cols="3" class="ticker-right">Presented by: ANLOponda</b-col>
    </b-row>
  </b-container>

    <!-- <b-nav>
      <b-nav-item href="/">Cat Breed Browser</b-nav-item>
      <b-nav-text>Presented by: ANLOponda</b-nav-text>
    </b-nav> -->
  
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
