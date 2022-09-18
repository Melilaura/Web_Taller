<script>
import { mapStores } from "pinia";
import { useWinesStore } from "../stores/wines.js";

export default {
  data() {
    return {};
  },

  computed: {
    ...mapStores(useWinesStore),
    allWines() {
      return this.WinesStore.getWines;
    },
  },

  mounted() {
    this.WinesStore.loadWines();
    console.log(this.WinesStore.loadWines);
  },
};
</script>

<template>
    <div class="top">
        <h2 class="top__title"> See the wine</h2>
    </div>

    <div>
        <RouterLink 
        v-for="wine in allWines"
        :key="wine.id"
        :to="'/details/$(wine.id)'">
        <h4>{{wine.name}}</h4>
        <img :src=wine.image alt="wine preview">
    </RouterLink>
    </div>

</template>

<style >
</style>