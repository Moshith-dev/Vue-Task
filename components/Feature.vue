<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { GetPageContentApi } from '@/services/home';

type TpageContent = {
  heading: string;
  description: string;
}

const pageContent = ref<TpageContent[]>([]);

async function GetPageContent() {
  try {
    const response = await GetPageContentApi();
    if (response.status === 200) {
      console.log(response.data);
      pageContent.value = response.data;
    }
  }
  catch (error) {
    console.log(error);
  }
}

GetPageContent();

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

<template>
  <section class=""
    style="background: linear-gradient(to bottom, white 30%, rgb(3 7 18 / var(--tw-bg-opacity, 1)) 70%)">
    <div class="relative bg-no-repeat bg-cover md:py-[150px]"
      style="background-image: url('https://prium.github.io/Shape/assets/img/bg-img/by-its-default.svg');">

      <div class="container pl-4 mx-auto">
        <div class="flex flex-col items-center justify-around lg:flex-row">
          <!-- Content Section -->
          <div class="flex flex-col justify-center gap-3 anim-slide-right">
            <h3 class="text-3xl font-semibold text-white md:text-5xl">

              <span v-if="pageContent.length > 0">{{ pageContent[6]?.heading }}</span>
              <span v-else class="block w-96 h-10 bg-gray-300 rounded animate-pulse"></span>
            </h3>
            <div class="my-3 text-base text-gray-400 md:my-5 md:text-xl">
              <span v-if="pageContent.length > 0">{{ pageContent[6]?.description.substring(0, 52) }}</span>
              <span v-else class="block w-96 h-7 bg-gray-300 rounded animate-pulse"></span>
              <br v-if="pageContent.length > 0" class="hidden md:block" />

              <span v-if="pageContent.length > 0">{{ pageContent[6]?.description.substring(52, 104) }}</span>
              <span v-else class="block w-96 h-7 bg-gray-300 rounded animate-pulse mt-1"></span>
              <br v-if="pageContent.length > 0" class="hidden md:block" />

              <span v-if="pageContent.length > 0">{{ pageContent[6]?.description.substring(104, 150) }} </span>
              <span v-else class="block w-96 h-7 bg-gray-300 rounded animate-pulse mt-1"></span>
              <br v-if="pageContent.length > 0" class="hidden md:block" />
              <span v-if="pageContent.length > 0">{{ pageContent[6]?.description.substring(150, 162) }}</span>
              <span v-else class="block w-96 h-7 bg-gray-300 rounded animate-pulse mt-1"></span>
            </div>

            <!-- Features Grid -->
            <div class="flex flex-col gap-6 mt-4 sm:flex-row md:gap-8">
              <div class="flex flex-col justify-between gap-2">
                <img class="rounded-full " src="/assets/images.png" alt="" width="50px">
                <div>
                  <h3 class="text-xl font-bold text-white md:text-2xl">

                    <span v-if="pageContent.length > 0">{{ pageContent[7]?.heading }}</span>
                    <span v-else class="block w-72 h-10 bg-gray-300 rounded animate-pulse"></span>
                  </h3>
                  <p class="text-base text-gray-400 md:text-xl">

                    <span v-if="pageContent.length > 0">{{ pageContent[7]?.description.substring(0, 26) }}</span>
                    <span v-else class="block w-64 h-7 bg-gray-300 rounded animate-pulse"></span>
                    <br class="hidden md:block" v-if="pageContent.length > 0" />

                    <span v-if="pageContent.length > 0">{{ pageContent[7]?.description.substring(26, 34) }}</span>
                    <span v-else class="block w-64 h-7 bg-gray-300 rounded animate-pulse mt-1"></span>
                  </p>
                </div>
              </div>
              <div class="flex flex-col justify-between gap-2">
                <img class="rounded-full " src="/assets/images2.png" alt="" width="50px">
                <div>
                  <h3 class="text-xl font-bold text-white md:text-2xl">

                    <span v-if="pageContent.length > 0">{{ pageContent[8]?.heading }}</span>
                    <span v-else class="block w-72 h-10 bg-gray-300 rounded animate-pulse"></span>
                  </h3>
                  <p class="text-base text-gray-400 md:text-xl">

                    <span v-if="pageContent.length > 0">{{ pageContent[8]?.description.substring(0, 28) }}</span>
                    <span v-else class="block w-64 h-7 bg-gray-300 rounded animate-pulse"></span>
                    <br class="hidden md:block" v-if="pageContent.length > 0" />

                    <span v-if="pageContent.length > 0">{{ pageContent[8]?.description.substring(28, 37) }}</span>
                    <span v-else class="block w-64 h-7 bg-gray-300 rounded animate-pulse my-1"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Image Section -->
          <div class="relative w-full lg:w-1/2 anim-slide-left md:mr-5">
            <!-- Decorative Images -->
            <img class="absolute hidden md:block"
              src="https://prium.github.io/Shape/assets/img/illustrations/home/home-vector-3.png" alt=""
              style="width:35%; bottom:8%; right:5%;">
            <img class="absolute hidden md:block"
              src="https://prium.github.io/Shape/assets/img/illustrations/home/shapes-4.png" alt=""
              style="width:10%; right:15%; bottom:-5%;">
            <img class="absolute hidden md:block"
              src="https://prium.github.io/Shape/assets/img/illustrations/home/shapes-3.png" alt=""
              style="width:8%; right:75%;">

            <!-- Main Image -->
            <img class="relative w-full max-w-[700px] mx-auto lg:ml-7"
              src="https://prium.github.io/Shape/assets/img/gallery/iPad-Pro-Design-Mockup.png"
              alt="iPad Pro Design Mockup">
          </div>
        </div>
      </div>
      <div class="absolute  bg-gray-950 h-[300px]"></div>
    </div>

  </section>
</template>

<style scoped>
.anim-slide-left {
  opacity: 0;
  transform: translateX(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.anim-slide-left.animate {
  opacity: 1;
  transform: translateX(0);
}

.anim-slide-right {
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.anim-slide-right.animate {
  opacity: 1;
  transform: translateX(0);
}
</style>