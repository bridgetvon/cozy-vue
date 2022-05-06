<template>
<div class="position-absolute bottom-0 start-0 translate-middle-y px-5 mx-4">
<h1>Explore</h1>
<button type="button" class="border-0 bg-transparent pr-3" data-toggle="modal" data-target="#myModal">
    <img class="d-inline" src='../assets/Plus.svg'>
</button>
<p class="d-inline text-white" id="more-details">More Details</p>
</div> 
<!-- Modal -->
<div class="modal my-5 fade border-0"  id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="pb-1">
      <div class="">
        <h5 class="fs-1" id="modal-header">Explore</h5>
        <div class="position relative">
        <button type="button" class="close border-0 bg-transparent" data-dismiss="modal" aria-label="Close">
          <span id="modal-span" aria-hidden="true">&times;</span>
        </button>
        </div>
      </div>
      <div class="fw-lighter" id="modal-body" >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium unde id eum modi Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ipsa, ratione magnam molestiae pariatur optio, nulla porro molestias provident consequatur sapiente, dolore eaque ipsam laborum suscipit voluptatibus minus sunt voluptatum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum corporis, est laudantium nam esse aut quo minima similique aspernatur officia. Voluptatem quod harum quisquam expedita alias laudantium minus dolores labore?
      </div>
    </div>
  </div>
  <div>
</div>
  <button type="button" class="btn btn-sm rounded-0" id="read-more">READ MORE</button>
</div>
</template>




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
    height: 80%;
    color: #000000;
    justify-content: center;
}

#modal-span {
    color: rgb(97,24,24);
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 10px;
    margin-top: 0px;
    font-size: xx-large;
}

#read-more,
#modal-header
{
color: rgb(97,24,24);

}

#read-more {
     background: linear-gradient(to right, rgb(97,24,24), rgb(149,86,71));
     color: #ffff;
     padding: 5px;
     padding-left: 45px;
     padding-right: 45px;
     position: relative;
     top: -25px;
     left: 48px;
     font-family: sans-serif;

}

#modal-body {
    font-family: sans-serif;
    font-size: 10px;
    padding: 30px 50px;
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
        content: '';
        position: absolute;
        margin: auto;
        right: 25px;
        bottom: 0;
        left: 0;
        width: 300%;
        height: 2px;
          background: 
    linear-gradient(
   to right, rgb(97,24,24), rgb(149,86,71), #ffff
    )
    left 
    bottom    
    no-repeat; 
  background-size:90% 5px ;
    }



#myModal {
   position:fixed;
   top:auto;
   right:auto;
   left:100px;
   bottom:2px;
}  


</style>