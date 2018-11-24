<template>
  <main>
    <div class="container">
      <h2> {{ getLanguage.chooseColorTitle }} </h2>
      <span class="color-line" />
      <h3> {{ getLanguage.choseColorH3 }} </h3>
      <transition 
        name="slide-fade" 
        mode="out-in"
      >
        <img
          :key="image"
          :src="image"
          alt=""
        >
      </transition>
      <div class="colors">
        <div 
          v-for="(circle, index) in circles"
          :key="index"
          :class="['circle', circle.class, {'active': selected == circle}]"
          @click="selected = circle, selectedImage(circle)"
        />
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'ChooseColor',
	data: function() {
		return {
			circles: [
				{ class: 'white', image: 'img/whiteorange2.png'},
				{ class: 'red', image: 'img/red2.png'},
				{ class: 'black', image: 'img/blackred2.png' },
				{ class: 'saab', image: 'img/blueorange2.png' },
			],
			selected: '',
			image: 'img/blackred2.png',
		}
	},
	computed: {
		...mapGetters([
			'getLanguage'
		]),
	},
	methods: {
		selectedImage: function(circle) {
			this.image = circle.image
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100vw;
}

.container {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
h2 {
	font-size: 50px;
	line-height: 57px;
	margin-bottom: 20px;
	font-family: 'AG-Bold';
}
h3 {
	font-size: 18px;
	line-height: 27px;
	margin-bottom: 20px;
	margin-left: 25vw;
	margin-right: 20vw;
	text-align: left;
	font-family: 'AG-Light';
}
img {
	width: 100%;
	margin-bottom: 20px;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}

.highlight {
	color: #00205A;
}
.colors {
	display: flex;
	width: 100%;
	justify-content: center;
}
.circle {
	content: '';
	height: 20px;
	width: 20px;
	border-radius: 50px;
	margin-left: 20px;
}
.white {
	background: #fff;
}
.black {
	background: #000;
}
.red {
	background: #DA2032;
}
.saab {
	background: #00205A;
}
.active {
	border: 2px solid orange;
}
</style>
