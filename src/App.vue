<template>
  <div class="home">
    <explore-tab></explore-tab>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  font-family: "IBM Plex Serif", serif;
}

.home {
  background-position-x: right;
  background-image: url("./assets/Coding-Challenge-Image.png");
  background-size: 70% 100%;
  background-color: rgb(97, 24, 24);
  background-repeat: no-repeat;
  height: 100vh;
}

@media (max-width: 575.98px) {
  .home {
  background-color: rgba(97, 24, 24);
  background-image: image('./assets/Coding-Challenge-Image.png');
  }

  h1 {
    font-size: 300%;
  }
}
</style>
