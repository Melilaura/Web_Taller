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
      return this.winesStore.getWines;
    },
  },

  mounted() {
    this.winesStore.loadWines();
    //console.log(this.winesStore.loadWines);
  },
};
</script>

<template>
  <div class="top">
    <h2>WELCOME TO OUR STORE</h2>
  </div>

  <div class="products">
    <div class="product">
      <RouterLink
        class="producted"
        v-for="wine in allWines"
        :key="wine.name"
        :to="`/product/${wine.name}`"
      >
        <img :src="wine.image" alt="wine preview" />
        <h4>{{ wine.name }}</h4>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" >
.top {
  display: flex;
  justify-content: center;
}
h2 {
  font-family: "Playfair", serif;
  color: white;
}

.products {
  display: flex;
  flex-wrap: wrap;
  margin: 5% 10%;
  justify-content: center;

  .product {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .producted {
    align-items: center;
    width: 30%;
    cursor: pointer;
    margin: 1%;
    img {
      width: 80%;
    }
    h4 {
      font-size: 18px;
    }
  }
}
</style>