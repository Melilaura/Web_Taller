<script>
import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
import Home from './views/Home.vue'
import Categories from './views/Categories.vue'
import AddProduct from './views/AddProduct.vue'

import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'
//import HomeCarousel from './components/HomeCarousel.vue'


export default{
  components: {
    Home,
    Menu,
    Categories,
    AddProduct,
    Footer,
  
   
}
}
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
  <header>
    <Menu />
  </header>

    <RouterView />
    
    <Footer/>
</template>

<style>

body{
  margin: 0;
}

</style>
