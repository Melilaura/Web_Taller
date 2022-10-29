<script>
import { mapStores } from "pinia";
import { useWinesStore } from "../stores/wines";
import { useAuthenticationStore } from "../stores/authentication";

export default {
  data() {
    return { currentWine: {} };
  },

  computed: {
    ...mapStores(useWinesStore, useAuthenticationStore),

    getUser() {
      return this.authenticationStore.userId;
    },
  },

  mounted() {
    this.currentWine = this.winesStore.getWineById(this.$route.params.wineId);
    console.log(this.getUser);
  },

  methods: {
    addToCart() {
      this.winesStore.addProductToCart(this.getUser, this.currentWine);
    },

    rateProduct(rating){
                console.log(rating);
                this.winesStore.changeRating(this.currentWine, rating);
                alert("you have raking");
            }
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

      <h3 class="text">Rating:</h3>
      <h3 class="text">Current rating: {{ currentWine.wineRating }}</h3>
      <div class="rating">
        <p class="clasificacion">
          <button  id="radio1" type="radio" name="estrellas" value="5" /><!--
    --><button @click="rateProduct(5)" for="radio1">★</button
          ><!--
    --><button  id="radio2" type="radio" name="estrellas" value="4" /><!--
    --><button @click="rateProduct(4)"  for="radio2">★</button
          ><!--
    --><button id="radio3" type="radio" name="estrellas" value="3" /><!--
    --><button  @click="rateProduct(3)" for="radio3">★</button
          ><!--
    --><button  id="radio4" type="radio" name="estrellas" value="2" /><!--
    --><button @click="rateProduct(2)" for="radio4">★</button
          ><!--
    --><button  id="radio5" type="radio" name="estrellas" value="1" /><!--
    --><button @click="rateProduct(1)" for="radio5">★</button>
        </p>
      </div>

      <button class="addCart" @click="addToCart">Add to cart</button>
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
    img {
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

  .rating {
    width: 300px;
    
    }

  .rating p {
    text-align: left;
  }

  .rating button {
    font-size: 200%;
    cursor:pointer;
  }

  input[type="radio"] {
    display: none;
  }

  button {
    color: grey;
  }

  .clasificacion {
    direction: rtl;
    unicode-bidi: bidi-override;
  }

  button:hover,
  button:hover ~ button {
    color: orange;
  }

  input[type="radio"]:checked ~ button {
    color: orange;
  }
}

@media all and (max-width: 1180px) {
  .productImage {
    img {
      width: 200%;
    }
  }
}
</style>