<template>
  <section class="overflow-hidden bg-white">
    <div class="my-10 md:my-20">
     
      <div class="flex flex-col justify-around gap-8 px-4 md:flex-row md:px-5">
        
        <div class="flex flex-col items-center justify-center gap-2 p-4 md:items-start md:p-5 anim-slide-right">
          <h3 class="relative text-3xl font-bold text-gray-700 md:text-5xl">
            <span>Download It Now!</span>
            <span 
              class="absolute w-[81px] h-[70px] hidden md:block" 
              style="
                background-image: url('https://prium.github.io/Shape/assets/img/illustrations/shapes-13.png'); 
                background-size: contain; 
                background-repeat: no-repeat; 
                background-position: center; 
                left: 95%;
                top: -50%;
              "
            ></span>
          </h3>

          <div class="text-gray-500 w-full md:w-[320px] text-center md:text-left my-4 md:my-6 px-4 md:px-6">
            You can get the mobile version of our application from stores for free
          </div>

         
          <div class="flex flex-col items-center gap-4 sm:flex-row">
         
            <div class="flex items-center justify-center w-full p-2 transition-colors bg-indigo-600 rounded sm:w-auto hover:bg-indigo-700 button">
              <img 
                class="w-8 h-8 mr-2 md:w-10 md:h-10" 
                src="assets/google-play-svgrepo-com.svg" 
                alt="app store" 
                style="filter: invert();"
              >
              <div class="flex-col font-bold">
                <p class=" text-sm text-white md:text-l">Download On The</p>
                <a class="text-white hover:text-gray-300" href="#!">Apple Store</a>
              </div>
            </div>

       
            <div class="flex items-center justify-center w-full p-2 transition-colors bg-indigo-600 rounded sm:w-auto hover:bg-indigo-700 button">
              <img 
                class="w-8 h-8 mr-2 md:w-10 md:h-10" 
                src="/assets/apple-logo-svgrepo-com.svg" 
                alt="google play" 
                style="filter: invert();"
              >
              <div class="flex-col font-bold">
                <p class="text-sm text-white md:text-l">Download On The</p>
                <a class="text-white hover:text-gray-300" href="#!">Google Play</a>
              </div>
            </div>
          </div>
        </div>
 
   
        <div class="flex justify-center anim-slide-left">
          <img 
            src="/assets/Shape_App.png" 
            alt="download" 
            class="w-[300px] md:w-[450px] h-auto"
          />
        </div>
      </div>

      
      <div class="relative w-full mt-10 md:mt-0">
        <img
          class="w-full max-w-[700px] ml-auto mr-4 md:mr-10"
          src="/assets/ground_shape.png"
          alt="ground shape"
        />
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import { onMounted } from 'vue';


onMounted(() => {
    const animatedSections = document.querySelectorAll(".anim-slide-left");
    const animsection2 = document.querySelectorAll(".anim-slide-right");

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
  animsection2.forEach((section) => observer.observe(section));
  
});
</script>




<style scoped>
.anim-slide-left {
  opacity: 0;
  transform: translateX(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.anim-slide-left.animate{
opacity: 1;
transform: translateX(0);
}

.anim-slide-right {
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.anim-slide-right.animate{
opacity: 1;
transform: translateX(0);
}
</style>

