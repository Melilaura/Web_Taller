<script>
import { mapStores } from "pinia";
import { useWinesStore } from "../stores/wines.js";
import { useAuthenticationStore } from '../stores/authentication';

export default {
  data() {
    return { currentWine: {} };
  },

  computed: {
    ...mapStores(useWinesStore, useAuthenticationStore),

    getUser(){
                return this.authenticationStore.userId;
            }
  },

  mounted() {
    this.currentWine = this.winesStore.getWineById(this.$route.params.wineId);
  },

  methods: {
            addToCart(){
               this.productsStore.addProductToCart(this.getUser, this.currentWine);
                 console.log("agregado")
            },
        },
};
</script>
    
    <template>
  <div class="product">
    <div class="productImage">
      <img :src="currentWine.image" alt="wine preview" />
    </div>

    <div class="productInfo">
      <h1>{{ currentWine.name }}</h1>
      <h3 class="text">{{ currentWine.type }}</h3>  
      <h3 class="text">{{ currentWine.country }}</h3>
      <h3 class="text">${{ currentWine.price }}</h3>
      <h4 class="text">{{ currentWine.description }}</h4>
      <button class="addCart" @click="addToCart" >Add to cart</button>
    </div>
  </div>
</template>

<style lang="scss">
$mainColor: #3f1732;
$newColor: #af0853;
$fontText: "Lato", sans-serif;
$BackgroundColor: black;
$FontColor: white;
$FontText: "Lato", sans-serif;
$FontTextTitle: "Playfair Display", serif;

.product {
  display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

  .productImage {
    width: 55%;
    margin: 5%;
    img{
    width: 150%;
  }
  }

  .productInfo {
    color: $FontColor;
    margin: 5% 15%;
    h1 {
      font-family: $FontTextTitle;
    }

    .text {
      font-family: $FontText;
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
}

@media all and (max-width: 1180px) {

  .productImage {
    img{
    width: 200%;
  }
  }
 
}
</style>