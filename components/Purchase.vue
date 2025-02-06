<script setup lang="ts">
import { onMounted, ref } from 'vue';

import Button from './Button.vue';

const custombutton = ref({
  text: 'Purchase',
  buttonStyle : 'inline-block px-6 py-2 text-base font-medium text-gray-500 transition-all duration-300 ease-in-out bg-white rounded-lg shadow-sm md:px-8 md:py-3 md:text-lg hover:bg-gray-300'
});

const HandleClick = () => {
  console.log('Button clicked');
};

type TpageContent = {
  heading: string;
  description: string;
};


defineProps<{
  pageContent: TpageContent[];
}>();

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

</script>


<template>
  <section class="text-center bg-gray-950">
    <div class="bg-center bg-cover min-h-[300px] relative"
      style="background-image: url('https://prium.github.io/Shape/assets/img/bg-img/CTA-primary.png');">
      <div class="container px-4 py-8 mx-auto md:px-8 md:py-10">
        <!-- Heading -->
        <h3
          class="relative inline-block mb-6 text-2xl font-bold text-white md:mb-8 md:text-3xl lg:text-4xl anim-slide-up">
          <span v-if="pageContent.length > 0">{{ pageContent[13]?.heading }}</span>
          <span v-else class="block w-80 h-10 bg-gray-300 rounded animate-pulse"></span>
          <span class="absolute w-[60px] md:w-[81px] h-[50px] md:h-[70px] hidden md:block" style="
              background-image: url('https://prium.github.io/Shape/assets/img/illustrations/shapes-19.png'); 
              background-size: contain; 
              background-repeat: no-repeat; 
              background-position: center; 
              top: -65%;
              left: 95%;
            "></span>
        </h3>


        <div class="flex justify-center mt-4 md:mt-6 anim-slide-up">
          <Button :buttonStyle="custombutton.buttonStyle" :text="custombutton.text" :action="HandleClick"/>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.anim-slide-up {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.anim-slide-up.animate {
  opacity: 1;
  transform: translateY(0);
}
</style>
