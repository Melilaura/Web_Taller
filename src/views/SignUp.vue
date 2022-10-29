<script>
import { useAuthenticationStore } from "../stores/authentication";
import { createPinia, mapStores } from "pinia";
export default {
  data() {
    return {
      email: "",
      password: "",
      passwordConf: "",
    };
  },
  methods: {
    signUp() {

      console.log(this.email, this.password);

      if (this.password === this.passwordConf) {
        this.authenticationStore.signUp(this.email, this.password);
      } else {
        alert("Passwords do not match, try again");
      }
    },
  },
  computed: {
    ...mapStores(useAuthenticationStore),
    userIsLogged(){
                return this.authenticationStore.validate() !== null
            }
  },
  mounted() {
    console.log(this.authenticationStore);
  },
};
</script>


<template>
  <h1 class="title">Sign Up</h1>
  <form class="form">
    <input
      class="form__input"
      type="email"
      placeholder="E-mail"
      v-model="email"
    />
    <input
      class="form__input"
      type="password"
      placeholder="Password"
      v-model="password"
    />
    <input
      class="form__input"
      type="password"
      placeholder="Confirm password"
      v-model="passwordConf"
    />
    <button class="form__submit" @click.prevent="signUp">Sign Up</button>
    <br />

    <RouterLink :to="{ name: 'login' }"
      >Already have a user? Log in now!</RouterLink
    >
  </form>
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
    font-family: white;
    font-weight: 500;
    color: #3f1732;
    background-color: transparent;
    width: 35%;
    border: 2px solid #3f1732;
    /* padding: 9px 40px; */
    margin-bottom: 25px;

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