<script>
import ErrorModal from "./ErrorModal.vue";
import ErrorModal1 from "./ErrorModal.vue";

import { useAuthenticationStore } from "../stores/authentication";
import { mapStores } from "pinia";
import { auth } from "../firebase/config";

export default {
  computed: {
    ...mapStores(useAuthenticationStore),
    isAdmin(){
        return this.authenticationStore.getIsAdmin();
    }
  }, 

  data() {
    return {
      showModal: false,
    };
  },

  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },

  components: {
    ErrorModal,
    ErrorModal1,
  },
};
</script>

<template>
  <header>
    <div class="Logo">

      <RouterLink :to="{ name: 'home' }"
      class="icon" >
          <img class="logo" src="/Logo.png" alt="Logo" />
      </RouterLink>

      
    </div>

    <ul class="Menu">
      <RouterLink :to="{ name: 'home' }"
        ><li class="header_buttons_item">Home</li></RouterLink
      >
      <RouterLink :to="{ name: 'categories' }"
        ><li class="header_buttons_item">Wines</li></RouterLink
      >
      <RouterLink :to="{ name: 'aboutUs' }"
        ><li class="header_buttons_item">About Us</li></RouterLink
      >
      <RouterLink :to="{ name: 'addProduct' }" v-if="isAdmin"
        ><li class="header_buttons_item" id="add product" >Add product</li></RouterLink
      >
    </ul>

    <div class="Icons">
      <RouterLink :to="{ name: 'cart' }"
      class="icon" >
          <img class="icon" src="/goOut.png" alt="" />
      </RouterLink>

      <RouterLink :to="{ name: 'login' }"
      class="icon" >
          <img class="icon" src="/userIcon.png" alt="" />
      </RouterLink>
      
    </div>
  </header>

  <ErrorModal v-if="showModal" @close="toggleModal" />
</template>


<style lang="scss">
$BackgroundColor: black;
$FontColor: white;
$FontText: "Lato", sans-serif;
$FontTextTitle: "Playfair Display", serif;

@mixin display {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

header {
  @include display();

  background-color: none;
  font-family: $FontText;
  color: $FontColor;

  height: 70px;

  .Logo {
    padding-left: 2%;
    margin-right: 20%;
    margin-top:10px;
    img {
      width: 250%;
    }
  }

  .Menu {
    @include display();
    flex-direction: row;
    font-size: 15px;

    .header_buttons_item {
      list-style: none;
      font-style:none;
      color: $FontColor;
      width: 100%;
    }
  }

  .Icons {
    display: flex;
    flex-direction: row;
    padding-right: 5%;
    margin-left: 20%;
    align-items: center;
    align-content: center;

  }

  .icon {
    //padding-right: 2%;
    margin-left: 10px;
    width: 30px;
    align-items: center;
  }
}

@media all and (max-width: 1180px) {
  header {
    width: 80%;

    .Logo {
      img {
        width: 40px;
        margin-right:0%;
      }
    }

    .Menu {
      font-size: 5px;

      .header_buttons_item {
        width: 80px;
      }
    }

    .Icons {
      //margin-left: 25%;
      .icon {
        width: 100%;
      }
    }
  }
}

@media all and (max-width: 896px) {
  header{
    width: 100%;
  }
  .Logo {
      img {
        width: 20px;
      }
    }

    .Menu {
      font-size: 2px;

      .header_buttons_item {
        width: 40px;
      }
    }

    .Icons {
      //margin-left: 25%;
      .icon {
        width: 25%;
      }
    }
  }


</style>

