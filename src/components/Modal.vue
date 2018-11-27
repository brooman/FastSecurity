<template>
  <div 
    :class="{ 'is-active': active }" 
    class="modal"
  >
    <div class="modal-background" />
    <div class="modal-content">
      <div class="card">
        <div style="display: flex; justify-content: flex-end; overflow: visible;">
          <button @click="toggle()" class="close-button">X</button>
        </div>
        <div class="card-content">
          <p class="title">
            {{ getLanguage.modalTitle1 }}
          </p>
          <p class="subtitle">
            {{ getLanguage.modalSubtitle1 }}
          </p>
          <div class="field has-addons">
            <div class="control">
              <input 
                class="input" 
                type="text" 
                placeholder="E-mail"
              >
            </div>
            <div class="control">
              <a class="button is-info">
                {{ getLanguage.subscribe }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	data: function() {
		return {
			active: false
		};
	},
	computed: {
		...mapGetters([
			'getLanguage'
		]),
	},
	methods: {
		toggle () {
			this.active = !this.active
		}
	}
}
</script>

<style>
  .card{
    background-color: black;
  }

  .modal-content {
    overflow: visible !important;
  }
  
  .close-button {
    right: -1rem;
    top: -1rem;
    background-color: red;
    z-index: 99;
    position: relative;
    height: 3rem;
    width: 3rem;
    border: 1px solid transparent;
    border-radius: 50%;
  }
  .field{
    justify-content: center !important;
  } 

  .input-group {
    display: flex;
  }

  .text-input {
    width: 80%;
  }

  .btn-input {
    width: 20%;
  }
</style>
