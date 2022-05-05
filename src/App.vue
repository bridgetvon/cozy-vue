<template>
<div class="container">
  <h1 class="mr-5 p-10">Explore</h1>
   </div>
     <explore-tab></explore-tab>
</template>

<script>
import ExploreTab from './components/ExploreTab.vue';
export default {
  components: { ExploreTab },

};
</script>

<style>
html {
  background-color: rgb(97,24,24);

}
body {
    height: 100vh;
    background-position-x: right;
    background-image: url('./assets/Coding-Challenge-Image.png');
    background-repeat: no-repeat;
    background-size: 90%;
    float: right; 
}

h1 {
  font-size: 1000%;
  padding: 100px;
  margin-right: 20px;
}


</style>
