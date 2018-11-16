<template>
  <main>
    <div class="container">
      <h2>Choose color</h2>
      <span class="color-line" />
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
      <h3>Why not drive <span class="highlight">your</span> personal color?</h3>
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
export default {

	name: 'ChooseColor',
	data: function() {
		return {
			circles: [
				{ class: 'white', image: '/assets/images/whiteorange.png'},
				{ class: 'red', image: '/assets/images/red.png'},
				{ class: 'black', image: '/assets/images/blackred.png' },
				{ class: 'saab', image: '/assets/images/blueorange.png' },
			],
			selected: '',
			image: '/assets/images/whiteorange.png',
		}
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
	background: #181818;
	height: 100vh;
	width: 100vw;
	color: #fff;
}

.container {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
h2 {
	font-size: 3rem;
	margin-bottom: 20px;
}
img {
	width: 80%;
	max-height: 150px;
	transform:rotateY(180deg);
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

.color-line::after {
	display: block;
	content: '';
	height: 3px;
	width: 50vw;
	margin-bottom: 20px;
	background: linear-gradient(to right, #00205A 0%, #00205A 50%, cyan 50%, cyan 100%);
}
.highlight {
	color: cyan;
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