<template>
  <div
    class="position-absolute bottom-0 start-0 translate-middle-y px-5 mx-4"
    id="main-div"
  >
  <transition 
  enter-active-class="animate__animated animate__jackInTheBox"
  leave-active-class="animate__animated animate__zoomOutLeft">
    <h1 v-if="showImage" class="animate__animated animate__jackInTheBox">Explore</h1>
  </transition>
    <button
      @click="showImage = !showImage"
      type="button"
      class="border-0 bg-transparent pr-3"
      data-toggle="modal"
      data-target="#myModal"
    >
      <img class="d-inline" src="../assets/Plus.svg" />
    </button>
    <p class="d-inline text-white" id="more-details">More Details</p>
  </div>
  <div
    class="modal fade border-0"
    id="myModal"
    tabindex="-1"
    aria-labelledby="myModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="pb-1">
        <div>
          <h5 class="fs-1" id="modal-header">Explore</h5>
          <div class="position relative">
            <button
              @click="showImage"
              type="button"
              class="close border-0 bg-transparent"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span id="modal-span" aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
        <div class="fw-lighter" id="modal-body">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          unde id eum modi Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. lorem Enim ipsa, ratione magnam molestiae pariatur optio, nulla
          porro molestias provident consequatur sapiente, dolore eaque ipsam
          laborum suscipit voluptatibus minus sunt voluptatum. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Harum corporis, est
          laudantium nam esse aut quo minima similique aspernatur officia.
          Voluptatem quod harum quisquam expedita alias laudantium minus dolores
          labore? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Ducimus, neque itaque? Consequatur enim soluta omnis voluptates
          voluptas. Quis aut impedit deserunt pariatur beatae eveniet veniam
          sunt, odit neque harum officia!
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-sm rounded-0 animate__animated animate__bounce" id="read-more">
      READ MORE
    </button>
  </div>
</template>

<script>

export default ({
    data: () => ({
        showImage: true
    }),
})
</script>


<style>
h1 {
  color: #ffff;
  font-size: 900%;
}

#more-details {
  font-family: sans-serif;
}

.modal {
  background-color: #ffff;
  box-sizing: border-box;
  width: 40%;
  height: 57%;
  color: #000000;
  justify-content: center;
}

#modal-span {
  color: rgb(97, 24, 24);
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 10px;
  margin-top: 0px;
  font-size: xx-large;
}

#read-more,
#modal-header {
  color: rgb(97, 24, 24);
}

#read-more {
  background: linear-gradient(to right, rgb(97, 24, 24), rgb(149, 86, 71));
  color: #ffff;
  padding: 5px;
  padding-left: 45px;
  padding-right: 45px;
  position: relative;
  top: -25px;
  left: 48px;
  font-family: sans-serif;
  margin-bottom: 50px;
}

#modal-body {
  font-family: sans-serif;
  font-size: 10px;
  padding: 20px 50px;
  line-height: 2;
}

#modal-header {
  position: relative;
  top: 40px;
  left: 48px;
  text-align: center;
  width: 80px;
  height: 50px;
  border: none;
}
#modal-header::after {
  content: "";
  position: absolute;
  margin: auto;
  right: 25px;
  bottom: 0;
  left: 0;
  width: 300%;
  height: 2px;
  background: linear-gradient(
      to right,
      rgb(97, 24, 24),
      rgb(149, 86, 71),
      #ffff
    )
    left bottom no-repeat;
  background-size: 90% 5px;
}

#myModal {
  position: fixed;
  top: auto;
  right: auto;
  left: 100px;
  bottom: 2px;
  margin-bottom: 70px;
}

@media (max-width: 575.98px) {
  h1 {
    font-size: 500%;
  }
  #main-div {
    margin-bottom: 300px;
  }
  .modal {
    padding: 0px !important;
    width: 70%;
    margin: 0px !important;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-40px, -20%);
    z-index: 1050;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    outline: 0;
  }

  #my-modal {
    padding: 0px !important;
    margin: 0px !important;
  }
}


@media (max-width: 991.98px) {
  #main-div {
    margin-bottom: 200px;
  }
  .modal {
    height: 40%;
    width: 50%;
  }

  #myModal {
    margin-bottom: 150px;
  }
}

@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
  #main-div {
    margin-bottom: 200px;
  }
  .modal {
    height: 80%;
    width: 70%;
  }
}

@media only screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) {
  .modal {
    height: 80%;
    width: 70%;
  }
}

@media only screen and (max-device-width: 480px),
  only screen and (min-device-width: 560px) and (max-device-width: 1136px) and (-webkit-min-device-pixel-ratio: 2) {
  /* iPhone only */
  .modal {
    width: 65%;
    height: 70%;
  }
}
</style>