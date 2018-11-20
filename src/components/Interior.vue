<template>
  <main>
    <div class="container">
      <div class="text-container">
        <h2>Interior</h2>
        <h4>FastSecurity 1.0 brings interior to a new level.</h4>
        <span class="color-line" />
        <p>We've worked hard on every detail to make you feel special.</p>
      </div>
      <div class="outline-circles">
        <div class="small-circle" />
        <div class="big-circle" />
      </div>
    </div>
  </main>
</template>

<script>
export default {

	name: 'Interior',
	data: function() {
		return {
			
		}
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
	background: linear-gradient(black 40%, transparent), url('../img/whiteorange.png');
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
	max-width: 240px;
	text-align: left;
}
h2 {
	font-size: 3rem;
	margin-bottom: 20px;
	align-self: flex-start;
}
h4 {
	font-size: 1.5rem;
	margin-bottom: 10px;
}
img {
	width: 80%;
	max-height: 150px;
	transform:rotateY(180deg);
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

.outline-circles {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex-direction: column;
	width: 100vw;
	margin-top: 5vh;
}

.small-circle {
	position: relative;
	right: -30px;
	width: 40px;
	height: 40px;
	border-radius: 20px;
	border: 2px solid cyan;
	align-self: flex-end;
	margin-top: 20px;
}
.big-circle {
	position: relative;
	right: 20px;
	margin-top: -25px;
	width: 100px;
	height: 100px;
	border-radius: 50px;
	border: 2px solid cyan;
	align-self: flex-end;
}
</style>
