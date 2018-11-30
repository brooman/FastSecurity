import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)


// Vuex to manage state of our components
import language from '../assets/lang.json'
export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    language: language.en
  },
  getters: {
    getLanguage: state => {
      return state.language
    }
  },
  mutations: {
    // Check if language is being requested to change and change it accordingly.
    CHANGE_LANGUAGE: (state, language) => {
      state.language = language
    }
  },
  actions: {
    setLanguage ({commit}, language) {
      commit('setLanguage', language)
    },
  }
})
