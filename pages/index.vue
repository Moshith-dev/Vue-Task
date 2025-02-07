<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { GetPageContentApi, GetMenuApi } from '@/services/home';

type TpageContent = {
  heading: string;
  description: string;
};
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

type Tmenu = {
  menu: string;
  items: string[];
  parentId: number;
};

const MenuItem = ref<Tmenu[]>([]);
async function GetMenu() {
  try {
    const response = await GetMenuApi();
    if (response.status === 200) {
      console.log(response.data);
      MenuItem.value = response.data;
    }
  } catch (error) {
    console.log(error);
  }
}



onMounted(() => {
  getPageContent();
  GetMenu();
});

</script>
<template>
  <main id="top" class="bg-white">
    <Navbar :MenuItem="MenuItem"/>
    <!--first section-->
    <Home :pageContent="pageContent"/>

    <!--Video-->

    <Intro :pageContent="pageContent"/>

    <!--Style-->
    <Feature :pageContent="pageContent"/>

    <!--workflow-->
    <Workflow :pageContent="pageContent"/>

    <!-- resume -->

    <Hiring :pageContent="pageContent"/>

    <!-- access -->
    <Access :pageContent="pageContent"/>

    <!-- Downloads Section -->
    <Download :pageContent="pageContent"/>

    <!-- Purchase Section -->
    <Purchase :pageContent="pageContent"/>

    <!-- Footer -->
    <Footer :pageContent="pageContent" :MenuItem="MenuItem"/>
    
  </main> 
</template>


<style scoped>

</style>
