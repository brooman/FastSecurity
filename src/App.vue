<template>
  <div id="app">
    <Navbar />
    <HeroImg />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HeroImg from './components/HeroImg.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    HeroImg
  }
}
</script>

<style>
@font-face {
    font-family: "AG-Regular";
    src: url(assets/fonts/AktivGrotesk-Regular.otf)
}
@font-face {
    font-family: "AG-Light";
    src: url(assets/fonts/AktivGrotesk-Light.otf)
}
@font-face {
    font-family: "AG-Bold";
    src: url(assets/fonts/AktivGrotesk-Bold.otf)
}
@font-face {
    font-family: "AG-Medium";
    src: url(assets/fonts/AktivGrotesk-Medium.otf)
}

* {
  font-family: 'AG-Medium';
  color: oldlace;
}

body {
  margin: 0;
  padding: 0;
  background: #333;
}
#app {
  font-family: 'AG-Bold', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 4000px; /* Temporary for seeing scrolling */ 
  overflow: hidden;
}
</style>
