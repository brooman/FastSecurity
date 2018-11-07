<template>
  <main>
    <div class="container">
      <h2>Choose color</h2>
      <span class="color-line" />
      <img 
        src="../assets/images/choose-color-bike.png" 
        alt=""
      >
      <h3>Why not drive <span class="highlight">your</span> personal color?</h3>
      <div class="colors">
        <div 
          class="circle white"
          @click="$event.target.classList.toggle('active')"
        />
        <div 
          class="circle black"
          @click="$event.target.classList.toggle('active')"
        />
        <div 
          class="circle cyan"
          @click="$event.target.classList.toggle('active')"
        />
        <div 
          class="circle saab"
          @click="$event.target.classList.toggle('active')"
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
			
		}
	},
};
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
	height: 20%;
	width: 80%;
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
.cyan {
	background: cyan;
}
.saab {
	background: #00205A;
}
.active {
	border: 2px solid orange;
}
</style>