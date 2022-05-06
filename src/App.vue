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
 /* pixel 5 */
  .home {
  background-color: rgba(97, 24, 24);
  background-image: image('./assets/Coding-Challenge-Image.png');
  background-repeat: repeat;
  overflow-y: hidden;
  overscroll-behavior-y: hidden;
  overflow-x: hidden;
  overscroll-behavior-x: hidden;
  }

  h1 {
    font-size: 300%;
  }
}

@media only screen and (max-device-width: 480px), only screen and (min-device-width: 560px) and (max-device-width: 1136px) and (-webkit-min-device-pixel-ratio: 2) {
    /* iPhone only */
    .home {
      padding: 0px;
      margin: 0px;
      background-size: 80% 100%;
      overflow-x: hidden;
      

    }
}
</style>
