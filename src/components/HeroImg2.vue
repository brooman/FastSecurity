<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="display-1">
          {{ getLanguage.subHeroTitleH1 }}
        </h1>
        <h2 class="display-2">
          {{ getLanguage.subHeroTitleH2 }}
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'HeroImg2',
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

/* DESKTOP */ 
@media screen and (min-width: 768px){
  .hero-body {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    margin-top: 0;
  }
}
</style>
