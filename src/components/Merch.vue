<template>
  <div>
    <h2 class="display-1">Merchandise</h2>
    <div class="merchbox">
      <div class="merchitem"><img 
        class="merchimg" 
        src="../img/shades.png"
      ><h3 class="is-size-2">The <span class="highlight">Shades</span></h3><a href="#">Read more...</a></div>
      <div class="merchitem"><img 
        class="merchimg" 
        src="../img/helmet.png"
      ><h3 class="is-size-2">The <span class="highlight">Helmet</span></h3><a href="#">Read more...</a></div>
      <div class="merchitem"><img 
        class="merchimg watch" 
        src="../img/black_watch.png"
      ><h3 class="is-size-2">The <span class="highlight">Watch</span></h3><a href="#">Read more...</a></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .hero {
    font-family: AG-Bold;
    height: 100vh;
    line-height: 57px;
  }
  .display-1 {
    margin-top: 5vh;
  }

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
    color: #d51225;
  }

  .merchimg {
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
