<template>
    <section>
            <h1 class="title">Your Shopping Cart</h1>
        <div class="cart_area">
            <ul>
               <h3>carrito</h3>
                    
            </ul>
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

    title{
        font-family: $FontTextTitle;
        color: $FontColor;
    }
</style>