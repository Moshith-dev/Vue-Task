<template>
  <section class="" style="background: linear-gradient(to bottom, white 30%, rgb(3 7 18 / var(--tw-bg-opacity, 1)) 70%)">
    <div class="relative bg-no-repeat bg-cover md:py-[150px]" 
         style="background-image: url('https://prium.github.io/Shape/assets/img/bg-img/by-its-default.svg');">
         
      <div class="container pl-4 mx-auto">
        <div class="flex flex-col items-center justify-around lg:flex-row">
          <!-- Content Section -->
          <div class="flex flex-col justify-center gap-3 anim-slide-right">
            <h3 class="text-3xl font-semibold text-white md:text-5xl">
              It's Stylish by default.
            </h3>
            <div class="my-3 text-base text-gray-400 md:my-5 md:text-xl">
              With our built-in design system, it's easy to create
              <br class="hidden md:block" />
              beautiful screens with ease. And because we separate
              <br class="hidden md:block" />
              style from layout, you can try out new themes
              <br class="hidden md:block" />
              instantly.
            </div>

            <!-- Features Grid -->
            <div class="flex flex-col gap-6 mt-4 sm:flex-row md:gap-8">
              <div class="flex flex-col justify-between gap-2">
                <img class="rounded-full " src="/assets/images.png" alt="" width="50px">
                <div>
                <h3 class="text-xl font-bold text-white md:text-2xl">Smart Features</h3>
                <p class="text-base text-gray-400 md:text-xl">
                  we have 120+ smart unique
                  <br class="hidden md:block" />
                  features
                </p>
              </div>
              </div>
              <div class="flex flex-col justify-between gap-2">
                <img class="rounded-full " src="/assets/images2.png" alt="" width="50px">
                <div>
                <h3 class="text-xl font-bold text-white md:text-2xl">Dynamic structure</h3>
                <p class="text-base text-gray-400 md:text-xl">
                  Our structure is stable and
                  <br class="hidden md:block" />
                  versatile
                </p>
              </div>
              </div>
            </div>
          </div>

          <!-- Image Section -->
          <div class="relative w-full lg:w-1/2 anim-slide-left">
            <!-- Decorative Images -->
            <img 
              class="absolute hidden md:block" 
              src="https://prium.github.io/Shape/assets/img/illustrations/home/home-vector-3.png" 
              alt=""
              style="width:35%; bottom:8%; left:73%;"
            >
            <img 
              class="absolute hidden md:block" 
              src="https://prium.github.io/Shape/assets/img/illustrations/home/shapes-4.png" 
              alt=""
              style="width:10%; right:5%; bottom:2%;"
            >
            <img 
              class="absolute hidden md:block" 
              src="https://prium.github.io/Shape/assets/img/illustrations/home/shapes-3.png" 
              alt=""
              style="width:8%; left:23%;"
            >
            
            <!-- Main Image -->
            <img 
              class="relative w-full max-w-[750px] mx-auto lg:ml-7" 
              src="https://prium.github.io/Shape/assets/img/gallery/iPad-Pro-Design-Mockup.png" 
              alt="iPad Pro Design Mockup"
            >
          </div>
        </div>
      </div>
      <div class="absolute  bg-gray-950 h-[300px]"></div>
    </div>
    
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
@keyframes slideleft {
  0% {
    transform: translateX(45%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}

.anim-slide-left {
  animation: slideleft 3s ease-in  backwards;

}
@keyframes slideright {
  0% {
    transform: translateX(-45%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}

.anim-slide-right {
  animation: slideright 3s ease  backwards;

}
</style>