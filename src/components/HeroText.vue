<template>
  <div class="hero">
    <div class="container">
      <h2 class="has-text-centered display-1">
        {{ getLanguage.heroTitle }}
      </h2>
      <span class="color-line" />
      <div class="text-container">
        <p class="lead">
          {{ getLanguage.heroText }}
        </p>
      </div>
      <div
        class="contact-link" 
      ><a href="#"> KEEP ME INFORMED ></a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'HeroText',
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
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 80vw;
    height: 100vh;
  }
  .hero {
    font-family: AG-Bold;
    height: 100vh;
    line-height: 57px;
  }
  h2 {
    max-width: 900px;
  }
</style>
