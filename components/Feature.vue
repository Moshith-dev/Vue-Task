<script setup lang="ts">
import { onMounted, ref } from 'vue';

type TpageContent = {
  heading: string;
  description: string;
};

defineProps<{
  pageContent: TpageContent[];
}>();

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
          <div class="flex flex-col justify-center gap-3 anim-slide-right w-[49%] ml-10">
            <h3 class="text-3xl font-semibold text-white md:text-5xl">

              <span v-if="pageContent.length > 0">{{ pageContent[6]?.heading }}</span>
              <span v-else class="block w-96 h-10 bg-gray-300 rounded animate-pulse"></span>
            </h3>
            <div class="my-3 text-base text-gray-400 md:my-5 md:text-xl md:mr-52 ">
              <span v-if="pageContent.length > 0">{{ pageContent[6]?.description }}</span>
              <span v-else class="block w-96 h-7 bg-gray-300 rounded animate-pulse"></span>

            </div>

            <!-- Features Grid -->
            <div class="flex flex-col gap-6 mt-4 sm:flex-row md:gap-8">
              <div class="flex flex-col justify-between gap-2">
                <span style="display: inline-block;height: 4em;position: relative;"><svg class=" w-12 text-white"
                    aria-hidden="true" data-prefix="fas" data-icon="circle" role="img"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z">
                    </path>
                  </svg><!-- <span class="fas fa-circle fa-stack-2x text-white"></span> --><svg
                    class="absolute top-2 left-[8px] w-8 text-blue-700" aria-hidden="true"
                    data-prefix="fas" data-icon="brain" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512" data-fa-i2svg="">
                    <path fill="currentColor"
                      d="M208 0c-29.87 0-54.74 20.55-61.8 48.22-.75-.02-1.45-.22-2.2-.22-35.34 0-64 28.65-64 64 0 4.84.64 9.51 1.66 14.04C52.54 138 32 166.57 32 200c0 12.58 3.16 24.32 8.34 34.91C16.34 248.72 0 274.33 0 304c0 33.34 20.42 61.88 49.42 73.89-.9 4.57-1.42 9.28-1.42 14.11 0 39.76 32.23 72 72 72 4.12 0 8.1-.55 12.03-1.21C141.61 491.31 168.25 512 200 512c39.77 0 72-32.24 72-72V205.45c-10.91 8.98-23.98 15.45-38.36 18.39-4.97 1.02-9.64-2.82-9.64-7.89v-16.18c0-3.57 2.35-6.78 5.8-7.66 24.2-6.16 42.2-27.95 42.2-54.04V64c0-35.35-28.66-64-64-64zm368 304c0-29.67-16.34-55.28-40.34-69.09 5.17-10.59 8.34-22.33 8.34-34.91 0-33.43-20.54-62-49.66-73.96 1.02-4.53 1.66-9.2 1.66-14.04 0-35.35-28.66-64-64-64-.75 0-1.45.2-2.2.22C422.74 20.55 397.87 0 368 0c-35.34 0-64 28.65-64 64v74.07c0 26.09 17.99 47.88 42.2 54.04 3.46.88 5.8 4.09 5.8 7.66v16.18c0 5.07-4.68 8.91-9.64 7.89-14.38-2.94-27.44-9.41-38.36-18.39V440c0 39.76 32.23 72 72 72 31.75 0 58.39-20.69 67.97-49.21 3.93.67 7.91 1.21 12.03 1.21 39.77 0 72-32.24 72-72 0-4.83-.52-9.54-1.42-14.11 29-12.01 49.42-40.55 49.42-73.89z">
                    </path>
                  </svg><!-- <span class="fas fa-brain text-primary fa-stack-1x fa-inverse"></span> --></span>
                <div>
                  <h3 class="text-xl font-bold text-white md:text-2xl">

                    <span v-if="pageContent.length > 0">{{ pageContent[7]?.heading }}</span>
                    <span v-else class="block w-72 h-10 bg-gray-300 rounded animate-pulse"></span>
                  </h3>
                  <p class="text-base text-gray-400 md:text-xl mr-10">

                    <span v-if="pageContent.length > 0">{{ pageContent[7]?.description }}</span>
                    <span v-else class="block w-64 h-7 bg-gray-300 rounded animate-pulse"></span>

                  </p>
                </div>
              </div>
              <div class="flex flex-col justify-between gap-2">
                <span style="display: inline-block;height: 4em;position: relative;"><svg class=" w-12 text-white"
                    aria-hidden="true" data-prefix="fas" data-icon="circle" role="img"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z">
                    </path>
                  </svg><svg class="absolute top-2 left-[8px] w-8 text-orange-700" aria-hidden="true" data-prefix="fas"
                    data-icon="cannabis" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    data-fa-i2svg="">
                    <path fill="currentColor"
                      d="M503.47 360.25c-1.56-.82-32.39-16.89-76.78-25.81 64.25-75.12 84.05-161.67 84.93-165.64 1.18-5.33-.44-10.9-4.3-14.77-3.03-3.04-7.12-4.7-11.32-4.7-1.14 0-2.29.12-3.44.38-3.88.85-86.54 19.59-160.58 79.76.01-1.46.01-2.93.01-4.4 0-118.79-59.98-213.72-62.53-217.7A15.973 15.973 0 0 0 256 0c-5.45 0-10.53 2.78-13.47 7.37-2.55 3.98-62.53 98.91-62.53 217.7 0 1.47.01 2.94.01 4.4-74.03-60.16-156.69-78.9-160.58-79.76-1.14-.25-2.29-.38-3.44-.38-4.2 0-8.29 1.66-11.32 4.7A15.986 15.986 0 0 0 .38 168.8c.88 3.97 20.68 90.52 84.93 165.64-44.39 8.92-75.21 24.99-76.78 25.81a16.003 16.003 0 0 0-.02 28.29c2.45 1.29 60.76 31.72 133.49 31.72 6.14 0 11.96-.1 17.5-.31-11.37 22.23-16.52 38.31-16.81 39.22-1.8 5.68-.29 11.89 3.91 16.11a16.019 16.019 0 0 0 16.1 3.99c1.83-.57 37.72-11.99 77.3-39.29V504c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-64.01c39.58 27.3 75.47 38.71 77.3 39.29a16.019 16.019 0 0 0 16.1-3.99c4.2-4.22 5.71-10.43 3.91-16.11-.29-.91-5.45-16.99-16.81-39.22 5.54.21 11.37.31 17.5.31 72.72 0 131.04-30.43 133.49-31.72 5.24-2.78 8.52-8.22 8.51-14.15-.01-5.94-3.29-11.39-8.53-14.15z">
                    </path>
                  </svg></span>
                <div>
                  <h3 class="text-xl font-bold text-white md:text-2xl">

                    <span v-if="pageContent.length > 0">{{ pageContent[8]?.heading }}</span>
                    <span v-else class="block w-72 h-10 bg-gray-300 rounded animate-pulse"></span>
                  </h3>
                  <p class="text-base text-gray-400 md:text-xl mr-20">

                    <span v-if="pageContent.length > 0">{{ pageContent[8]?.description }}</span>
                    <span v-else class="block w-64 h-7 bg-gray-300 rounded animate-pulse"></span>

                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Image Section -->
          <div class="relative w-full lg:w-1/2 anim-slide-left md:mr-10">
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