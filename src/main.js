import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'buefy/dist/buefy.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(VueAwesomeSwiper)

new Vue({
	render: h => h(App),
}).$mount('#app')

 
// require styles

 
