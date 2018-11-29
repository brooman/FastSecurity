<template>
  <main>
    <div class="container">
      <div class="text-box">
        <h1 class="display-1"> {{ getLanguage.chooseColorTitle }} </h1>
        <span class="color-line" />
        <p class="lead"> {{ getLanguage.chooseColorH3 }} </p>
      </div>
      <div class="image-box">
        <transition 
          name="slide-fade" 
          mode="out-in"
        >
          <progressive-img
            :key="image"
            :src="image"
            class="bike-img"
            alt=""
          />
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

.text-box {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 5vh 0;
}

img, .bike-img {
	width: 100%;
	max-height: 500px;
	margin-bottom: 20px;
}

.progressive-image-wrapper {
	display: flex;
	justify-content: center;
}

.progressive-image-wrapper > img {
	max-width: 1000px;
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
	font-family: AG-Bold;
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
	margin-right: 10px;
	margin-left: 10px;
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
	transform: scale(1.6)
}


@media screen and (min-width: 768px) {
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	max-width: 70%;
}
	img, .bike-img {
		width: 80%;
	}
	.text-box {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		max-width: 35%;
		text-align: left;
	}
	.image-box {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
	.lead {
		margin-left: 0;
		margin-right: 0;
		width: 100%;
	}
	.colors {
		display: flex;
		width: 80%;
		justify-content: center;
	}
}
</style>
