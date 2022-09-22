<script>
import HomeCarousel from "../components/HomeCarousel.vue";

import CollectionCarousel from "../components/CollectionCarousel.vue";

export default {
  components: {
    HomeCarousel,
    CollectionCarousel,
  },
};
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Playfair+Display&display=swap"
    rel="stylesheet"
  />

  <div class="banner">
    <HomeCarousel />
  </div>

  <CollectionCarousel/>

  <div class="newCollection">
    <div class="title">
      <h1>NEW COLLECTION</h1>
    </div>

    <div class="collection">
      <img class="icon" src="/Wine.png" />
    </div>
  </div>
</template>


<style lang="scss">
* {
  background: black;
}

.banner {
  display: flex;
}

.newCollection{
  display: flex;
  .title{
    color: white;
    font-family: 'Playfair Display', serif ;
  }


}


</style>
