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
        <div class="return-button-container">
          <a 
            class="return-button" 
            @click="previous()"
          >
            <svg 
              viewBox="0 0 10 11" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M4.24268 1L8.48532 5.24264L4.24268 9.48528" 
                stroke="black" 
                stroke-width="2"
              />
            </svg>
          </a>
        </div>
        <!-- PAGE 1 --> 
        <div 
          :class="{ active: activePage === 1 }" 
          class="card-content"
        >
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
              <a 
                class="button is-info"
                @click="setActive(2)"
              >
                {{ getLanguage.subscribe }}
              </a>
            </div>
          </div>

                <a 
              class="button is-text"
              @click="setActive(3)"
            >{{ getLanguage.modalFolderLink }} > </a>
        </div><!--END OF PAGE 1-->

        <!-- PAGE 2 --> 
        <div 
          :class="{ active: activePage === 2 }" 
          class="card-content"
        >
          <p class="title">
            {{ getLanguage.modalTitle2 }}
          </p>
          <p class="subtitle">
            {{ getLanguage.modalSubtitle2 }}
          </p>

            <a 
              class="button is-text"
              @click="setActive(3)"
            >{{ getLanguage.modalFolderLink }} > </a>
        </div><!--END OF PAGE 2-->


        <!-- PAGE 3 -->
        <div 
          :class="{ active: activePage === 3 }" 
          class="card-content"
        >
          <p class="title">
            {{ getLanguage.modalTitle3 }}
          </p>
          <p class="subtitle">
            {{ getLanguage.modalSubtitle3 }}
          </p>
          <!-- PAGE 3 FORM -->
          <input 
            style="width: 100%" 
            class="input" 
            type="text" 
            placeholder="Full name"
          >
          <div style="display: flex;">
            <input 
              style="width: 50%"
              class="input" 
              type="text" 
              placeholder="Postal code"
            >
            <input 
              style="width: 50%" 
              class="input" 
              type="text" 
              placeholder="City"
            >
          </div>
          <div style="display: flex;">
            <input 
              style="width: 50%" 
              class="input" 
              type="text" 
              placeholder="Country"
            >
            <input 
              class="button" 
              type="submit" 
              value="Send"
            >
          </div> 


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
			activePage: 1,
			previousPage: 1,
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
    
		setActive (id) {
			this.previousPage = this.activePage
			this.activePage = id
		},
    
		previous () {
			this.activePage = this.previousPage
		}
	}
}
</script>

<style scoped>

  .modal {
    justify-content: flex-end;
    align-items: flex-end;
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
  
  .return-button-container {
    height: 0px;
    width: 100%;
    display: flex;
  }

  .return-button {
    height: 2rem;
    width: 2rem;
  }

  .return-button > svg{
    transform: rotate(180deg);
    padding: 3px;
    height: 100%;
    width: 100%;
  }
  .modal-content {
    overflow: visible !important;
    margin: 5rem;
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
