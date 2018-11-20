<template>
  <div id="app">
    <Navbar />
    <HeroImg />
    <HeroText />
    <HeroImg2 />
    <Swiper /> 
    <Merch /> 
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HeroImg from './components/HeroImg.vue'
import HeroImg2 from './components/HeroImg2.vue'
import HeroText from './components/HeroText.vue'
import Swiper from './components/Swiper.vue'
import Merch from './components/Merch.vue'

export default {
	name: 'App',
	components: {
		Navbar,
		HeroImg,
		HeroImg2,
		HeroText,
		Swiper,
		Merch,
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
}

body {
  margin: 0;
  padding: 0;
  background: #111;
}
#app {
  font-family: 'AG-Bold', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
}

.break {
  height: 5px;
  width: 40%;
  background: linear-gradient(to right, cyan 0%, cyan 50%, blue 50%, blue 100%);
}
</style>
