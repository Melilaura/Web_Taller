<script>
import {useAuthenticationStore, } from '../stores/authentication'
import { mapStores } from "pinia";
import {auth} from "../firebase/config"

    export default{
        data() {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            SignIn(e) {
                e.preventDefault()
                this.authenticationStore.signIn(this.email, this.password)
            },
            logOut(e) {
                e.preventDefault()
                this.authenticationStore.logOut()
                alert("Refresh the page :D")
            }
        },
        computed: {
            ...mapStores(useAuthenticationStore),
            userIsLogged(){
                return this.authenticationStore.getUser() !== null
            }
        },
        mounted(){
            console.log(auth.currentUser)
        },
    }
</script>

<template>

<section v-if="!userIsLogged">
  <h1 class="title">LOGIN</h1>

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
      <button class="form__submit" @click.prevent="SignIn">Submit</button>
      <br />



      <RouterLink :to="{ name: 'signUp' }"
        >Don't have a user? Sign up now!</RouterLink
      >
      <button @click="logOut">Log Out</button>
    </form>

  </section>

    <section v-if="userIsLogged" class="logged">
      
        <h1 class="title" >User Logged</h1>
        <button class="form__submit" @click="logOut">Log out</button>
    
    
   
   </section>

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


.logged{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
.form {
  font-family: $FontTextTitle;
  color: $FontColor;
  justify-content: center;
 
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