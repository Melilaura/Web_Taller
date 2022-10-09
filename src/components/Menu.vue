<script>
import ErrorModal from "./ErrorModal.vue";
import ErrorModal1 from "./ErrorModal.vue";

export default {
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
      <img alt="Logo" class="logo" src="/Logo.png" />
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
      <RouterLink :to="{ name: 'addProduct' }"
        ><li class="header_buttons_item">Add product</li></RouterLink
      >
    </ul>

    <div class="Icons">
      <img
        @click="showModal = true"
        alt="searchIcon"
        class="icon"
        src="/searchIcon.png"
      />
      <img
        @click="showModal = true"
        alt="userLogo"
        class="icon"
        src="/userIcon.png"
      />
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
    img {
      width: 200%;
    }
  }

  .Menu {
    @include display();
    flex-direction: row;
    font-size: 15px;

    .header_buttons_item {
      list-style: none;
      color: $FontColor;
      width: 100%;
    }
  }

  .Icons {
    display: flex;
    flex-direction: row;
    padding-right: 5%;
    margin-left: 20%;

    .icon {
      //padding-right: 2%;
      margin-left: 10px;
      width: 70%;
    }
  }
}

@media all and (max-width: 1180px) {
  header {
    width: 80%;

    .Logo {
      img {
        width: 40px;
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
 
  
}
</style>

