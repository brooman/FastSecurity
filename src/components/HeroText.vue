<template>
  <div class="hero">
    <div class="container">
      <h1 class="display-1">
        {{ getLanguage.heroTitle }}
      </h1>
      <span class="color-line" />
      <div class="text-container">
        <p class="lead">
          {{ getLanguage.heroText }}
        </p>
      </div>
      <button
        class="contact-link" 
        href="#"
      > KEEP ME INFORMED</button>
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
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 100vh;
  }
  .hero {
    font-family: AG-Bold;
    height: 100vh;
    line-height: 57px;
  }
  .display-1 {
    width: 60%;
    text-align: left;
    padding-bottom: 3vh;
    
  }
  .color-line {
    align-self: flex-start;
    width: 60%;
    margin: 0 auto;
  }
  .lead {
    padding-bottom: 3vh;
    padding-top: 3vh;
  }
</style>
