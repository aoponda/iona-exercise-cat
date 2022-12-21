<template>
  <div class="container-main">
    <h1>Cat Browser (Home.vue)</h1>
    <a href="/cat-details">
      <button type="button" class="btn btn-success">Details</button>
    </a>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Thumbnail from "./Thumbnail.vue";

export default  defineComponent({
  name: "Home",
  components: {
    Thumbnail
  },
  setup() {
    return {};
  }
});
</script>