<template>
	<holder-component>
		<template slot="header">
			<h1> {{ title }} </h1>
			<div class="color-line"></div>
		</template>
		<template slot="image">
			<img
				:src="image" 
				alt="Image of a cool thing"
			>
		</template>
		<template slot="text">
			<h2>{{ text }}</h2>
		</template>
	</holder-component>
	</template>
<script>
import HolderComponent from './HolderComponent.vue'

export default {
	name: 'Exterior',
	data: function() {
		return {
			title: 'Exterior',
			image: '/assets/images/exterior.png',
			text: 'The Bike brings exterior to a new level.'
		}
	},
	components: {
		HolderComponent,
	}
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
	justify-content: space-around !important;
	align-items: center;
	height: 100vh;
}
.color-line::after {
	display: block;
	content: '';
	height: 3px;
	width: 50vw;
	margin-top: 20px;
	background: linear-gradient(to right, #00205A 0%, #00205A 50%, cyan 50%, cyan 100%);
}

img {
	width: 50%;
	border-radius: 50%;
}

h1 {
	font-size: 3rem;
	margin-bottom: 20px;
}
h2 {
	font-size: 2rem;
	margin-bottom: 20px;
}
.color-line::after {
	display: block;
	content: '';
	height: 3px;
	width: 50vw;
	margin-top: 20px;
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