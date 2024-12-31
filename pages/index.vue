<template>
  <main id="top" class="bg-white">
    <Navbar/>
    <!--first section-->
    <Home/>

    <!--Video-->

    <Intro/>

    <!--Style-->
    <Feature/>

    <!--workflow-->
    <Workflow/>

    <!-- resume -->

    <Hiring/>

    <!-- access -->
    <Access/>

    <!-- Downloads Section -->
    <Download/>

    <!-- Purchase Section -->
    <Purchase/>

    <!-- Footer -->
    <Footer />
  </main> 
</template>
<script setup>
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
import Home from '~/components/Home.vue';
import Intro from '~/components/Intro.vue';
import Purchase from '~/components/Purchase.vue';
import Access from '~/components/Access.vue';
import Hiring from '~/components/Hiring.vue';
import Workflow from '~/components/Workflow.vue';
import Feature from '~/components/Feature.vue';
</script>