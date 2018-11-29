<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="display-1">
          {{ getLanguage.titleh1 }}
        </h1>
        <h2 class="display-2">
          {{ getLanguage.titleh2 }}
        </h2>
      </div>
    </div>
    <div class="scroll-down"><img src="../img/icons/red_triangle.svg"></div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HeroImg',
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
  background: url('../img/background_image_port.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
  filter: saturate(70%);
}

.container {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-content: center;
}

/* DESKTOP */ 
@media screen and (min-width: 768px){
  .hero {
    height: 100vh;
    background: url('../img/background_image_land.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
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
}

</style>
