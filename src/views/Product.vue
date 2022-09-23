<script>
    import { mapStores } from "pinia";
    import { useWinesStore } from "../stores/wines.js";
    
    export default {
      data() {
        return {currentWine: {}};
      },
    
      computed: {
        ...mapStores(useWinesStore),
       
      },
    
      mounted() {
        this.currentWine = this.winesStore.getWineById(
            this.$route.params.wineId
            );
  },
};
    </script>
    
    <template>
      

      <div>
    <h1>Soy el detalle</h1>
    <p class="algo">Id del producto: {{ $route.params.wineId }}</p>
    <p>Nombre Producto: {{ currentWine.name }}</p>
    <img :src= currentWine.image alt="wine preview" />
  </div>
    </template>

<style scoped="scss">

    p{
        color:white;
    }
    p{
        color:white;
    }

</style>