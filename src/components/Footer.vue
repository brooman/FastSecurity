<template>
  <main>
    <div class="container">
      <div class="text-container">
        <h2 class="display-1"> {{ getLanguage.footerTitle }} </h2>
      </div>
    </div>
      <div
        class="contact-link" 
      ><a href="#"> KEEP ME INFORMED ></a>
      </div>
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
img {
	width: 80%;
	max-height: 150px;
	transform:rotateY(180deg);
}

.highlight {
	color: cyan;
}

@media screen and (min-width: 768px) {
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background: linear-gradient(black 10%, transparent), url('../img/lightcycle_moving.png');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		height: 100vh;
		width: 100vw;
		color: #fff;
	}
	.text-container {
		padding-bottom: 0vh;
		max-width: unset;
		text-align: center;
	}
}
</style>
