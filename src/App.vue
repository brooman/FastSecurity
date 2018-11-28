<template>
  <div id="app">
    <Modal ref="modal" />

    <!-- TEMPORARY MODAL BUTTON -->
    <button 
      class="modal-open" 
      @click="toggleModal()"
    >[-]</button>

    <Navbar />
    <HeroImg />
    <HeroText />
    <HeroImg2 />
    <Swiper /> 
    <Merch />
    <ElFooto />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HeroImg from './components/HeroImg.vue'
import HeroImg2 from './components/HeroImg2.vue'
import HeroText from './components/HeroText.vue'
import Swiper from './components/Swiper.vue'
import Merch from './components/Merch.vue'
import ElFooto from './components/Footer.vue'
import Modal from './components/Modal.vue'

export default {
	name: 'App',
	components: {
		Navbar,
		HeroImg,
		HeroImg2,
		HeroText,
		Swiper,
		Merch,
		ElFooto,
		Modal,
	},
	methods: {
		toggleModal() {
			this.$refs.modal.toggle()
		}
	}
}
</script>

<style>
@font-face {
    font-family: "AG-Regular";

    src: url(./fonts/AktivGrotesk-Regular.otf)
}
@font-face {
    font-family: "AG-Light";
    src: url(./fonts/AktivGrotesk-Light.otf)
}
@font-face {
    font-family: "AG-Bold";
    src: url(./fonts/AktivGrotesk-Bold.otf)
}
@font-face {
    font-family: "AG-Medium";
    src: url(./fonts/AktivGrotesk-Medium.otf)
}

* {
  font-family: 'AG-Medium';
  color: #fff; 
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background: #0E0E0E;
}
#app {
  font-family: 'AG-Bold', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
}

.color-line::after {
	display: block;
	content: '';
	height: 3px;
	width: 15rem;
	margin-bottom: 20px;
	margin-bottom: 20px;
	background: linear-gradient(to right, #00205A 0%, #00205A 50%, #D51225 50%, #D51225 100%);
}

.modal-open {
    background-color: red;
    z-index: 99;
    position: fixed;
    bottom: 4rem;
    right: 4rem;
    height: 3rem;
    width: 3rem;
    border: 1px solid transparent;
    border-radius: 50%;
}

.display-1 {
  color: #fff;
  text-shadow: 1rem 1rem 5rem #000; 
  font-size: 3rem;
  line-height: 3.1rem;
}
.display-2 {
  margin-top: 2rem;
  color: #fff;
  font-size: 1.5rem;
  text-shadow: 1rem 1rem 5rem #000;
  font-family: 'AG-Light';
  letter-spacing: 2px;
}

.contact-link {
  background: none;
  border: 3px solid #D51225;
  border-radius: 12px;
  width: 215px;
  height: 50px;
  font-size: 1.2rem;
  font-family: 'AG-Regular';
  color: #fff;
  text-align: center;
  text-decoration: none;
}

.contact-link:hover {
  cursor: pointer;
  transition: border 0.3s;
  border: 3px solid #00205A;
  color: #fff;
}

.lead {
  font-family: 'AG-Light';
  word-spacing: 1px;
  width: 60%;
  margin-right: auto;
  margin-left: auto;
  line-height: 3rem;
  font-size: 1.8rem;
}

/* 'TOUCH' */
@media screen and (max-width: 768px){
  .display-1 {
    font-size: 3rem;
    line-height: 3.1rem;
  }

  .display-2 {
    font-size: 1.2rem;
  }

  .lead {
    font-size: 1.4rem;
    line-height: 1.5rem;
    width: 100%;
  }
}
</style>
