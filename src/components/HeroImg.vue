<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="display-1 is-size-1">
          {{ getLanguage.titleh1 }}
        </h1>
        <h2 class="display-2">
          {{ getLanguage.titleh2 }}
        </h2>
      </div>
    </div>
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
  display: flex;
}
.container {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
}
.display-1 {
  color: #fff;
  text-shadow: 1rem 1rem 5rem #000; 
  line-height: 3rem;
}
.display-2 {
  margin-top: 2rem;
  color: #fff;
  text-shadow: 1rem 1rem 5rem #000;
  font-family: 'AG-Light';
  letter-spacing: 2px;
}

</style>
