<template>
  <footer class="Footer">
    <p>©2022 Grape House, LLC. All Rights Reserved.</p>
    <ul>
      <li><a href="">Privacy Policy</a></li>
      <li><a href="">Terms & Conditions</a></li>

      <li>
        <img
          class="Footer__social"
          src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
          alt=""
        />
      </li>
      <li>
        <img
          class="Footer__social"
          src="https://cdn-icons-png.flaticon.com/512/20/20673.png"
          alt=""
        />
      </li>
    </ul>
  </footer>
</template>
  
  <script>
export default {};
</script>
  
  <style lang="scss">
$BackgroundColor: black;
$FontColor: white;
$FontText: "Lato", sans-serif;
$FontTextTitle: "Playfair Display", serif;

ul {
  display: flex;
  list-style: none;
  margin-left: 5px;
}
li {
  margin-left: 30px;
}
a {
  color: $FontColor;
}
.Footer {
  display: flex;
  justify-content: center;

  width: 100%;

  font-family: $FontText;
  color: $FontColor;
  font-size: 10px;
  font-weight: 300;

  margin-top: 5%;

  &__social {
    height: 30px;
  }
}
</style>