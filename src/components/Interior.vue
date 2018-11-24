<template>
  <main>
    <div class="container">
      <div class="text-container">
        <h2> {{ getLanguage.interiorTitle }} </h2>
        <span class="color-line" />
        <p> {{ getLanguage.interiorP }} </p>
      </div>
    </div>
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
	background: linear-gradient(black 40%, transparent), url('../img/UI.jpg');
	background-position: bottom;
	background-size: 170%;
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
	max-width: 240px;
	text-align: left;
}
h2 {
	font-size: 50px;
	line-height: 57px;
	margin-bottom: 20px;
	font-family: 'AG-Bold';
}
img {
	width: 100%;
}

p {
	font-size: 18px;
	line-height: 27px;
	margin-bottom: 20px;
	text-align: left;
	font-family: 'AG-Light';
}
</style>
