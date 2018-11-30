<template>
  <div>
    <h2 class="display-1">{{ getLanguage.merchandise }} </h2>
    <div class="merchbox">
      <div class="merchitem">
        <div class="merchimg"><img 
          class="" 
          src="../img/shades.png"
      ></div><h3 class="is-size-2">{{ getLanguage.merchThe }} <span class="highlight">{{ getLanguage.merchShades }}</span></h3><a href="#">{{ getLanguage.merchReadmore }}</a></div>
      <div class="merchitem"><div class="merchimg"><img 

        src="../img/helmet.png"
      ></div><h3 class="is-size-2">{{ getLanguage.merchThe }} <span class="highlight">{{ getLanguage.merchHelmet }}</span></h3><a href="#">{{ getLanguage.merchReadmore }}</a></div>
      <div class="merchitem"><div class="merchimg"><img 
        class="merchimg watch" 
        src="../img/black_watch.png"
      ></div><h3 class="is-size-2">{{ getLanguage.merchThe }} <span class="highlight">{{ getLanguage.merchWatch }}</span></h3><a href="#">{{ getLanguage.merchReadmore }}</a> 
      </div>
    </div>
</div></template>

<script>
import { mapGetters } from 'vuex'
export default {

  name: 'Merch',
  data: function() {
    return {
			
    }
  },
  computed: {
    ...mapGetters([
      'getLanguage'
    ]),
  },
}
</script>

<style>
  .hero {
    font-family: AG-Bold;
    height: 100vh;
    line-height: 57px;
  }
  .display-1 {
    margin-top: 10vh;
  }

  .merchbox {
    height: 60vh;
    margin-bottom: 30vh;
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
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 300px;
    border-radius: 100%;
    background-color: #fff;
  }
  .merchimg > img {
    max-height: 256px;
    max-width: 256px;
    object-fit: scale-down;
  }

  a, a:visited, a:active {
    color: white;
  }

  @media screen and (max-width: 768px){
    .merchbox {
      height: 200vh;
      margin-bottom: 10vh;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
    }
  } 
</style>
