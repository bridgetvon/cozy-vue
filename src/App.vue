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

html {
  background-color: rgb(97, 24, 24);
  height: 100vh;
}

h1 {
  font-size: 1000%;
}

.home {
  background-position-x: right;
  background-image: url("./assets/Coding-Challenge-Image.png");
  background-size: 70% 100%;
  background-color: rgb(97, 24, 24);
  background-repeat: no-repeat;
  height: 100vh;
}
</style>
