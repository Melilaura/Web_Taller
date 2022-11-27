<script>
import { mapStores } from "pinia";
import { useWinesStore } from "../stores/wines";
import { useFirestoreStore } from "../stores/firestore";
import { useAuthenticationStore } from "../stores/authentication";

export default {
  data() {
    return {
      currentWine: {},

      edit: false,
      chosenWine: '',
      wineName: "",
      wineCountry: "",
      winePrice: "",
      wineDescription: "",
      wineType: "",
      wineRating: "",
      reader: new FileReader(),
      image: "",
    };
  },

  computed: {
    ...mapStores(useWinesStore, useFirestoreStore, useAuthenticationStore),

    getUser() {
      return this.authenticationStore.userId;
    },

    userUid() {
      return this.authenticationStore.getUser().uid;
    },

    isAdmin() {
      return this.authenticationStore.getIsAdmin();
    },
  },

  mounted() {
    this.currentWine = this.winesStore.getWineById(this.$route.params.wineId);
    //console.log(this.getUser);
  },

  methods: {
    addToCart() {
      this.winesStore.addProductToCart(this.getUser, this.currentWine);
    },

    rateProduct(rating) {
      console.log(rating);
      this.winesStore.changeRating(this.currentWine, rating);
      alert("you have raking");
    },

    showEdit(e, wine) {
      e.preventDefault();
      this.edit = true;
      this.chosenWine = wine;
    },

    closeEdit() {
      this.edit = false;
    },

    async editWine() {

      const wine = {
        id: this.currentWine,
        wineName: this.wineName,
        wineCountry: this.wineCountry,
        winePrice: this.winePrice,
        wineDescription:this.wineDescription,
        wineType: this.wineType,
        wineRating: this.wineRating,
        image: this.image,
      };

      await this.firestoreStore.editWine(this.currentWine.id, wine);
      this.edit = false;
    },

    onFileSelected(event) {
      const reader = new FileReader();

      reader.addEventListener("load", (ev) => {
        this.selectedFile = reader.result;

        this.currentWine.image = this.selectedFile;

        console.log(this.selectedFile);
      });
      reader.readAsDataURL(event.target.files[0]);
    },
    
    async deleteWine() {
      await this.firestoreStore.deleteWine(this.currentWine.id);
      this.edit = false;
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

      <h3 class="text">Rating:</h3>
      <h3 class="text">Current rating: {{ currentWine.wineRating }}</h3>
      <div class="rating">
        <p class="clasificacion">
          <button id="radio1" type="radio" name="estrellas" value="5" /><!--
    --><button @click="rateProduct(5)" for="radio1">★</button
          ><!--
    --><button id="radio2" type="radio" name="estrellas" value="4" /><!--
    --><button @click="rateProduct(4)" for="radio2">★</button
          ><!--
    --><button id="radio3" type="radio" name="estrellas" value="3" /><!--
    --><button @click="rateProduct(3)" for="radio3">★</button
          ><!--
    --><button id="radio4" type="radio" name="estrellas" value="2" /><!--
    --><button @click="rateProduct(2)" for="radio4">★</button
          ><!--
    --><button id="radio5" type="radio" name="estrellas" value="1" /><!--
    --><button @click="rateProduct(1)" for="radio5">★</button>
        </p>
      </div>

      <button class="addCart" @click="addToCart">Add to cart</button>

      <button class="addCart" v-if="isAdmin" @click="showEdit($event, wine)">
        Edit Wine
      </button>
    </div>

    <div class="edit" v-if="edit" id="edit-popup">
      <h2 class="edit__title">Edit product</h2>
      <button class="edit__close" @click="closeEdit">X</button>
      <div class="form">
        <form action="" class="form" @submit.prevent="productUploaded">
          <label for="name" class="form__label">WINE</label>
          <input
            type="text"
            name="name"
            placeholder="Wine name"
            class="form__input"
            id="name"
            v-model="wineName"
            required
          />

          <label for="Country" class="form__label">COUNTRY</label>

          <select
            name="country"
            id="country"
            class="form__input"
            v-model="wineCountry"
            required
          >
            <option hidden disabled selected value>Select the country..</option>
            <option value="Spain">Spain</option>
            <option value="France">France</option>
            <option value="Chile">Chile</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="EE.UU">EE.UU</option>
            <option value="Argentina">Argentina</option>
            <option value="South Africa">South Africa</option>
            <option value="Portugal">Portugal</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Italy">Italy</option>
          </select>

          <label for="price" class="form__label">PRICE</label>
          <input
            type="number"
            name="price"
            placeholder="Wine price"
            class="form__input"
            id="price"
            v-model="winePrice"
            required
          />

          <label for="price" class="form__label">RATING</label>
          <input
            type="number"
            name="rating"
            placeholder="Actual rating (it could be 0)"
            id="rating"
            class="form__input"
            v-model="wineRating"
            required
          />

          <label for="description" class="form__label">DESCRIPTION</label>
          <textarea
            name="description"
            class="form__input form__input--description"
            id="description"
            placeholder="Write a little description..."
            v-model="wineDescription"
            required
          ></textarea>

          <label for="type" class="form__label">TYPE</label>
          <select
            name="type"
            id="type"
            class="form__input"
            v-model="wineType"
            required
          >
            <option hidden disabled selected value>
              Select the type of wine...
            </option>
            <option value="red">Red wine</option>
            <option value="white">White wine</option>
            <option value="dessert">Dessert wine</option>
            <option value="sparkling">Sparkling wine</option>
            <option value="miscellaneous">Miscellaneous wine</option>
          </select>

          <label for="images" class="form__label">IMAGE</label>
          <input
          type="file"
        name="images"
        id="images"
        class="form__upload"
        multiple
        @change="onFileSelected"
        required
          />
        </form>

        <button type="submit" class="form__submit" @click="(e) => editWine()">
          CHANGE BOOK
        </button>
        <button class="form__submit form__submit--delete" @click="deleteWine">
          DELETE BOOK
        </button>
      </div>
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
    cursor: pointer;
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

#edit-popup {
  -webkit-box-shadow:  0px 0px 0px 9999px rgba(0, 0, 0, 0.7);
  box-shadow:  0px 0px 0px 9999px rgba(0, 0, 0, 0.7);
}

@media all and (max-width: 1180px) {
  .productImage {
    img {
      width: 200%;
    }
  }
}
</style>