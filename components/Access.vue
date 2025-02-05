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

<template>
  <section class=" h-[450px] w-[100%] bg-cover bg-center bg-no-repeat relative" style="
        background-image: url('https://prium.github.io/Shape/assets/img/bg-img/bg-cta-home.png');
      ">
    <div class="relative inset-0 bg-black bg-opacity-10"></div>

    <div class="relative flex justify-end h-full mx-10 gap-10">
      <img class="my-5 anim-slide-right " src="https://prium.github.io/Shape/assets/img/illustrations/shapes-20.png"
        alt="" style="object-fit: contain; background-position: center; width: 150px;">
      <div class="px-10 text-center py-9"
        style="background-image: url('https://prium.github.io/Shape/assets/img/bg-img/appland_bg12.png'); background-position: center; background-size:cover; background-repeat: no-repeat; width: 750px;">

        <h3 class="text-5xl font-bold text-white">
          <span v-if="pageContent.length > 0">{{ pageContent[12]?.heading }} </span>
          <span v-else class="block w-96 h-12 bg-gray-300 rounded animate-pulse"></span>
          <span class="absolute w-[81px] h-[70px] "
            style="background-image: url('https://prium.github.io/Shape/assets/img/illustrations/shapes-19.png'); background-size: contain; background-repeat: no-repeat; background-position: center; transform: translate3d(65%, -99%, 0); ">

          </span>
        </h3>
        <p class="py-10 text-xl text-white">
          <span v-if="pageContent.length > 0">{{ pageContent[12]?.description }} </span>
          <span v-else class="block w-60 h-10 bg-gray-300 rounded animate-pulse"></span>
        </p>
        <input type="email" placeholder="your email"
          class="border border-gray-300 rounded-lg  button focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <button class="ml-10 text-white bg-indigo-600 rounded-lg  button hover:bg-indigo-500">
          Get Early Access
        </button>
      </div>
    </div>

  </section>
</template>


<style scoped>
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
