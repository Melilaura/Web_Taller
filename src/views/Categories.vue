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

  methods: {
    sortBy(event) {
      let selection = event.target.value;
      this.winesStore.sortWine(selection);
    },

    filterBy(event, caller) {
      let selected = event.target.value;
      console.log(selected);
      this.winesStore.filterWine(selected, caller);
    },
  },
};
</script>

<template>
  <div class="top">
    <h2>WELCOME TO OUR STORE</h2>
  </div>

  <div class="productFilter">
    <select class="productFilterSelect" @change="filterBy($event, 'A')">
      <option value="noFilter" disabled selected>Type of Products</option>
      <option value="noFilter">Any Type</option>
      <option value="0">Red wine</option>
      <option value="1">White wine</option>
      <option value="2">Dessert wine</option>
      <option value="3">Sparkling wine</option>
      <option value="4">Miscellaneous wine</option>
    </select>
    <select class="productFilterSelect" @change="filterBy($event, 'B')">
      <option value="noFilter" disabled selected>Price</option>
      <option value="noFilter">Any Price</option>
      <option value="0">Lower than 50$</option>
      <option value="1">Lower than 90$</option>
      <option value="2">Lower than 100$</option>
    </select>
    <select class="productFilterSelect" @change="filterBy($event, 'C')">
      <option value="noFilter" disabled selected>Country</option>
      <option value="noFilter">Any Country</option>
      <option value="0">Spain</option>
      <option value="1">France</option>
      <option value="2">Chile</option>
      <option value="3">Australia</option>
      <option value="4">Germany</option>
      <option value="5">EE.UU</option>
      <option value="6">Argentina</option>
      <option value="7">South Africa</option>
      <option value="8">Portugal</option>
      <option value="9">New Zealand</option>
      <option value="10">Italy</option>
    </select>
    <select class="productFilterSelect" @change="sortBy($event)">
      <option value="" disabled selected>Sort by</option>
      <option value="0">A to Z</option>
      <option value="1">Z to A</option>
      <option value="2">Lowest Price</option>
      <option value="3">Highest Price</option>
    </select>
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
$mainColor: #3f1732;
$fontText: "Lato", sans-serif;
$BackgroundColor: black;
$FontColor: white;
$FontText: "Lato", sans-serif;
$FontTextTitle: "Playfair Display", serif;

.productFilter {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  align-items: center;
  justify-content: space-evenly;

  .productFilterSelect {
    display: flex;

    font-family: $FontText;
    font-size: 15px;
    color: $FontColor;

    border: solid 1px $mainColor;
    border-radius: 10px;

    width: 20%;

    padding: 5px;
    margin-bottom: 30px;
    margin-top: 10px;
  }
}

.top {
  display: flex;
  justify-content: center;
}
h2 {
  font-family: $FontTextTitle;
  color: $FontColor;
}

.products {
  display: flex;
  flex-wrap: wrap;
  margin: 5% 10%;
  justify-content: center;

  .product {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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

@media all and (max-width: 1180px) {
  //Its all okay i think
}
</style>