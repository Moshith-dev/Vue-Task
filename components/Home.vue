<template>
  <section class="bg-gray-950 pt-20 ">
    <div class="z " style="position: relative; background-image:
                          url('https://prium.github.io/Shape/assets/img/bg-img/home-header.png'); background-position: center;
                          background-repeat: no-repeat; background-size: cover;">
      <div class=" w-[100%] h-full"
        style="background-image: url('https://prium.github.io/Shape/assets/img/bg-img/appland_bg_companies.svg');  background-position: bottom; background-repeat: no-repeat; background-size: contain; position: relative; ">
  
        <div class="flex flex-col items-center pt-[130px]  mt-8  gap-3">
          <h1 class=" font-medium text-white md:text-[75px] leading-[70px] anim-slide-up text-center ">
            An attractive landing
            <span class="absolute hidden md:block" style="
                              background-image: url('https://prium.github.io/Shape/assets/img/illustrations/shapes-13.png'); 
                              background-size: contain; 
                              background-repeat: no-repeat; 
                              background-position: center; 
                              left: 93%;
                              top: -28%;
                              width: 150px;
                              height: 100px;
                            "></span><br>
            for your mobile app.
          </h1>
          <p class="my-6 text-4xl text-center text-gray-500 capitalize md:my-10 md:text-3xl lg:text-3xl anim-slide-up">
            The fastest way to assemble beautiful screens and then <br class="hidden md:block" />
            output clean, reusable code.
          </p>
          <div class="relative flex flex-col justify-center gap-4 pb-10 md:flex-row md:gap-0 md:pb-20 anim-slide-up">
            <input type="email" placeholder="Your Email"
              class="w-full px-4 py-3 text-base font-bold bg-[#2f314b] rounded md:w-auto md:px-12 md:py-6 lg:text-[22px] focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <button
              class="w-full px-4 py-3 text-base font-bold text-white bg-indigo-600 rounded md:w-auto md:px-10 md:py-6 md:ml-10 lg:text-[22px]  hover:bg-indigo-500">
              Get Access
            </button>
          </div>
  
          <div class="-z-10 px-10">
            <div class="flex flex-col items-center justify-center">
              <img class="absolute w-[13%] md:w-[8%] top-[35%] left-[5%] md:left-[18%] anim-slide-up"
                src="https://prium.github.io/Shape/assets/img/illustrations/home/appland_shapes2.png" alt="">
              <img class="absolute w-[10%] md:w-[8%] top-[35%] right-[5%] md:right-[18%] anim-slide-up"
                src="https://prium.github.io/Shape/assets/img/illustrations/home/appland_shapes4.png" alt="">
              <img class="absolute w-[8%] md:w-[8%] top-[60%] left-[%] md:left-[15%] anim-slide-up"
                src="https://prium.github.io/Shape/assets/img/illustrations/home/appland_shapes3.png" alt="">
  
              <img class="w-full max-w-[950px] relative anim-slide-up"
                src="https://prium.github.io/Shape/assets/img/gallery/iPad-Pro-Mockup.png" alt="">
            </div>
          </div>
        </div>
        <div class="w-full py-8 bottom-20 relative"> 
          <div class="container mx-auto">
            <div class="flex justify-center">
              <div class="w-full lg:w-4/5 xl:w-3/4 text-center">
                <h6 class="mb-8 text-gray-200 font-bold text-sm md:text-base uppercase tracking-wider relative z-10">
                  Trusted by Companies Like This
                </h6>
  
                <div class="relative logo-carousel" ref="carouselContainer">
                  <div class="flex transition-transform duration-300 ease-in-out" :style="carouselStyle">
                    <div v-for="(logo, index) in allLogos" :key="`logo-${index}`"
                      class="flex-shrink-0 px-6 md:px-8 w-1/3 md:w-1/4 lg:w-1/5">
                      <img :src="logo.src" :alt="logo.name" class="h-8 md:h-10 w-auto mx-auto object-contain" />
                    </div>
                  </div>
  
                  <!-- Navigation Buttons -->
                  <button @click="prevSlide"
                    class="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
  
                  <button @click="nextSlide"
                    class="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
  
                  <!-- Dots -->
                  <div class="flex justify-center gap-2 mt-6">
                    <button v-for="(_, index) in Math.ceil(logos.length / itemsPerView)" :key="`dot-${index}`"
                      @click="goToSlide(index)" :class="[
                          'w-2 h-2 rounded-full transition-all duration-300',
                          currentSlide === index ? 'bg-blue-500 w-4' : 'bg-gray-400'
                        ]">
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import { defineComponent, ref, computed, onMounted, onBeforeUnmount } from 'vue'

  

interface Logo {
  name: string
  src: string
}

export default defineComponent({
  name: 'LogoCarousel',
  setup() {

    onMounted(() => {
    const animatedSections = document.querySelectorAll(".anim-slide-up");

    const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // Unobserve to trigger the animation only once
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the element is visible
  );

  animatedSections.forEach((section) => observer.observe(section));
});

    const logos: Logo[] = [
      { name: 'Microsoft', src: 'https://prium.github.io/Shape/assets/img/logos/airbnb-logo.png' },
      { name: 'Airbnb', src: 'https://prium.github.io/Shape/assets/img/logos/google-logo.png' },
      { name: 'Google', src: 'https://prium.github.io/Shape/assets/img/logos/Spotify_Logo.png' },
      { name: 'Spotify', src: 'https://prium.github.io/Shape/assets/img/logos/Paypal-logo.png' },
      { name: 'PayPal', src: 'https://prium.github.io/Shape/assets/img/logos/microsoft-logo.png' }
    ]

    const currentSlide = ref(0)
    const itemsPerView = ref(5)
    const autoplayInterval = ref<number | null>(null)
    const carouselContainer = ref<HTMLElement | null>(null)

    // Double the logos array for infinite scroll effect
    const allLogos = computed(() => [...logos, ...logos])

    const carouselStyle = computed(() => ({
      transform: `translateX(-${currentSlide.value * (100 / itemsPerView.value)}%)`
    }))

    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        itemsPerView.value = 3
      } else if (window.innerWidth < 1024) {
        itemsPerView.value = 4
      } else {
        itemsPerView.value = 5
      }
    }

    const nextSlide = () => {
      if (currentSlide.value >= logos.length - 1) {
        currentSlide.value = 0
      } else {
        currentSlide.value++
      }
    }

    const prevSlide = () => {
      if (currentSlide.value <= 0) {
        currentSlide.value = logos.length - 1
      } else {
        currentSlide.value--
      }
    }

    const goToSlide = (index: number) => {
      currentSlide.value = index
    }

    const startAutoplay = () => {
      autoplayInterval.value = window.setInterval(() => {
        nextSlide()
      }, 3000)
    }

    const stopAutoplay = () => {
      if (autoplayInterval.value) {
        clearInterval(autoplayInterval.value)
        autoplayInterval.value = null
      }
    }

    onMounted(() => {
      updateItemsPerView()
      window.addEventListener('resize', updateItemsPerView)
      startAutoplay()

      if (carouselContainer.value) {
        carouselContainer.value.addEventListener('mouseenter', stopAutoplay)
        carouselContainer.value.addEventListener('mouseleave', startAutoplay)
      }
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', updateItemsPerView)
      stopAutoplay()

      if (carouselContainer.value) {
        carouselContainer.value.removeEventListener('mouseenter', stopAutoplay)
        carouselContainer.value.removeEventListener('mouseleave', startAutoplay)
      }
    })

    return {
      logos,
      allLogos,
      currentSlide,
      itemsPerView,
      carouselStyle,
      carouselContainer,
      nextSlide,
      prevSlide,
      goToSlide
    }
  }
})
</script>

<style scoped>


.anim-slide-up {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.anim-slide-up.animate{
opacity: 1;
transform: translateY(0);
}

.logo-carousel {
  overflow: hidden;
}

.logo-carousel:hover .navigation-button {
  opacity: 1;
}

@keyframes slide {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
}
</style>