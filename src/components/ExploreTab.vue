<template>
<div class="position-absolute bottom-0 start-0 translate-middle-y px-5 mx-4">
<h1>Explore</h1>
<button type="button" class="border-0 bg-transparent pr-3" data-toggle="modal" data-target="#myModal">
    <img class="d-inline" src='../assets/Plus.svg'>
</button>
<p class="d-inline text-white" id="more-details">More Details</p>
</div> 
<!-- Modal -->
<div class="modal ml-20 fade border border-dark p-10 m-20"  id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modal-header">Explore</h5>
        <button type="button" class="close border-0 bg-transparent" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium unde id eum modi dolore voluptates, odit nihil et, aliquam illum officia adipisci optio excepturi autem reiciendis, doloremque provident eaque pariatur? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt distinctio voluptates eos aliquid? Cupiditate, possimus perspiciatis optio voluptate sit nemo veniam molestiae laboriosam, eum, vitae commodi voluptatem odio consequuntur ullam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita harum labore dolorem doloremque. Accusamus tenetur reiciendis dolore quos vitae molestias maiores eos ea hic quidem, autem excepturi illum alias?
      </div>
    </div>
  </div>
  <div>
</div>
  <button type="button" class="btn btn-primary btn-lg" id="read-more">READ MORE</button>
</div>

</template>

<style>
h1 {
    color: #ffff;
    font-size: 900%;
}


.modal {
    background-color: #ffff;
    box-sizing: border-box;
    width: 40%;
    height: 60%;
    color: #000000;
}

.read-more,
.modal-header
{
color: rgb(97,24,24);
}

.more-details {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

</style>