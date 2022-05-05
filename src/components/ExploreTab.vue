<template>
<!-- Button trigger modal -->
<button type="button" class="border-0" data-toggle="modal" data-target="#exampleModal">
 <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43"><g><g><path fill="#fff" d="M29.295 22.139h-6.833v7.17h-1.934v-7.17h-6.833v-1.815h6.833v-7.11h1.934v7.11h6.833zM21.5 0C9.626 0 0 9.626 0 21.5S9.626 43 21.5 43 43 33.374 43 21.5A21.5 21.5 0 0 0 21.5 0z"/></g></g></svg>
</button>
<p>More Details</p>


<!-- Modal -->
<div class="modal fade border border-dark"  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Explore</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium unde id eum modi dolore voluptates, odit nihil et, aliquam illum officia adipisci optio excepturi autem reiciendis, doloremque provident eaque pariatur? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt distinctio voluptates eos aliquid? Cupiditate, possimus perspiciatis optio voluptate sit nemo veniam molestiae laboriosam, eum, vitae commodi voluptatem odio consequuntur ullam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita harum labore dolorem doloremque. Accusamus tenetur reiciendis dolore quos vitae molestias maiores eos ea hic quidem, autem excepturi illum alias?
      </div>
    </div>
  </div>
  <button type="button" class="btn btn-primary btn-lg" id="read-more">READ MORE</button>
</div>
</template>

<style>
.modal-body {
    color: #0000;
}

div {
    color: #ffff;
}

.modal {
    background-color: #ffff;
}

.read-more {
background-color: rgb(97,24,24);
}





</style>