<template>
  <b-container fluid class="py-4 bg-dark text-light">
    <h1 class="text-center">Cat Browser</h1>

    <b-container class="py-3">
      <b-form-select v-model="selectedBreed">
        <template #first>
          <b-form-select-option :value="null" disabled
            >Select a breed</b-form-select-option
          >
        </template>
        <b-form-select-option
          v-for="breedItem in breedList"
          :key="breedItem.id"
          :value="breedItem.id"
        >
          {{ breedItem.name }}
        </b-form-select-option>
      </b-form-select>
    </b-container>
    <b-container class="py-3" v-show="selectedBreed">
      <b-card-group columns>
        <b-card
          v-for="breedImage in breedImages"
          :key="breedImage.id"
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
                  id: breedImage.id,
                },
              }"
            >
              <b-button variant="primary">View Details</b-button>
            </router-link>
          </template>
        </b-card>
      </b-card-group>
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
  name: "HomeComponent",
  data() {
    return {
      breedList: [] as Breed[],
      breedImages: [] as Image[],
      selectedBreed: String(this.$route.query.breed),
    };
  },
  watch: {
    selectedBreed: function () {
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
  },
  mounted() {
    this.getBreeds();
    if (this.selectedBreed != undefined) {
      this.getBreedImages();
    }
  },
});
</script>
