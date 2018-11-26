<template>
  <main>
    <div class="container">
      <div class="text-container">
        <h2 class="display-1"> {{ getLanguage.exteriorTitle }} </h2>
        <span class="color-line" />
        <p class="lead"> {{ getLanguage.exteriorP }} </p>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

	name: 'Exterior',
	data: function() {
		return {
			
		}
	},
	computed: {
		...mapGetters([
			'getLanguage'
		]),
	},
	
	methods: {

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
	display: flex;
	align-items: flex-start;
	justify-content: center;
	background: linear-gradient(black 30%, transparent), url('../img/lightcycle_moving_cropped_2.png');
	background-position: bottom;
	background-size:cover;
	background-repeat: no-repeat;
	height: 100vh;
	width: 100vw;
	color: #fff;
	padding-top: 10vh;
}

.container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.text-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 70%;
}

p {
	font-size: 2rem;
	line-height: 2.1rem;
	margin-bottom: 20px;
	text-align: center;
	font-family: 'AG-Light';
}

p {
	letter-spacing: 0.8px;
}
img {
	width: 80%;
	max-height: 150px;
	transform:rotateY(180deg);
}

.highlight {
	font-family: AG-Bold;
}
</style>
