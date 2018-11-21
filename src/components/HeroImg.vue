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
  background: url('../assets/images/future.jpeg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
  filter: saturate(70%);
}
.display-1{
  color: #fff;
  font-size: 5rem;
  line-height: 5rem;
  text-shadow: 1rem 1rem 5rem #000; 
}
.display-2{
  color: #fff;
  font-size: 3rem;
  text-shadow: 1rem 1rem 5rem #000;
}
.hero-body {
  display: flex;
  align-items: center;
  text-align: center;
}

</style>
