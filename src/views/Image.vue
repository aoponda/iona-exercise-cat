<template>
  <b-container fluid class="py-4 bg-dark text-light">
    <h1 class="text-center">{{ imageDetails.name }}</h1>

    <b-container class="py-3">
      <b-img
        :src="imageDetails.url"
        fluid-grow
        :alt="imageDetails.name"
      ></b-img>
    </b-container>

    <b-container class="py-3">
      <p>{{ imageDetails.description }}</p>
      <h2>Country of Origin</h2>
      <p>{{ imageDetails.origin }}</p>
      <h2>Temperament</h2>
      <p>{{ imageDetails.temperament }}</p>
    </b-container>

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
    
  </b-container>
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
