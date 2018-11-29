<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper 
    ref="mySwiper" 
    :options="swiperOption" 
    class="slideshow"
  >
    <!-- slides -->
    <swiper-slide class="slide"> <ChooseColor /> </swiper-slide>
    <swiper-slide class="slide"> <Interior /> </swiper-slide>
    <swiper-slide class="slide"> <Exterior /> </swiper-slide>
    <!-- Optional controls -->
    <div 
      slot="pagination" 
      class="swiper-pagination"
    />
    <div 
      slot="button-prev" 
      class="swiper-button-prev"
    />
    <div 
      slot="button-next" 
      class="swiper-button-next"
    />
  </swiper>
</template>
 
<script>
import ChooseColor from './ChooseColor.vue'
import Interior from './Interior.vue'
import Exterior from './Exterior.vue'
export default {
	name: 'Carrousel',
	components: {
		ChooseColor,
		Interior,
		Exterior,
	},
	data() {
		return {
			swiperOption: {
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
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
		this.swiper.slideTo(0, 1000, false)
	},
}
</script>


<style scoped>
.slideshow {
	height: 100vh;
}
.slide {
	color: #000;
}
</style>
