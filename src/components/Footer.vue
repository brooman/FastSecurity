<template>
  <main>
    <div class="container">
      <div class="text-container">
        <h2> {{ getLanguage.footerTitle }} </h2>
      </div>
    </div>
    <button
      class="contact-link" 
    >KEEP ME INFORMED >
    </button>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'Footer',
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
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	background: linear-gradient(black 10%, transparent), url('../img/lightcycle_moving_cropped_2.png');
	background-position: bottom;
	background-size:cover;
	background-repeat: no-repeat;
	height: 100vh;
	width: 100vw;
	color: #fff;
	padding-top: 10vh;
}

.container {
	margin-bottom: 10vh;

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
p {
	font-size: 18px;
	line-height: 27px;
	text-align: left;
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
	color: cyan;
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
