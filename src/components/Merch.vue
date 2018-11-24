<template>
  <div>
    <h2 class="is-size-1">Merchendise</h2>
    <div class="merchbox">
      <div class="merchitem"><img 
        class="merchimg" 
        src="../img/watch_ph.jpg"
      ><h3 class="is-size-2">The <span class="highlight">Watch</span></h3><a href="#">Read more...</a></div>
      <div class="merchitem"><img 
        class="merchimg" 
        src="../img/watch_ph.jpg"
      ><h3 class="is-size-2">The <span class="highlight">Helmet</span></h3><a href="#">Read more...</a></div>
      <div class="merchitem"><img 
        class="merchimg" 
        src="../img/watch_ph.jpg"
      ><h3 class="is-size-2">The <span class="highlight">Sunnies</span></h3><a href="#">Read more...</a></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .merchbox {
    height: 100vh;
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  .merchitem {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .highlight {
    color: cyan;
  }

  .merchimg {
    width: 256px;
    height: 256px;
    border-radius: 100%;
  }

  @media screen and (max-width: 768px){
    .merchbox {
      height: 300vh;
      flex-direction: column;
      align-items: center;
    }
  } 
</style>
