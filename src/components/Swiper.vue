<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper 
    ref="mySwiper" 
    :options="swiperOption" 
    class="slideshow"
  >
    <!-- slides -->
    <swiper-slide class="slide"> <ChooseColor /> </swiper-slide>
<<<<<<< HEAD
    <swiper-slide class="slide"> <Interior /> </swiper-slide>
=======
    <swiper-slide class="slide"> <Exterior /> </swiper-slide>
>>>>>>> feature/Exterior
    <!-- Optional controls -->
    <div 
      slot="pagination" 
      class="swiper-pagination"
    />
  </swiper>
</template>
 
<script>
import ChooseColor from './ChooseColor.vue'
<<<<<<< HEAD
import Interior from './Interior.vue'
=======
import Exterior from './Exterior.vue'
>>>>>>> feature/Exterior
export default {
	name: 'Carrousel',
	components: {
		ChooseColor,
<<<<<<< HEAD
		Interior,
=======
		Exterior,
>>>>>>> feature/Exterior
	},
	data() {
		return {
			swiperOption: {
				pagination: {
					el: '.swiper-pagination'
				},
			}
		}
	},
	computed: {
		swiper() {
			return this.$refs.mySwiper.swiper
		}
	},
	mounted() {
		this.swiper.slideTo(3, 1000, false)
	},
}
</script>


<style scoped>
    .slideshow {
        height: 100vh;
    }
    .slide {
        background-color: #414141;
        color: #000;
    }
</style>
