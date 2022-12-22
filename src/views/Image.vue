<template>
  <div class="container">
    <h1>{{ imageDetails.name }}</h1>

    <!-- 
    <router-link
      :to="{
        name: 'HomeBreed',
        params: {
          breed: imageDetails.breedId,
        }
      }">
      <b-button variant="primary">Back to Home</b-button>
    </router-link>
    -->

    <img :src="imageDetails.url" alt="" />
    <h2>Origin</h2>
    <p>{{ imageDetails.origin }}</p>

    <h2>Temperament</h2>
    <p>{{ imageDetails.temperament }}</p>

    <h2>Description</h2>
    <p>{{ imageDetails.description }}</p>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import ImageDataService from "@/services/ImageDataService";
import type Image from "@/types/Image";

export default defineComponent({
  name: "Image",
  props:['id'],
  data() {
    return {
      imageDetails: {} as Image,
    };
  }, 
  methods: {
    getImageDetails() {
      ImageDataService.getImageDetails(this.id)
        .then((response) => {
          this.imageDetails.id = response.data.id;
          this.imageDetails.url = response.data.url;
          this.imageDetails.breedId = response.data.breeds[0].id;
          this.imageDetails.name = response.data.breeds[0].name;
          this.imageDetails.origin = response.data.breeds[0].origin;
          this.imageDetails.temperament = response.data.breeds[0].temperament;
          this.imageDetails.description = response.data.breeds[0].description;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getImageDetails();
  }
});
</script>