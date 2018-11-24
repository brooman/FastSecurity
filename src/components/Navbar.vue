<template>
  <nav 
    class="navbar" 
    role="navigation" 
    aria-label="main navigation"
  >
    <div class="navbar-start">
      <img src="../img/saab.png" class="saab">
      <img src="../img/logo_fs/logo_transparent_white.svg" class="fs">
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <span 
          @click="changeLanguage(en)"
        > 
          EN
        </span>
        <span 
          @click="changeLanguage(sv)"
        >
          SV 
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
  .navbar {
    display: flex;
    position: absolute !important;
    justify-content: space-between;
    width: 100%;
    background-color: transparent !important;
  }
  .navbar-start {
    display:flex;
    padding-left: 20px;
  }
  .saab {
    width: 50px;
    max-height: 50px;
  }
  .fs {
    align-self: flex-start;
  }
  .navbar-end {
    max-width: 50%;
    padding-right: 20px;
  }
</style>
