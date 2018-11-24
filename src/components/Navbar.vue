<template>
  <nav 
    class="navbar" 
    role="navigation" 
    aria-label="main navigation"
  >
    <div class="navbar-start">
      <!--<img src="../assets/images/saab.png">-->
      <img src="../img/logo.svg">
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <span 
          @click="changeLanguage(sv)"
        >
          SV 
        </span>
        <span 
          @click="changeLanguage(en)"
        > 
          EN
        </span>
      </div>
    </div>
  </nav>
</template>

<script>

import language from '../assets/lang.json'
import { mapMutations } from 'vuex'
export default {
	data: function() {
		return {
			language: language,
			sv: language.sv,
			en: language.en
		}
	},
	methods: {
		...mapMutations([
			'CHANGE_LANGUAGE'
		]),
		changeLanguage: function(pickedLanguage) {
			this.CHANGE_LANGUAGE(pickedLanguage)
		}
	}
}
</script>

<style scoped>
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
