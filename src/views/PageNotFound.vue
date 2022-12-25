<template>
  <b-container fluid class="py-2 bg-dark text-light">
    <p class="p-flat not-found-number text-center">404</p>
    <p class="p-flat not-found-text text-center">Page not found</p>
    <b-img
      src="/src/assets/img/nyan-cat.gif"
      class="not-found-gif py-5"
      center
      rounded
    ></b-img>
    <p class="p-flat text-center">
      <router-link
        :to="{
          name: 'Home',
        }"
      >
        <b-button variant="primary">Back to Home</b-button>
      </router-link>
    </p>
  </b-container>
</template>
