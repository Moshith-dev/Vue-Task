<template>
    <section
      class=" h-[350px] w-[100%] bg-cover bg-center bg-no-repeat relative"
      style="
        background-image: url('https://prium.github.io/Shape/assets/img/bg-img/bg-cta-home.png');
      "
    >
      <div class="relative inset-0 bg-black bg-opacity-10"></div>
      
      <div class="relative flex justify-end h-full " >
        <img class="my-5 anim-slide-right" src="https://prium.github.io/Shape/assets/img/illustrations/shapes-20.png" alt="" style="object-fit: contain;">
        <div class="px-10 text-center py-9" style="background-image: url('https://prium.github.io/Shape/assets/img/bg-img/appland_bg12.png'); background-position: center; background-size: cover;">
          
          <h3 class="text-5xl font-bold text-white">
              <span>Get Early Access </span> 
          <span class="absolute w-[81px] h-[70px] " style="background-image: url('https://prium.github.io/Shape/assets/img/illustrations/shapes-19.png'); background-size: contain; background-repeat: no-repeat; background-position: center; transform: translate3d(-20%, -40%, 0); " >
            
          </span></h3>
          <p class="py-10 text-xl text-white">
            Secure your spot in our beta with just an email
          </p>
          <input
            type="email"
            placeholder="your email"
            class="border border-gray-300 rounded-lg  button focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            class="ml-10 text-white bg-indigo-600 rounded-lg  button hover:bg-indigo-500"
          >
            Get Early Access
          </button>
        </div>
      </div>
    
    </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';


onMounted(() => {
    const animatedSections = document.querySelectorAll(".anim-slide-right");

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

</script>


<style scoped>
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
