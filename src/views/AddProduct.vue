<script>
import Footer from "../components/Footer.vue";
import { mapStores } from "pinia";

export default {
  data() {
    return {
      wine: "",
      country: "",
      price: "",
      description: "",
      type: "",
      reader: new FileReader(),
      imgURL: null
    };
  },

  computed: {
    ...mapStores(useWineStore),
  },

  methods: {
    createNewBook() {
      //Organize id for book detail page
      const idLowerCase = this.wine.toLowerCase();
      const id = idLowerCase.replace(/\s+/g, '-');

      //Create book object
      const newWine = {
        id: id,
        wine: this.wine,
        country: this.country,
        price: this.price,
        description: this.description,
        type: this.type,
        image: this.imgURL
      };

      //Add to local storage
      this.wineStore.newWine(newWine);

      //Empty inputs when new product added to local storage
      this.wine = "";
      this.country = "";
      this.price = "";
      this.description = "";
    },

    readImage(e) {
      this.reader.readAsDataURL(e.target.files[0]);

      this.reader.addEventListener("load", () => {
        this.imgURL = this.reader.result;
      });
    },
  },

  components: {
    Footer,
  },
};






</script>

<template>

    
  <h1 class="title">ADD NEW PRODUCT</h1>

  <div class="form">
    <label for="wine" class="form__label">WINE</label>
    <input
      type="text"
      name="name"
      placeholder="Wine name"
      class="form__input"
      id="wine"
      v-model="wine"
    />

    <label for="Country" class="form__label">COUNTRY</label>
    <input
      type="text"
      name="name"
      placeholder="Country origin"
      class="form__input"
      id="country"
      v-model="country"
    />

    <label for="price" class="form__label">PRICE</label>
    <input
      type="number"
      name="price"
      placeholder="Wine price"
      class="form__input"
      id="price"
      v-model="price"
    />

    <label for="description" class="form__label">DESCRIPTION</label>
    <textarea
      name="description"
      class="form__input form__input--description"
      id="description"
      placeholder="Write a little description..."
      v-model="description"
    ></textarea>

    <label for="type" class="form__label">TYPE</label>
    <select name="type" id="type" class="form__input" v-model="type">
      <option hidden disabled selected value>Select the type of wine...</option>
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
      @change="readImage"
    />

    <button type="submit" class="form__submit" @click="(e) => createNewBook()">
      ADD WINE
    </button>
  </div>

  <img class="illustration" src="../assets/illustration.png" alt="" />
  <Footer />
</template>

<style lang="scss">
$fontColor: #3f1732;
$mainColor: #3f1732;
$fontText: "Lato", sans-serif;

.title {
  margin: 45px 30%;
  font-family: "Playfair", serif;
  color: white;
}

.form {
  font-family: "Playfair", serif;
  color: white;
  margin: 0px 80px 90px 30%;
  
  

  &__label {
    font-size: 15px;
  }

  &__input {
    font-family: $fontText;
    display: flex;
    font-size: 15px;
    border: solid 1px $fontColor;
    border-radius: 10px;
    padding: 5px;
    width: 50%;
    margin-bottom: 30px;
    margin-top: 10px;
    color: white;
  }

  &__upload {
    display: block;
    margin: 8px 0;

    &::-webkit-file-upload-button {
      visibility: hidden;
    }

    &::before {
      content: "Bottle image";
      border: 2px solid $fontColor;
      background-color: $mainColor;
      font-weight: normal;
      color: white;
      padding: 5px 8px;
      outline: none;
      cursor: pointer;
      padding: 10px 40px;
      width: 35%;
      margin-top: 20px;
      font-weight: 500;
    }

    &:hover::before {
      color: $fontColor;
      background-color: white;
      border: 1px solid $fontColor;
      border-radius: 10px;
      padding: 5px 8px;
      outline: none;
      cursor: pointer;
      cursor: pointer;
      padding: 10px 40px;
      width: 35%;
      margin-top: 20px;
      font-weight: 500;
    }
  }

  &__submit {
    font-family: $fontText;
    color: $fontColor;
    background-color: transparent;
    border: 2px solid $fontColor;
    padding: 10px 40px;
    width: 35%;
    margin-top: 20px;
    font-weight: 500;

    &:hover {
      cursor: pointer;
      border: 2px solid $fontColor;
      background-color: $mainColor;
      font-weight: normal;
      color: white;
    }
  }
}
</style>