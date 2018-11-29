<template>
  <main>
    <div class="container">
      <div class="text-container">
        <h2 class="display-1"> {{ getLanguage.footerTitle }} </h2>
      </div>
    </div>
    <button
      class="contact-link" 
      href="#"
      @click="openModal()"
    > {{ getLanguage.keepMeInformed.toUpperCase() }}<img 
      src="../img/icons/arrow.svg" 
      alt="" 
      style="transform: rotate(360deg); width: 10px; height: 10px;"
    ></button>
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
		openModal () {
			this.$parent.toggleModal()
		}
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
	background: linear-gradient(black -15%, transparent), url('../img/city_portrait.jpg');
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

@media screen and (min-width: 768px) {
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background: linear-gradient(black 10%, transparent), url('../img/background_image_land.png');
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
