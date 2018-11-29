<template>
  <div id="app">
    <Modal ref="modal" />
    <button
      class="modal-open" 
      @click="toggleModal()"
    ><img src="./img/icons/mail.svg"></button>
    <Navbar />
    <HeroImg />
    <HeroText />
    <HeroImg3 />
    <Swiper /> 
    <HeroImg2 />
    <Merch />
    <ElFooto />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HeroImg from './components/HeroImg.vue'
import HeroImg2 from './components/HeroImg2.vue'
import HeroImg3 from './components/HeroImg3.vue'
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
    HeroImg3,
    HeroText,
    Swiper,
    HeroImg2,
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

const mailMessage = document.querySelector('.mail-message')
setTimeout(() => {
  mailMessage.textContent = 'Hey! Don\'t forget to leave your email down below.'
  mailMessage.classList.add('visible')

}, 20000)
setTimeout(() => {
  mailMessage.classList.remove('visible')

}, 40000)

mailMessage.addEventListener('click', () => {
  mailMessage.classList.remove('visible')
})
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
	width: 10rem;
	margin-bottom: 20px;
	background: linear-gradient(to right, #00205A 0%, #00205A 50%, #D51225 50%, #D51225 100%);
  align-self: center;
}

.modal-open {
    display: flex;
    justify-content: center;
    align-items: center;
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
  padding-bottom: 3vh;

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
  border-radius: 35px;
  width: 215px;
  height: 50px;
  font-size: 1rem;
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
  letter-spacing: 0.3px;
  text-align: left;
  padding-bottom: 3vh;
  line-height: 2.5rem;
  font-size: 1.2rem;
}
.mail-message {
  display: none;
  position: fixed;
  right: 5vw;;
  bottom: 18vh;
  max-width: 150px;
  background: rgba(0,0,0,0.5);
  border-radius: 5%;
  padding: 20px;
  z-index: 10;
}
.visible {
  display: block;
}
.scroll-down {
  position: relative;
  animation: jumpy 6s ease-in-out infinite;
	animation-direction: alternate;
	animation-delay: 2s;
}
@keyframes jumpy {
  0% {
    bottom: 0px;
  }
  10% {
    bottom: 10px;
  }
	20% {
		bottom: 0px;
	}
  30% {
    bottom: 10px;
  }
	40% {
		bottom: 0px;
	}
  50% {
    bottom: 10px;
  }
  100% {
    bottom: 10px;
  }
}

/* 'TOUCH' */
@media screen and (max-width: 768px){
  .display-1 {
    font-size: 2.5rem;
    line-height: 2.6rem;
  }

  .display-2 {
    font-size: 1.2rem;
  }

  .lead {
    font-size: 1.4rem;
    line-height: 1.5rem;
    width: 60%;
    margin-right: 0;
    margin-left: 0;
  }
  .modal-open {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    z-index: 99;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    height: 3rem;
    width: 3rem;
    border: 1px solid transparent;
    border-radius: 50%;
}
}
</style>
