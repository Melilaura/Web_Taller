<script>
import { mapStores } from "pinia";
import { useWinesStore } from "../stores/wines.js";

export default {
  data() {
    return {
      newWine: {
        wineName: "",
        wineCountry: "",
        winePrice: "",
        wineDescription: "",
        wineType: "",
        wineType: "",
        image: "",
      },
    };
  },

  computed: {
    ...mapStores(useWinesStore),
  },

  methods: {
    async productUploaded() {
      await this.winesStore.uploadProduct(this.newWine);
      
    },

    onFileSelected(event) {
      const reader = new FileReader();

      reader.addEventListener("load", (ev) => {
        this.selectedFile = reader.result;

        this.newWine.image = this.selectedFile;

        //console.log(this.selectedFile);
      });
      reader.readAsDataURL(event.target.files[0]);
    },
  },

  components: {},
};
</script>

<template>
  <h1 class="title">ADD NEW PRODUCT</h1>

  <div class="form" >
    <form action="" class="form" @submit.prevent = "productUploaded">
      <label for="name" class="form__label">WINE</label>
      <input
        type="text"
        name="name"
        placeholder="Wine name"
        class="form__input"
        id="name"
        v-model="newWine.wineName"
        required
      />

      <label for="Country" class="form__label">COUNTRY</label>

      <select
        name="country"
        id="country"
        class="form__input"
        v-model="newWine.wineCountry"
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
        v-model="newWine.winePrice"
        required
      />

      <label for="description" class="form__label">DESCRIPTION</label>
      <textarea
        name="description"
        class="form__input form__input--description"
        id="description"
        placeholder="Write a little description..."
        v-model="newWine.wineDescription"
        required
      ></textarea>

      <label for="type" class="form__label">TYPE</label>
      <select
        name="type"
        id="type"
        class="form__input"
        v-model="newWine.wineType"
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

      <button
        type="submit"
        class="form__submit"
        @click="(e) => productUploaded()"
      >
        ADD WINE
      </button>
    </form>
  </div>
</template>

<style lang="scss">
$mainColor: #3f1732;
$fontText: "Lato", sans-serif;
$BackgroundColor: black;
$FontColor: white;
$FontText: "Lato", sans-serif;
$FontTextTitle: "Playfair Display", serif;

.title {
  margin: 45px 30%;
  font-family: $FontTextTitle;
  color: $FontColor;
}

.form {
  font-family: $FontTextTitle;
  color: $FontColor;
  margin: 0px 80px 90px 30%;

  &__label {
    font-size: 15px;
  }

  &__input {
    display: flex;

    font-family: $FontText;
    font-size: 15px;
    color: $FontColor;

    border: solid 1px $mainColor;
    border-radius: 10px;

    width: 50%;

    padding: 5px;
    margin-bottom: 30px;
    margin-top: 10px;
  }

  &__upload {
    display: block;
    margin: 8px 0;

    &::-webkit-file-upload-button {
      visibility: hidden;
    }

    &::before {
      content: "Bottle image";

      border: 2px solid $mainColor;
      background-color: $mainColor;

      font-weight: normal;
      color: $FontColor;

      outline: none;
      cursor: pointer;

      width: 35%;

      padding: 10px 40px;
      margin-top: 20px;
      font-weight: 500;
    }

    &:hover::before {
      background-color: $FontColor;

      font-weight: 500;
      color: $mainColor;

      border: 1px solid $mainColor;
      border-radius: 10px;

      outline: none;
      cursor: pointer;

      width: 35%;

      padding: 10px 40px;
      margin-top: 20px;
    }
  }

  &__submit {
    font-family: $FontColor;
    font-weight: 500;
    color: $mainColor;

    background-color: transparent;

    width: 35%;

    border: 2px solid $mainColor;

    padding: 10px 40px;
    margin-top: 20px;

    &:hover {
      font-weight: normal;
      color: $FontColor;

      cursor: pointer;

      border: 2px solid $mainColor;
      background-color: $mainColor;
    }
  }
}

@media all and (max-width: 1180px) {
  //its all okay i think
}
</style>