<template>
  <div 
    :class="{ 'is-active': active }" 
    class="modal"
  >
    <div class="modal-background" />
    <div class="modal-content">
      <div class="card">
        <div class="close-button-container">
          <button 
            class="close-button" 
            @click="toggle()"
          >X</button>
        </div>

        <!-- PAGE 1 --> 
        <div class="card-content active">
          <p class="title">
            {{ getLanguage.modalTitle1 }}
          </p>
          <p class="subtitle">
            {{ getLanguage.modalSubtitle1 }}
          </p>

          <!-- TEXT INPUT PAGE 1-->
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

          <!-- CHECKBOX PAGE 1 -->
          <li class="checkbox">
            <span class="checkbox">
              <input 
                type="checkbox" 
                :checked="checkboxChecked"
              >
            </span>
            <a class="button is-text">{{ getLanguage.modalFolderLink }} > </a>
          </li>
        </div><!--END OF PAGE 1-->

        <!-- PAGE 2 --> 
        <div class="card-content">
          <p class="title">
            {{ getLanguage.modalTitle2 }}
          </p>
          <p class="subtitle">
            {{ getLanguage.modalSubtitle2 }}
          </p>

          <!-- CHECKBOX PAGE 2 -->
          <li class="checkbox">
            <span class="checkbox">
              <input 
                type="checkbox" 
                :checked="checkboxChecked"
              >
            </span>
            <a class="button is-text">{{ getLanguage.modalFolderLink }} > </a>
          </li>
        </div><!--END OF PAGE 2-->


        <!-- PAGE 3 -->
        <div class="card-content">
          <p class="title">
            {{ getLanguage.modalTitle3 }}
          </p>
          <p class="subtitle">
            {{ getLanguage.modalSubtitle3 }}
          </p>

          <!-- CHECKBOX PAGE 3 -->
          <li class="checkbox">
            <span class="checkbox">
              <input 
                type="checkbox" 
                :checked="checkboxChecked"
              >
            </span>
            <a class="button is-text">{{ getLanguage.modalFolderLink }} > </a>
          </li>


        </div><!--END OF PAGE 3-->
      </div><!-- .card -->
    </div><!-- .modal-content -->
  </div><!-- .modal -->
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	data: function() {
		return {
			active: false,
			checkboxChecked: false
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
		},
  
		checkbox () {
			this.checkboxChecked = !this.checkboxChecked
		}
	}
}
</script>

<style scoped>
  .card{
    background-color: black;
  }

  li.checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .close-button-container {
    display: flex; 
    justify-content: flex-end;
    overflow: visible;
    height: 0px;
  }

  .card-content {
    display: none;
  }
  .card-content.active {
    display: block;
  }

  /* CHECKBOXES ARE NOT EASY */
  .checkbox > input[type=checkbox], input[type=checkbox]:checked {
    box-sizing: border-box;
    padding: 0;
    width: 1.5rem;
    height: 1.5rem;
  }
  .checkbox > a{
    line-height: 1rem;
    font-size: 1rem;
  }

  .checkbox > input[type=checkbox]::after {
    content: '';
    display: inline-block;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid #222;
    border-radius: 3px;
    background-color: #fff;
  }
  .checkbox > input[type=checkbox]:checked::after {
      background-color: #00205A;
      border: 2px solid #00205A;
  }
  .checkbox > input[type=checkbox]:before {
    content: "";
    display: block;
    opacity: 0;
  }

  .checkbox > input[type=checkbox]:checked::before {
    content: "";
    display: block;
    position: absolute;
    margin: 0px;
    width: 0.6rem;
    height: 1.1rem;
    left: 30%;
    z-index: 99;
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(34deg);
    transition: opacity 0.3s, transform 0.3s;
    opacity: 1;
  }
  
  /* End of checkboxes */ 
  
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
