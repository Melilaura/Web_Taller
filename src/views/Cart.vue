<template>
    <section>
            <h1 class="title">Your Shopping Cart</h1>
            <div class="products">
    <div class="product">
            <ul>
                <li class="producted" v-for = "wine in cartGet">
                    <img :src="wine.image" alt="wine preview" />
                    <h1>{{ wine.name }}</h1>
                    <h2>{{ wine.price }}.00$</h2>
                </li>
                    
            </ul>
        </div>
    </div>
    </section>
</template>

<script>
import { mapStores } from 'pinia';
import { useWinesStore } from '../stores/wines';
import { useAuthenticationStore } from '../stores/authentication';
export default {
    computed: {
            ...mapStores(useWinesStore, useAuthenticationStore),
            cartGet(){
                return this.winesStore.getShoppingCart;
            },
            
            getUser(){
                return this.authenticationStore.userId;
            },
            
            getCartData(){
                return this.winesStore.cartData
            }, 
        },
        data(){
            return {current: {}}
        },
        mounted(){
            console.log(this.getUser);
            this.winesStore.getCart(this.getUser)
            console.log("Show", this.cartGet);
        },
        methods: {
        }
        }
</script>

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

    title{
        font-family: $FontTextTitle;
        color: $FontColor;
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
    width: 90%;}
    font-family: $FontTextTitle;
    color: $FontColor;
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
    
</style>