<template>
  <nav 
    class="navbar" 
    role="navigation" 
    aria-label="main navigation"
  >
    <div class="navbar-start">
      <!--<img src="../assets/images/saab.png">-->
      <img src="../assets/images/logo.svg">
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <span 
          data-language="sv"
          @click="changeLanguage('sv')"
        >
          SV 
        </span>
        <span 
          data-language="en"
          @click="changeLanguage('en')"
        > 
          EN
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
//Commented out bc eslint breaks commit.

// import language from '../assets/lang.json'
// console.log(lang)

// const store = new Vuex.Store({
// 	state: {
// 		pickedLanguage: changeLanguage(lang)
// 	},
// 	mutations: {
// 		increment (state) {
// 			state.count++
// 		}
// 	}
// })
// export default {
// 	data: function() {
// 		return {
// 			lang: ''
// 		}
// 	},
// 	methods: {
// 		changeLanguage: function(lang) {
// 			lang = this.lang
// 		}
// 	}

// }
</script>

<style>
  img {
   width: 100px;
   max-height: 100px;
  }
  .navbar {
    display: flex;
    position: fixed !important;
    justify-content: space-between;
    width: 100%;
    background-color: transparent !important;
  }
  .navbar-start {
    max-width: 50%;
    padding-left: 20px;
  }
  .navbar-end {
    max-width: 50%;
    padding-right: 20px;
  }
</style>
