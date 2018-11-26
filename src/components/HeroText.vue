<template>
  <div class="hero">
    <div class="container">
      <h1 class="has-text-centered is-size-1">
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
      >KEEP ME INFORMED ></button>
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
    justify-content: space-around;
    align-items: center;
    width: 80vw;
    height: 100vh;
  }
  .hero {
    font-family: AG-Bold;
    height: 100vh;
    line-height: 57px;
  }
  .lead {
    font-family: 'AG-Light';
    word-spacing: 1px;
    max-width: 280px;
    line-height: 29px;
    font-size: 18px;
  }
  .is-cyan {
    background-color: aqua;
    border-color: transparent;
    color: #000;
  }
  .contact-link {
    position: relative;
    bottom: 10px;
    text-decoration: none;
    background: #D51225;
    width: 215px;
    height: 50px;
    border: none;
    border-radius: 50px;
  }
</style>
