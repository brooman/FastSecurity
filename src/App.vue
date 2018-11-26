<template>
  <div id="app">
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
	height: 6px;
	width: 15rem;
	margin-bottom: 20px;
	background: linear-gradient(to right, #00205A 0%, #00205A 50%, #D51225 50%, #D51225 100%);
}

.display-1 {
  color: #fff;
  text-shadow: 1rem 1rem 5rem #000; 
  font-size: 5rem;
  line-height: 5.1rem;
}
.display-2 {
  margin-top: 2rem;
  color: #fff;
  font-size: 3rem;
  text-shadow: 1rem 1rem 5rem #000;
  font-family: 'AG-Light';
  letter-spacing: 2px;
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
    font-size: 1.5rem;
  }

  .lead {
    font-size: 1.4rem;
    line-height: 1.5rem;
  }
}
</style>
