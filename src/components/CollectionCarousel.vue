<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default {
  data() {
    return {
      faves: [
        {
          pic: "/wine.png",
          name: "Wine",
        },
        {
          pic: "/wine.png",
          name: "Wine",
        },
        {
          pic: "/wine.png",
          name: "Wine",
        },
        {
          pic: "/wine.png",
          name: "Wine",
        },
        {
          pic: "/wine.png",
          name: "Wine",
        },
      ],
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
  },
};
</script>


<template>
  <h4 class="title">New Collection</h4>

  <Carousel :itemsToShow="2.95" :wrapAround="true">
    <Slide v-for="slide in faves" :key="slide">
      <div class="faves">
        <img :src="slide.pic" class="faves__pic" />
        <h3 class="faves__text">{{ slide.name }}</h3>
      </div>
    </Slide>
  </Carousel>
</template>


<style lang="scss" scoped>

$BackgroundColor: black;
$FontColor: white;
$FontText: "Lato", sans-serif;
$FontTextTitle: "Playfair Display", serif;

.title {
  font-family: $FontTextTitle;
  color: $FontColor;
  font-size: 2em;
  text-align: center;
  padding: 3%;
}

.faves {
  padding: 5%;

  &__text {
    font-family: $FontText;
    padding: 1.5%;
    color: $FontColor;
  }
}

.carousel__slide > .faves {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .faves {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .faves {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .faves {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .faves {
  transform: scale(1.1);
}
</style>