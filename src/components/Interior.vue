<template>
  <main>
    <div class="content-container">
      <div class="text-container">
        <h2 class="display-1"> {{ getLanguage.interiorTitle }} </h2>
        <span class="color-line" />
        <p class="lead"> {{ getLanguage.interiorP }} </p>
      </div>
    </div>
    <div class="side" />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

	name: 'Interior',
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
	height: 100vh;
	width: 100vw;
	color: #fff;
}

.side {
	display: none;
}

.content-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 10vh;
}
.text-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 70%;
}

img {
	width: 100%;
}

p {
	font-size: 2rem;
	line-height: 2.1rem;
	margin-bottom: 20px;
	text-align: center;
	font-family: 'AG-Light';
}

.highlight {
	font-family: AG-Bold;
}

@media screen and (min-width: 768px ){
	.side {
		display: block;
		background: url('../img/UI.jpg');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		width: 50vw;
		height: 100vh;
	}

	.content-container {
		width: 50vw;
	}
}

@media screen and (max-width: 768px){
	main {
		background: linear-gradient(black 40%, transparent), url('../img/UI.jpg');
		background-position: bottom;
		background-size: 170%;
		background-repeat: no-repeat;
	}
}
</style>
