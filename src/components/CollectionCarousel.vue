<script>
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  data() {
    return {
      news: [
        {
          pic: "/wine.png",
          name: "Wine",
          color: "pink",
        },
        {
          pic: "/wine.png",
          name: "Wine",
          color: "purple",
        },
        {
          pic: "/wine.png",
          name: "Wine",
          color: "blue",
        },
        {
          pic: "/wine.png",
          name: "Wine",
          color: "white",
        },
        {
          pic: "/wine.png",
          name: "Wine",
          color: "green",
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
    <Slide v-for="slide in news" :key="slide">
      <div class="news">
        <img :src="slide.pic" class="news__pic" />
        <h3 class="news__text">{{ slide.name }}</h3>
        <h3 class="news__type" v-on:show="bgc.backgroundcolor = slide.color"></h3>
      </div>
    </Slide>
  </Carousel>
  
  
</template>


<style lang="scss">

$BackgroundColor: black;
$FontColor: white;
$FontText: "Lato", sans-serif;
$FontTextTitle: "Playfair Display", serif;


.title {
  font-family: $FontTextTitle;
  color: $FontColor;
  font-size: 30px;
  text-align: center;
}

.news {
  padding: 5%;


 

  &__text {
    font-family: $FontText;
    color: $FontColor;
    padding: 1.5%;
  }

  img{
    width: 50%;
  }
}

.carousel__slide > .news {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .news {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .news {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .news {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .news {
  transform: scale(1.1);
}

@media all and (max-width: 1180px) {
  //it looks good in that way
}


</style>