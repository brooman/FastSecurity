import 'normalize.css';
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import Buefy from 'buefy'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'buefy/dist/buefy.css'
import 'swiper/dist/css/swiper.css'
import store from '@/store/store'
import VueProgressiveImage from 'vue-progressive-image'


Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(Buefy)
Vue.use(VueAwesomeSwiper)
Vue.use(VueProgressiveImage)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

 
// require styles

 
