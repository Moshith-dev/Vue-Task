
<script setup lang="ts">
import { GetFooterApi, GetIconsListApi, GetPageContentApi, GetMenuApi } from '@/services/home';
import { onMounted, ref, computed } from 'vue';

import Button from './Button.vue';

const custombutton = ref({
  text: 'Subscribe',
  buttonStyle : 'w-full px-6 py-4 text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-700'
});

const HandleClick = () => {
  console.log('Button clicked');
};

type TpageContent = {
  heading: string;
  description: string;
};

const props = defineProps<{
  pageContent: TpageContent[];
  MenuItem: Tmenu[];
}>();

type Tfooter = {
  title: string;
  address: string;
  city: string;
  timing: string;
  contact: string;
}
const footerDetails = ref<Tfooter[]>([]);

async function getFooter() {
  try {
    const response = await GetFooterApi();
    if (response.status === 200) {
      console.log(response);
      footerDetails.value = response.data;
    }
  } catch (error) {
    console.log(error);
  }
}

type Ticon = {
  iconUrl: string;
}
const icons = ref<Ticon[]>([]);

async function getIcons() {
  try {
    const response = await GetIconsListApi();
    if (response.status === 200) {
      console.log(response);
      icons.value = response.data;
    }
  } catch (error) {
    console.log(error);
  }
}


type Tmenu = {
  menu: string;
  items: string[];
  parentId: number;
};

onMounted(() => {
  getIcons();

  getFooter();


  const animatedSections = document.querySelectorAll(".anim-slide-left");

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

// Computed property for sliced menu items
const slicedMenuItems = computed(() => {
  return props.MenuItem.slice(65, 80); // Slice from index 65 to 79 (80 is exclusive)
});

</script>

<template>
  <footer class="bg-gray-950 text-gray-400 pt-8 md:pt-10 md:pb-[1px]">
    <div class="container px-4 mx-auto md:px-5 ">
      <!-- Main Grid -->
      <div class="flex justify-between mb-10 pb-10">
        <!-- Navigate Column -->
        <div class="text-center md:text-left ">
          <h2 class="mb-4 text-5xl font-semibold text-white md:mb-6 md:text-4xl">
            <span v-if="MenuItem.length > 0">{{ MenuItem[64]?.menu }}</span>
            <span v-else class="block w-60 h-10 bg-gray-300 rounded animate-pulse"></span>
          </h2>
          <ul class="space-y-2 text-xl md:space-y-3 ml-2">
            <li v-for="(item, index) in slicedMenuItems" :key="index">
              <a href="#" class="inline-block py-1 transition-colors hover:text-white">
                {{ item.menu }}
              </a>
            </li>
            <li v-if="MenuItem.length === 0" v-for="i in 5" :key="i">
              <a href="#" class="inline-block py-1 transition-colors hover:text-white">
                <span class="block w-40 h-7 bg-gray-300 rounded animate-pulse"></span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Column -->

        <div class="item-center md:text-left pr-24 ">
          <h2 class="mb-4 text-xl font-semibold text-white md:mb-6 md:text-4xl">
            <span v-if="footerDetails.length > 0">{{ footerDetails[0]?.title }}</span>
            <span v-else class=" block w-60 h-10 bg-gray-300 rounded animate-pulse"></span>
          </h2>
          <div class="space-y-8 text-xl ml-2">
            <div class="flex items-start justify-center space-x-3 md:justify-start ">
              <img src="/assets/loaction.svg" alt="location" width="35px">
              <div v-if="footerDetails.length > 0">
                <p>{{ footerDetails[0]?.address }}</p>
                <p>{{ footerDetails[0]?.city }}</p>
              </div>
              <div v-else>
                <p class=" rounded w-52 h-7 animate-pulse bg-gray-300"></p>
                <p class="block bg-gray-300 rounded h-7 animate-pulse mt-1"></p>
              </div>


            </div>
            <div class="flex items-start justify-center space-x-3 md:justify-start ">
              <img src="/assets/timing-logo.svg" alt="Phone" width="30px">
              <p v-if="footerDetails.length > 0">{{ footerDetails[0]?.timing }}</p>
              <p v-else class="block rounded w-full h-7 animate-pulse bg-gray-300"></p>
            </div>
            <div class="flex items-start justify-center space-x-3 md:justify-start">
              <img src="/assets/phone-logo.svg" alt="Phone" width="40px">
              <p v-if="footerDetails.length > 0">{{ footerDetails[0]?.contact }}</p>
              <p v-else class="block rounded w-full h-7 animate-pulse bg-gray-300"></p>
            </div>
          </div>
        </div>


        <div class=" text-center px-5 anim-slide-left mr-5">
          <div class="py-4 md:py-3">
            <div v-if="pageContent.length > 0">
              <h2 class="mb-4 text-xl font-semibold text-white md:mb-6 md:text-4xl">
                {{ pageContent[15]?.heading }}
              </h2>
              <p class="max-w-md mx-auto mb-4 p md:mb-6 md:mx-0">
                {{ pageContent[15]?.description }}
              </p>
            </div>
            <div v-else>
              <p class="w-full h-6 bg-gray-300 rounded animate-pulse"></p>
              <p class="w-3/4 h-6 bg-gray-300 rounded animate-pulse mt-2"></p>
            </div>
          </div>
          <div class="max-w-md mx-auto text-xl space-y-3 md:space-y-4 md:mx-0">
            <input type="email" placeholder="Your Email"
              class="w-full px-6 py-4 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 " />
           
            <Button v-bind="custombutton" :action="HandleClick"/>
            <p class="text-xs p md:text-[16px]">
              <span v-if="pageContent.length > 0">
                {{ pageContent[16]?.description }}
              </span>
              <span v-else class="block w-full h-5 bg-gray-300 rounded animate-pulse"></span>
            </p>
          </div>
        </div>
      </div>


      <div class="pt-10 mt-8 border-t md:mt-24 md:pt-10 border-gray-950 ">

        <div class="flex justify-center gap-1 pt-5">
          <div class="icon" v-for="icon in icons" :key="icon.iconUrl">
            <div v-if="icons?.length > 0" v-html="icon.iconUrl"></div>
            <div v-else class="block w-10 h-10 bg-gray-300 rounded animate-pulse"></div>
          </div>
          <div v-if="icons?.length === 0" v-for="i in 5" :key="i"
            class="block w-10 h-10 bg-gray-300 rounded animate-pulse"></div>
        </div>


        <div class="mt-4 text-center md:mt-3 text-xl">
          Made With <span class="text-red-500">❤️</span> by <b class="text-white">ThemeWagon</b>
        </div>
      </div>
    </div>
  </footer>
</template>


<style scoped>
.anim-slide-left {
  opacity: 0;
  transform: translateX(50px);
  transition: opacity 0.1s ease-in-out, transform 0.8s ease-out;
}

.anim-slide-left.animate {
  opacity: 1;
  transform: translateX(0);
}

.icon {
  transition: fill 0.3s ease;
}

.icon:hover {
  fill: indigo;
}
</style>
