<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { GetPageContentApi, GetEmployeeApi } from '@/services/home';
import Button from './Button.vue';

const custombutton = ref({
  text: ['Drop Your CV', ' Learn More'],
  buttonStyle: ['px-5 py-2 text-white transition-colors bg-indigo-700 rounded-lg hover:bg-indigo-600 button', 'px-5 py-2 text-indigo-900 transition-colors bg-gray-300 rounded-lg hover:bg-gray-200 button']
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
  currentIndex.value = (currentIndex.value+1 ) % Math.ceil(teamMembers.value.length /2 );
};

onMounted(() => {
  setInterval(autoplay, 5000); // Change slide every 5 seconds
});
</script>

<template>
  <section class="py-8 bg-white md:py-16 my-10">
    <div class="container px-4 mx-auto">
      <div class="flex  justify-center  lg:flex-row  md:gap-10">
        <!-- Left Section - Team Members -->

        <div class="container px-4 w-[50%]">
          <div class="carousel ">
            <div class="carousel-inner mr-5" :style="{ transform: `translateY(-${currentIndex * 100}%)` }">
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
                    <p class="font-bold text-6xl -mb-12 -mt-3  text-slate-300  leading-tight pt-3 pb-1"
                      style="text-indent: -5px"><em>"</em></p>

                    <p class=" text-gray-500 text-left text-[20px] ">

                      <span v-if="pageContent.length > 0">{{ member.description }}</span>
                      <span v-else class="block w-96 h-32 bg-gray-300 rounded animate-pulse mt-1"></span>

                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="  carousel-dots ml-5">
              <span v-for="(member, index) in teamMembers.slice(0, 6)" :key="index" class="dot"
                :class="{ active: currentIndex === index /2}" @click="goToSlide(index / 2)"></span>
            </div>
          </div>


        </div>

        <!-- Right Section - Content -->
        <div class="px-4 py-5 text-center md:px-1  md:py-10 lg:text-left  w-1/2">
          <h3 class="relative text-3xl font-bold md:text-5xl text-gray-950 mr-36">
            <span>
              <span v-if="pageContent.length > 0">{{ pageContent[10]?.heading }}</span>
              <span v-else class="block w-96 h-12 bg-gray-300 rounded animate-pulse"></span>

            </span>
            <span
              class="absolute w-[60px] md:w-[90px] h-[60px] md:h-[90px] bg-no-repeat bg-center bg-contain hidden md:block"
              style="background-image: url('https://prium.github.io/Shape/assets/img/illustrations/shapes-13.png'); right: -11%; top: -45%;"></span>



          </h3>

          <p class="py-3 text-lg text-gray-500 md:py-5 md:text-xl mr-80 my-5">

            <span v-if="pageContent.length > 0">{{ pageContent[10]?.description }} </span>
            <span v-else class="block w-96 h-7 bg-gray-300 rounded animate-pulse"></span>

          </p>

          <h3 class="py-3 text-2xl font-bold text-gray-800 md:py-5 md:text-4xl mr-60 mb-5">

            <span v-if="pageContent.length > 0">{{ pageContent[11]?.heading }}</span>
            <span v-else class="block w-96 h-10 bg-gray-300 rounded animate-pulse"></span>



          </h3>

          <div class="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Button :buttonStyle="custombutton.buttonStyle[0]" :text="custombutton.text[0]" :action="HandleClick" />
            <Button :buttonStyle="custombutton.buttonStyle[1]" :text="custombutton.text[1]" :action="HandleClick" />
          </div>

          <p class="py-3 text-sm text-gray-500 md:py-5 md:text-base mr-[400px] ">

            <span v-if="pageContent.length > 0"> {{ pageContent[11]?.description }}</span>
            <span v-else class="block w-96 h-7 bg-gray-300 rounded animate-pulse"></span>


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
  transition: transform 0.5s ease;
  flex: 1;

}

.carousel-item {
  min-height: 50%;

  display: flex;
  justify-content: center;
}

.carousel-dots {
  display: flex;
  flex-direction: column;
  /* Arrange dots vertically */
  position: absolute;
  /* Positioning */
  right: 1px;
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