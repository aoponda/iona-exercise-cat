<template>
  <b-container fluid class="py-4 bg-dark text-light">
    <h1 class="text-center">Cat Browser</h1>

    <b-container class="py-3">
      <b-form-select v-model="selectedBreed">
        <b-form-select-option selected disabled value="">
          Select Breed
        </b-form-select-option>
        <b-form-select-option 
          v-for="breedItem in breedList" 
          :value="breedItem.id">
          {{ breedItem.name }}
        </b-form-select-option>
      </b-form-select>
    </b-container>
    <b-container class="py-3" v-show="selectedBreed">
      <b-card-group columns>
        <b-card
          v-for="(breedImage, index) in breedImages"
          :key="index"
          :title="breedImage.name"
          :img-src="breedImage.url"
          :img-alt="breedImage.name"
          img-top
          no-body
        >
          <template #footer>
            <router-link
              :to="{
                name: 'Image',
                params: {
                  id: breedImage.id
                }
              }">
              <b-button variant="primary">View Details</b-button>
            </router-link>
          </template>
        </b-card>
      </b-card-group>
      <b-button @click="loadMore">Load More</b-button>
    </b-container>
  </b-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreedDataServices from "@/services/BreedDataService";
import ImageDataService from "@/services/ImageDataService";
import type Breed from "@/types/Breed";
import type Image from "@/types/Image";

export default defineComponent({
  name: "Home",
  data() {
    return {
      breedList: [] as Breed[],
      breedImages: [] as Image[],
      selectedBreed: "",
      length: 5,
    };
  }, 
  watch: {
    selectedBreed: function() {
      this.length = 5;
      this.getBreedImages();
    },
  },
  methods: {
    getBreeds() {
      BreedDataServices.getAll()
        .then((response) => {
          this.breedList = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    getBreedImages() {
      ImageDataService.getBreedImages(this.selectedBreed)
        .then((response) => {
          this.breedImages = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    loadMore() {
      if (this.length > this.breedImages.length) return;
      this.length = this.length + 5;
    }
  },
  computed: {
    breedImagesLoaded() {
      return this.breedImages.slice(0, this.length);
    }
  },
  mounted() {
    this.getBreeds();
  }
});
</script>
