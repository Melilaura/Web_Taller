<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

export default {
  data() {
    return {
      slides: [
        {
          banner: "/Banner.png",
          
        },
        {
          banner: "/Banner2.png",
        },
        {
          banner: "/Banner3.png",
        },
      ],
      
    };


  },
  components: {
    Carousel,
    Slide,
  },

};
</script>

<template>
  <section class="banner">
    <Carousel :autoplay="6000" :items-to-show="1" :wrap-around="true">
      <slide v-for="slide in slides" :key="slide">
        <img :src="slide.banner" class="banner__images" />
      </slide>
    </Carousel>
  </section>
</template>

<style scoped lang="scss">
.banner {
  display: flex;
  &__images {
    width: 100%;
    margin-left:10%;
  }
}


.carousel {
  width: 100%;
}
</style>