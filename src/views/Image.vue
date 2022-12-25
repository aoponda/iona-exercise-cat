<template>
  <b-container fluid class="py-5 bg-dark text-light" v-show="imageDetails.id">
    <b-container>
      <b-row align-v="center">
        <b-col>
          <h1 class="text-start">{{ imageDetails.name }}</h1>
        </b-col>
        <b-col>
          <p class="p-flat text-end">
            <a :href="`/?breed=${imageDetails.breedId}`">
              <b-button variant="primary">Back to Home</b-button>
            </a>
          </p>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="py-4">
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
      <a :href="`/?breed=${imageDetails.breedId}`">
        <b-button variant="primary">Back to Home</b-button>
      </a>
    </b-container>
  </b-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router";
import ImageDataService from "@/services/ImageDataService";
import type Image from "@/types/Image";
export default defineComponent({
  name: "ImageComponent",
  props: ["id"],
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
          router.push({ name: "404" });
          console.log(`Image.vue > getImageDetails() >>> ${e}`);
        });
    },
  },
  mounted() {
    this.getImageDetails();
  },
});
</script>
