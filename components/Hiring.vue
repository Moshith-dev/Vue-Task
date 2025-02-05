<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { GetPageContentApi, GetEmployeeApi } from '@/services/home';

type TpageContent = {
  heading: string;
  description: string;
}

const pageContent = ref<TpageContent[]>([]);

async function getPageContent() {
  try {
    const response = await GetPageContentApi();
    if (response.status === 200) {
      pageContent.value = response.data;
    }
  } catch (error) {
    console.log(error);
  }
}


type TeamMembers = {
  empName: string;
  empRole: string;
  empDescription: string;
}

const Employees = ref<TeamMembers[]>([]);

async function getEmployees() {
  try {
    const response = await GetEmployeeApi();
    if (response.status === 200) {
      Employees.value = response.data;
    }
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  getEmployees();
  getPageContent();
})

const teamMembers = computed(() => {
  return [
    {
      name: Employees.value[0]?.empName,
      role: Employees.value[0]?.empRole,
      description: Employees.value[0]?.empDescription,
      image: "https://prium.github.io/Shape/assets/img/team/adult-boy-1.png"
    },
    {
      name: Employees.value[1]?.empName,
      role: Employees.value[1]?.empRole,
      description: Employees.value[1]?.empDescription,
      image: "https://prium.github.io/Shape/assets/img/team/adult-girl-1.png"
    },
    {
      name: Employees.value[2]?.empName,
      role: Employees.value[2]?.empRole,
      description: Employees.value[2]?.empDescription,
      image: "https://prium.github.io/Shape/assets/img/team/adult-boy-2.png"
    },
    {
      name: Employees.value[3]?.empName,
      role: Employees.value[3]?.empRole,
      description: Employees.value[3]?.empDescription,
      image: "https://prium.github.io/Shape/assets/img/team/adult-girl-2.png"
    },
    {
      name: Employees.value[4]?.empName,
      role: Employees.value[4]?.empRole,
      description: Employees.value[4]?.empDescription,
      image: "https://prium.github.io/Shape/assets/img/team/adult-boy-3.png"
    },
    {
      name: Employees.value[5]?.empName,
      role: Employees.value[5]?.empRole,
      description: Employees.value[5]?.empDescription,
      image: "https://prium.github.io/Shape/assets/img/team/adult-girl-3.png"
    }]
  // Add more team members as needed
});

const currentIndex = ref(0);

const goToSlide = (index: number) => {
  currentIndex.value = index;
};

const autoplay = () => {
  currentIndex.value = (currentIndex.value + 1) % Math.ceil(teamMembers.value.length / 2);
};

onMounted(() => {
  setInterval(autoplay, 5000); // Change slide every 5 seconds
});
</script>

<template>
  <section class="py-8 bg-white md:py-16">
    <div class="container px-4 mx-auto">
      <div class="flex  justify-center  lg:flex-row  md:gap-10">
        <!-- Left Section - Team Members -->

        <div class="container px-4 w-[45%]">
          <div class="carousel ">
            <div class="carousel-inner" :style="{ transform: `translateY(-${currentIndex * 100}%)` }">
              <div class="carousel-item" v-for="(member, index) in teamMembers.slice(0, 7)" :key="index">
                <div class="flex flex-row items-center gap-1 p-3">
                  <img class="rounded-full w-[100px] md:w-[200px]" :src="member.image" :alt="member.name" />
                  <div class=" flex flex-col px-5 text-justify">
                    <p class="text-xl font-semibold text-gray-700 md:text-2xl text-justify">

                      <span v-if="pageContent.length > 0"> {{ member.name }}</span>
                      <span v-else class="block w-72 h-10 bg-gray-300 rounded animate-pulse"></span>

                    </p>
                    <p class="text-base font-semibold text-gray-500 md:text-l">

                      <span v-if="pageContent.length > 0">{{ member.role }}</span>
                      <span v-else class="block w-80 h-10 bg-gray-300 rounded animate-pulse mt-1"></span>

                    </p>
                    <p class=" text-gray-500 text-justify text-[20px]">

                      <span v-if="pageContent.length > 0">{{ member.description }}</span>
                      <span v-else class="block w-96 h-32 bg-gray-300 rounded animate-pulse mt-1"></span>

                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="  carousel-dots">
              <span v-for="(member, index) in teamMembers.slice(0, 6)" :key="index" class="dot"
                :class="{ active: currentIndex === index  }" @click="goToSlide(index /2)"></span>
            </div>
          </div>


        </div>

        <!-- Right Section - Content -->
        <div class="px-4 py-5 text-center md:px-1  md:py-10 lg:text-left ">
          <h3 class="relative text-3xl font-bold md:text-5xl text-gray-950">
            <span>
              <span v-if="pageContent.length > 0">{{ pageContent[10]?.heading.substring(0, 20) }}</span>
              <span v-else class="block w-96 h-12 bg-gray-300 rounded animate-pulse"></span>

            </span>
            <span
              class="absolute w-[60px] md:w-[90px] h-[60px] md:h-[90px] bg-no-repeat bg-center bg-contain hidden md:block"
              style="background-image: url('https://prium.github.io/Shape/assets/img/illustrations/shapes-13.png'); right: -15%; top: -25%;"></span>
            <br v-if="pageContent.length > 0" />
            <span v-if="pageContent.length > 0">{{ pageContent[10]?.heading.substring(20, 38) }}</span>
            <span v-else class="block w-96 h-10 bg-gray-300 rounded animate-pulse mt-1"></span>


          </h3>

          <p class="py-3 text-lg text-gray-500 md:py-5 md:text-xl">

            <span v-if="pageContent.length > 0">{{ pageContent[10]?.description.substring(0, 40) }} </span>
            <span v-else class="block w-96 h-7 bg-gray-300 rounded animate-pulse"></span>

            <br class="hidden md:block" v-if="pageContent.length > 0" />
            <span v-if="pageContent.length > 0">{{ pageContent[10]?.description.substring(42, 84) }}</span>
            <span v-else class="block w-96 h-7 bg-gray-300 rounded animate-pulse mt-1"></span>

            <br class="hidden md:block" v-if="pageContent.length > 0" />
            <span v-if="pageContent.length > 0">{{ pageContent[10]?.description.substring(84, 122) }}</span>
            <span v-else class="block w-96 h-7 bg-gray-300 rounded animate-pulse mt-1"></span>



          </p>

          <h3 class="py-3 text-2xl font-bold text-gray-800 md:py-5 md:text-4xl">

            <span v-if="pageContent.length > 0">{{ pageContent[11]?.heading.substring(0, 23) }}</span>
            <span v-else class="block w-96 h-10 bg-gray-300 rounded animate-pulse"></span>

            <br v-if="pageContent.length > 0" />

            <span v-if="pageContent.length > 0">{{ pageContent[11]?.heading.substring(24, 38) }}</span>
            <span v-else class="block w-96 h-10 bg-gray-300 rounded animate-pulse mt-1"></span>

          </h3>

          <div class="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <button class="px-5 py-2 text-white transition-colors bg-indigo-700 rounded-lg hover:bg-indigo-600 button">
              Drop Your CV
            </button>
            <button class="px-5 py-2 text-indigo-900 transition-colors bg-gray-300 rounded-lg hover:bg-gray-200 button">
              Learn More
            </button>
          </div>

          <p class="py-3 text-sm text-gray-500 md:py-5 md:text-base">

            <span v-if="pageContent.length > 0"> {{ pageContent[11]?.description.substring(0, 16) }}</span>
            <span v-else class="block w-96 h-7 bg-gray-300 rounded animate-pulse"></span>

            <b>{{ pageContent[11]?.description.substring(16, 35) }}
            </b>
            <br v-if="pageContent.length > 0" md:block />
            <span v-if="pageContent.length > 0">{{ pageContent[11]?.description.substring(36, 65) }}</span>
            <span v-else class="block w-96 h-7 bg-gray-300 rounded animate-pulse mt-1"></span>

          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
  height: 600px;
  /* Adjust height as needed */
  display: flex;
  /* Use flexbox for layout */
}

.carousel-inner {
  display: flex;
  flex-direction: column;
  /* Change to column for vertical layout */
  transition: transform 0.5s ease;
  flex: 1;
  /* Allow inner to take available space */
}

.carousel-item {
  min-height: 50%;
  /* Ensure each item takes half height */
  display: flex;
  justify-content: center;
}

.carousel-dots {
  display: flex;
  flex-direction: column;
  /* Arrange dots vertically */
  position: absolute;
  /* Positioning */
  right: 10px;
  /* Adjust as needed */
  top: 50%;
  /* Center vertically */
  transform: translateY(-50%);
  /* Center adjustment */
}

.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 5px 0;
  /* Vertical spacing */
  border-radius: 50%;
  background-color: #ccc;
  cursor: pointer;
}

.dot.active {
  background-color: #3d0098;
}
</style>