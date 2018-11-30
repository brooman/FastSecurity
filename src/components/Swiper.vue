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

.swiper-button-prev, .swiper-button-next {
	top: calc(100vh - 74px);
	background: url('../img/icons/red_triangle.svg') no-repeat;
	background-size: contain;
	width: 60px;
	height: 100px;
	position: absolute;
}

.swiper-button-disabled {
	opacity: 0 !important;
}
.swiper-button-prev {
	transform: rotate(90deg);
	animation: shaky-left 6s ease-in-out infinite;
	animation-direction: alternate;
	animation-delay: 2s;
}

.swiper-button-next {
	transform: rotate(-90deg);
	animation: shaky-right 6s ease-in-out infinite;
	animation-direction: alternate;
	animation-delay: 2s;
}


@keyframes shaky-right {
  0% {
    right: 0px;
  }
  10% {
    right: 10px;
  }
	20% {
		right: 0px;
	}
  30% {
    right: 10px;
  }
	40% {
		right: 0px;
	}
  50% {
    right: 10px;
  }
  100% {
    right: 10px;
  }
}


@keyframes shaky-left {
 0% {
    left: 0px;
  }
  10% {
    left: 10px;
  }
	20% {
		left: 0px;
	}
  30% {
    left: 10px;
  }
	40% {
		left: 0px;
	}
  50% {
    left: 10px;
  }
  100% {
    left: 10px;
  }
}
</style>
