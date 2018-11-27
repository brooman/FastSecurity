<template>
  <nav 
    class="navbar" 
    role="navigation" 
    aria-label="main navigation"
  >
    <div class="navbar-start">
      <img 
        src="../img/saab.png" 
        class="saab"
      >
      <img 
        src="../img/logo_fs/logo_transparent_white.svg" 
        class="fs"
      >
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <span
          class="active"
          value="en"
          @click="changeLanguage(en, 'en')"
        > 
          EN
        </span>
        <span
          value="sv"
          @click="changeLanguage(sv, 'sv')"
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
import { mapGetters } from 'vuex'
export default {
	data: function() {
		return {
			language: language,
			sv: language.sv,
			en: language.en,
		}
	},
	computed: {
		...mapGetters([
			'getLanguage'
		]),
	},
	methods: {
		...mapMutations([
			'CHANGE_LANGUAGE'
		]),
		changeLanguage: function(pickedLanguage, name) {
			this.CHANGE_LANGUAGE(pickedLanguage)

			//Remove active classes
			this.$el.querySelectorAll('.active').forEach(btn => {
				btn.classList.remove('active')
			})

			//Add active to selected element
			this.$el.querySelector(`span[value=${name}]`).classList.add('active')

		}
	}
}
</script>

<style scoped>
  .navbar {
    display: flex;
    position: absolute !important;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2) !important;
  }
  .navbar-start {
    display:flex;
    align-items: center;
    padding-left: 20px;
  }
  .saab {
    max-height: 100px;
  }
  .fs {
    height: 8rem;
    max-height: 200px;
    align-self: flex-start;
  }
  .navbar-end {
    max-width: 50%;
    padding-right: 20px;
  }
  .navbar-item {
    font-size: 2rem;
    font-family: 'AG-Light';
    cursor: pointer;
  }
  .active {
    font-family: 'AG-Bold';
  }

  @media screen and (max-width: 768px){
    .saab {
      display: none;
    }
  }
</style>
