<template>
  <main>
    <div class="content-container">
      <div class="text-container">
        <h2 class="display-1"> {{ getLanguage.exteriorTitle }} </h2>
        <span class="color-line" />
        <p class="lead"> {{ getLanguage.exteriorP }} </p>
      </div>
    </div>
    <div class="side" />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

  name: 'Exterior',
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
	background: linear-gradient(black 40%, transparent), url('../img/lightcycle_moving_cropped_2.png');
	background-position: bottom;
	background-size: 170%;
	background-repeat: no-repeat;
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
.lead {
	width: 100%;
}

img {
	width: 80%;
	max-height: 150px;
	transform:rotateY(180deg);
}

.highlight {
	font-family: AG-Bold;
}

@media screen and (min-width: 768px ){
	main { background: none; }
	.side {
		display: block;
		background: url('../img/lightcycle_moving_cropped_2.png');
		background-position:bottom;
		background-size:auto;
		background-repeat: no-repeat;
		width: 50vw;
		height: 100vh;
	}
	.content-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-top: 0;
		width: 50vw;
	}
	.text-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		max-width: 50%;
		height: 100vh;
		text-align: left;
	}
	.lead {
		margin-left: 0;
		margin-right: 0;
		width: 100%;
	}
}
</style>
