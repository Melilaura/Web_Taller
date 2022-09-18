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
      <img alt="searchIcon" class="icon" src="/searchIcon.png" />
      <img alt="userLogo" class="icon" src="/userIcon.png" />
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
header {
  background-color: none;

  font-family: "Lato", sans-serif;
  color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  .Logo {
    padding: 5px;
    padding-left: 2%;
    margin-right: 20%;

  }

  .Menu {
    justify-content: space-between;
    align-items: center;
    width: 100%;
    display: flex;
    flex-direction: row;

    h1 {
      font-size: 20px;
    }

    .header_buttons_item{
        list-style: none;
        color: #fff;
    }


  }
  
  .Icons {
    display: flex;
    flex-direction: row;
    padding-right: 2%;
    margin-left: 20%;

    .icon {
        padding-right: 2%;
        margin-left: 10px; 
    }
  }
}
</style>