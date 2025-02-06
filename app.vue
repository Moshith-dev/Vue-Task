<script setup lang="ts">
// import { onMounted } from 'vue'
// import $ from 'jquery'

// // Define the items that will be displayed in the carousel
// const items = [
//   { title: 'Item 1', description: 'Description for item 1.' },
//   { title: 'Item 2', description: 'Description for item 2.' },
//   { title: 'Item 3', description: 'Description for item 3.' },
//   { title: 'Item 4', description: 'Description for item 4.' },
//   { title: 'Item 5', description: 'Description for item 5.' },
//   { title: 'Item 6', description: 'Description for item 6.' }
// ]

// // Initialize the carousel when the component is mounted
// onMounted(() => {
//   $('.carousel').slick({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     centerMode: true,
//     centerPadding: '0px',
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: true
//         }
//       }
//     ]
//   })
// })
</script>
<template>
  <div>
    <NuxtPage />
  </div>
  <!-- <div class="carousel">
    <div v-for="(item, index) in items" :key="index" class="carousel-item">
      <h4>{{ item.title }}</h4>
      <p>{{ item.description }}</p>
    </div>
  </div> -->
  
</template>
<style scoped>
.carousel {
  width: 80%;
  margin: 0 auto;
}

.carousel-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  background: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 5px;
  height: 200px;
}

.slick-dots {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.slick-dots li button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #5a45ff;
  border: none;
  transition: all 0.3s ease;
}

.slick-dots .slick-active button {
  background: transparent;
  border: 2px solid #5a45ff;
}

.slick-dots li {
  margin: 5px 0;
  display: block;
}

.slick-dots li button:before {
  display: none;
}
</style>