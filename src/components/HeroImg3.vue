<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="display-1">
          {{ getLanguage.thirdHeroTitleH1 }}
        </h1>
        <p class="lead lead-center">
          {{ getLanguage.thirdHeroTitleH2 }}
        </p>
      </div>
    </div>
    <div class="scroll-down"><img src="../img/icons/red_triangle.svg"></div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HeroImg3',
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

<style scoped>
.hero {
  height: 100vh;
  width: 100vw;
  background: url('../img/lightcycle_moving_cropped.png');
	background-size: cover;
	background-repeat: no-repeat;
  filter: saturate(70%);
}
.hero-body {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  text-align: center;
  padding-bottom: 20vh;
  width: 80%;
}
.lead {
  width: 100%;
}

/* DESKTOP */ 
@media screen and (min-width: 768px){
  .hero {
    height: 100vh;
    width: 100vw;
    background: url('../img/background_image_land.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: saturate(70%);
  }
  .hero-body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container {
    margin-top: 0;
  }
  .lead-center {
    width: 60%;
    text-align: center;
  }
}
</style>
