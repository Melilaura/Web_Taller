<script>
import { mapStores } from "pinia";
import { useWinesStore } from "../stores/wines.js";

export default {
  data() {
    return { currentWine: {} };
  },

  computed: {
    ...mapStores(useWinesStore),
  },

  mounted() {
    this.currentWine = this.winesStore.getWineById(this.$route.params.wineId);
  },
};
</script>
    
    <template>
  <div class="product">
    <div class="productImage">
      <img :src="currentWine.image" alt="wine preview" />
    </div>

    <div class="productInfo">
      <h1>{{ currentWine.name }}</h1>
      <h3 class="text">{{ currentWine.type }}</h3>  
      <h3 class="text">{{ currentWine.country }}</h3>
      <h3 class="text">${{ currentWine.price }}</h3>
      <h4 class="text">{{ currentWine.description }}</h4>
    </div>
  </div>
</template>

<style lang="scss">
$mainColor: #3f1732;
$fontText: "Lato", sans-serif;
$BackgroundColor: black;
$FontColor: white;
$FontText: "Lato", sans-serif;
$FontTextTitle: "Playfair Display", serif;

.product {
  display: flex;

  .productImage {
    width: 35%;
    margin: 5%;
    img{
    width: 100%;
  }
  }

  .productInfo {
    color: $FontColor;
    margin: 5% 15%;
    h1 {
      font-family: $FontTextTitle;
    }

    .text {
      font-family: $FontText;
    }
  }
}

@media all and (max-width: 1180px) {

  .productImage {
    img{
    width: 200%;
  }
  }
 
}
</style>