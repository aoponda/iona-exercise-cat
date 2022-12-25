<template>
  <b-container fluid class="py-5 bg-dark text-light">
    <b-container class="py-3">
      <b-form-select v-model="selectedBreed">
        <b-form-select-option :value="null" selected disabled>
          Please select a breed
        </b-form-select-option>
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
          v-for="breedImage in loadMoreBreedImages"
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

      <p class="p-flat text-center py-5">
        <b-button
          v-if="imagesVisible < breedImages.length"
          @click="imagesVisible += increment"
          variant="primary"
          >Load more Images</b-button
        >
      </p>
    </b-container>
  </b-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router";
import BreedDataServices from "@/services/BreedDataService";
import ImageDataService from "@/services/ImageDataService";
import type Breed from "@/types/Breed";
import type Image from "@/types/Image";

export default defineComponent({
  name: "HomeComponent",
  data() {
    return {
      isBreed: true,
      breedList: [] as Breed[],
      breedImages: [] as Image[],
      displayedBreedImages: [] as Image[],
      selectedBreed: this.$route.query.breed
        ? String(this.$route.query.breed)
        : "",
      imagesVisible: 6,
      increment: 3,
    };
  },
  watch: {
    selectedBreed: function () {
      this.imagesVisible = 6;
      this.displayedBreedImages = [];
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
        .then(() => {
          if (this.selectedBreed != "") {
            this.checkBreedList();
          }
        })
        .catch((e: Error) => {
          console.log(`Home.vue > getBreeds() >>> ${e}`);
        });
    },
    getBreedImages() {
      ImageDataService.getBreedImages(this.selectedBreed)
        .then((response) => {
          this.breedImages = response.data;
          this.displayedBreedImages = this.breedImages.slice(
            0,
            this.imagesVisible
          );
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(`Home.vue > getBreedImages() >>> ${e}`);
        });
    },
    checkBreedList() {
      if (!this.breedList.find((index) => index.id == this.selectedBreed)) {
        router.push("404");
      } else {
        // Do nothing
      }
    },
  },
  computed: {
    loadMoreBreedImages() {
      return this.breedImages.slice(0, this.imagesVisible);
    },
  },
  mounted() {
    this.getBreeds();
    if (this.isBreed) {
      this.getBreedImages();
    }
  },
});
</script>
