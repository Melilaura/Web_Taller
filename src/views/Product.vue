<script>
    import { mapStores } from "pinia";
    import { useWinesStore } from "../stores/wines.js";
    
    export default {
      data() {
        return {};
      },
    
      computed: {
        ...mapStores(useWinesStore),
        allWines() {
          return this.winesStore.getWines;
        },
      },
    
      mounted() {
        this.WinesStore.loadWines();
        console.log(this.WinesStore.loadWines);
      },
    };
    </script>
    
    <template>
      <div class="top">
        <h2>WELCOME TO OUR STORE</h2>
      </div>
      <div class="products">
        <div class="product">
          
            
            <img :src="wine.image" alt="wine preview" />
            <h4>{{ wine.name }}</h4>
         
        </div>
      </div>
    </template>

<style scoped>

</style>