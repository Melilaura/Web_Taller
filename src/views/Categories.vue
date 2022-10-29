<script>
import { mapStores } from "pinia";
import { useWinesStore } from "../stores/wines";

export default {
  data() {
    return {
      wines: [],
      drawWines: [],     
  };
},

  computed: {
    ...mapStores(useWinesStore),

    winesGet() {
      return this.winesStore.getWines;
    },
  },

 mounted() {
    //await this.winesStore.displayWine();
    //console.log(this.winesStore.loadWines);
    //this.drawWines = await this.winesStore.displayWine();

    this.winesStore
            
            this.winesStore.displayWine();
  },

  methods: {
    sortBy(event){
                let selection = event.target.value;
                this.winesStore.sortWine(selection);
            },
 
            filterBy(event, caller){
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
    <select class="productFilterSelect" @change="filterBy($event,'A')">
      <option value="noFilter" disabled selected>Type of Products</option>
      <option value="noFilter">Any Type</option>
      <option value="0">Red wine</option>
      <option value="1">White wine</option>
      <option value="2">Dessert wine</option>
      <option value="3">Sparkling wine</option>
      <option value="4">Miscellaneous wine</option>
    </select>
    <select class="productFilterSelect" @change=" filterBy($event, 'B')">
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
        v-for="wines in winesGet"
        :key="wines.name"
        :to="`/product/${wines.id}`"
      >
        <img :src="wines.image" alt="wine preview" />
        <h1>{{ wines.name }}</h1>
        <h2>{{ wines.type }}</h2>
        <h3>$ {{ wines.price }}</h3>
      
      </RouterLink>

    
    </div>
  </div>
</template>

<style lang="scss" >
$mainColor: #3f1732;
$newColor: #af0853;
$fontText: "Lato", sans-serif;
$BackgroundColor: black;
$FontColor: white;
$FontText: "Lato", sans-serif;
$FontTextTitle: "Playfair Display", serif;

@mixin container {
  background-color: transparent;
}

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
}

.product {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.producted {
  display: flex;
  align-items: center;
  width: 30%;
  cursor: pointer;
  margin: 1%;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  text-transform: uppercase;

  background-color: rgba(63, 23, 50, 0.5);

  border-radius: 30px;

  padding: 2% 0%;

  img {
    width: 50%;
    @include container();
  }
  h1 {
    font-size: 20px;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 0%;
    width: 90%;
    @include container();
  }

  h2 {
    margin: 2%;
    font-size: 20px;
    font-family: $FontText;
    font-weight: lighter;
    @include container();
  }

  h3 {
    margin: 0%;
    font-family: $FontText;
    @include container();
  }

  .addCart {
    font-family: $FontText;
    font-weight: 20px;

    color: $newColor;
    background-color: transparent;

    border: 2px solid $newColor;
    border-radius: 10%;

    padding: 5px 50px;
    margin-top: 10px;

    &:hover {
      font-weight: normal;
      color: $FontColor;

      cursor: pointer;

      border: 2px solid $newColor;
      background-color: $newColor;
    }
  }
}

@media all and (max-width: 1180px) {
  //Its all okay i think
}
</style>