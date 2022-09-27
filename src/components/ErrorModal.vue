<template>
  <transition name="modalDisplay">
    <div class="modalOverlay">
      <div class="modalContainer">
        <h2>Page not available</h2>
        <h3>
          We still working in the customing of this page to bring you the best
          experience
        </h3>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss">
$BackgroundColor: black;
$FontColor: white;
$mainColor: #3f1732;
$FontText: "Lato", sans-serif;
$FontTextTitle: "Playfair Display", serif;

.modalOverlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;

  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.5);

  .modalContainer {
    background-color: $BackgroundColor;

    width: 800px;
    padding: 50px;

    border-radius: 50px;
    border: 1px solid $mainColor;

    h2 {
      color: white;
      font-family: $FontColor;
    }

    h3 {
      font-family: $FontText;
      font-size: 15px;
      color: $FontColor;

      margin: 50px 0px;
    }
  }

  button {
    background-color: $mainColor;
    color: $FontColor;
    font-family: $FontText;

    padding: 5px 8px;
    width: 20%;

    border-radius: 50px;
    border: 1px solid $mainColor;

    cursor: pointer;
  }
}

@media all and (max-width: 1180px) {
  .modalOverlay .modalContainer {
    width: 40%;
  }
}
</style>