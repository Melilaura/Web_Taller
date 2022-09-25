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

  <CollectionCarousel />

  <div class="bannerLast">
    <img alt="bannerHome" class="bannerHome" src="/Banner4.png"/>
  </div>

</template>

<style lang="scss">

$BackgroundColor: black;
$FontColor: white;
$FontText: "Playfair Display", serif;

* {
  background: $BackgroundColor;
}

.banner {
  display: flex;
}

.newCollection {
  display: flex;

  .title {
    color: $FontColor;
    font-family: $FontText;
  }
}

.bannerHome{
  width: 100%;
  margin:10% 0% 0%;
}
</style>
