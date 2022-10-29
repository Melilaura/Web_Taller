<script>
export default {
    data() {
        return {
            starImg: null
        }
    },

    methods: {
    starRating(rating) {
      //Round of rating first
      let star = this.roundRating(rating);
      
      if (star == 0.5) {
        this.starImg = "/src/assets/stars/0.5.png";
      } else if (star == 1) {
        this.starImg = "/src/assets/stars/1.png";
      } else if (star == 1.5) {
        this.starImg = "/src/assets/stars/1.5.png";
      } else if (star == 2) {
        this.starImg = "/src/assets/stars/2.png";
      } else if (star == 2.5) {
        this.starImg = "/src/assets/stars/2.5.png";
      } else if (star == 3) {
        this.starImg = "/src/assets/stars/3.png";
      } else if (star == 3.5) {
        this.starImg = "/src/assets/stars/3.5.png";
      } else if (star == 4) {
        this.starImg = "/src/assets/stars/4.png";
      } else if (star == 4.5) {
        this.starImg = "/src/assets/stars/4.5.png";
      } else if (star == 5) {
        this.starImg = "/src/assets/stars/5.png";
      }
      return this.starImg;
    },

    roundRating(rating) {
      return Math.round(rating*2)/2;
    }
  },

  props: {
    rating: {
        type: Number
    },

    details: {
      type: Boolean
    }
  }
};
</script>

<template>
  <div class="rate">
    <img :src=this.starRating(this.rating) alt="" class="rate__img"/>
    <p class="rate__text">{{this.rating}}</p>
  </div>
</template>

<style lang="scss" scoped>
.rate {
  display: flex;

  &__img {
    object-fit: contain;
  }

  &__text {
    margin-left: 10px;
    font-family: "Outfit", sans-serif;
    font-weight: 300;
    font-size: 1em;
    color: #6739cb;
  }
}
</style>