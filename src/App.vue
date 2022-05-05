<template>
<div class="container">
  <div class="row">
    <div class="col">
      one column 
    </div>
    <div class="col">
      two coloun
      </div>
  </div>
  <h1 class="mr-5 p-10">Explore</h1>
  <explore-tab></explore-tab>
   </div>
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
    height: 100%;
    background-image: url('./assets/Coding-Challenge-Image.png');
    background-repeat: no-repeat;
    background-size: 80%;
    float: right;
}

h1 {
  font-size: 1000%;
  padding: 10px;
  margin-right: 20px;
}


</style>
