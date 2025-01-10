<template>
  <footer class="bg-gray-950 text-gray-400 pt-8 md:pt-16 md:pb-[1px]">
    <div class="container px-4 mx-auto md:px-5 my-8">
      <!-- Main Grid -->
      <div class="flex justify-between ">
        <!-- Navigate Column -->
        <div class="text-center md:text-left px-5 ">
          <h2 class="mb-4 text-5xl font-semibold text-white md:mb-6 md:text-4xl">
            Navigate
          </h2>
          <ul class="space-y-2 text-xl md:space-y-3 ml-2">
            <li v-for="link in ['Demos', 'Pages', 'Blog', 'Portfolio', 'Elements']" :key="link">
              <a 
                href="#" 
                class="inline-block py-1 transition-colors hover:text-white"
              >
                {{ link }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Column -->
        <div class="item-center md:text-left px-5 ">
          <h2 class="mb-4 text-xl font-semibold text-white md:mb-6 md:text-4xl">
            Contact
          </h2>
          <div class="space-y-4 text-xl ml-2">
            <div class="flex items-start justify-center space-x-3 md:justify-start ">
              <span class="text-amber-500">📍</span>
              <div>
                <p>369 ape view Avenue</p>
                <p>Brooklyn, NY</p>
              </div>
            </div>
            <div class="flex items-start justify-center space-x-3 md:justify-start">
              <span class="text-amber-500">📞</span>
              <div>
                <p>369 ape view Avenue</p>
                <p>Mon - Fri 9am - 5pm</p>
              </div>
            </div>
            <div class="flex items-start justify-center space-x-3 md:justify-start">
              <span class="text-amber-500">✉️</span>
              <div>
                <p>+91 3929 3355</p>
                <p>Brooklyn, NY</p>
              </div>
            </div>
          </div>
        </div>

        <div class=" text-center px-5 ">
          <h2 class="mb-4 text-xl font-semibold text-white md:mb-6 md:text-4xl">
            Subscribe
          </h2>
          <p class="max-w-md mx-auto mb-4 p md:mb-6 md:mx-0">
            Latest Shape news, articles, and resources sent straight to your inbox every month.
          </p>

          <div class="max-w-md mx-auto text-xl space-y-3 md:space-y-4 md:mx-0">
            <input
              type="email"
              placeholder="Your Email"
              class="w-full px-6 py-4 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 "
            />
            <button
              class="w-full px-6 py-4 text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-700 "
            >
              Subscribe
            </button>
            <p class="text-xs p md:text-[16px]">
              We'll never share your details. See our Privacy Policy
            </p>
          </div>
        </div>
      </div>

      
      <div class="pt-6 mt-8 border-t md:mt-16 md:pt-8 border-gray-950 ">
        
        <div class="flex justify-center gap-1 pt-5">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0,0,256,256">
<g fill="#8c919d" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M22,3.999c-0.78,0.463 -2.345,1.094 -3.265,1.276c-0.027,0.007 -0.049,0.016 -0.075,0.023c-0.813,-0.802 -1.927,-1.299 -3.16,-1.299c-2.485,0 -4.5,2.015 -4.5,4.5c0,0.131 -0.011,0.372 0,0.5c-3.353,0 -5.905,-1.756 -7.735,-4c-0.199,0.5 -0.286,1.29 -0.286,2.032c0,1.401 1.095,2.777 2.8,3.63c-0.314,0.081 -0.66,0.139 -1.02,0.139c-0.581,0 -1.196,-0.153 -1.759,-0.617c0,0.017 0,0.033 0,0.051c0,1.958 2.078,3.291 3.926,3.662c-0.375,0.221 -1.131,0.243 -1.5,0.243c-0.26,0 -1.18,-0.119 -1.426,-0.165c0.514,1.605 2.368,2.507 4.135,2.539c-1.382,1.084 -2.341,1.486 -5.171,1.486h-0.964c1.788,1.146 4.065,2.001 6.347,2.001c7.43,0 11.653,-5.663 11.653,-11.001c0,-0.086 -0.002,-0.266 -0.005,-0.447c0,-0.018 0.005,-0.035 0.005,-0.053c0,-0.027 -0.008,-0.053 -0.008,-0.08c-0.003,-0.136 -0.006,-0.263 -0.009,-0.329c0.79,-0.57 1.475,-1.281 2.017,-2.091c-0.725,0.322 -1.503,0.538 -2.32,0.636c0.834,-0.5 2.019,-1.692 2.32,-2.636z"></path></g></g>
</svg>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0,0,256,256">
                <g fill="#8c919d" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.33333,5.33333)"><path d="M42,11.5v25c0,3.03 -2.47,5.5 -5.5,5.5h-5.5v-14h3.62c0.51,0 0.94,-0.38 1,-0.88l0.37,-3c0.04,-0.28 -0.05,-0.57 -0.24,-0.78c-0.19,-0.22 -0.46,-0.34 -0.75,-0.34h-4v-3.5c0,-1.1 0.9,-2 2,-2h2c0.55,0 1,-0.45 1,-1v-3.38c0,-0.51 -0.4,-0.94 -0.91,-0.99c-0.06,-0.01 -1.47,-0.13 -3.26,-0.13c-4.4,0 -6.83,2.62 -6.83,7.37v3.63h-4c-0.55,0 -1,0.45 -1,1v3c0,0.55 0.45,1 1,1h4v14h-13.5c-3.03,0 -5.5,-2.47 -5.5,-5.5v-25c0,-3.03 2.47,-5.5 5.5,-5.5h25c3.03,0 5.5,2.47 5.5,5.5z"></path></g></g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0,0,256,256">
<g fill="#8c919d" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.33333,5.33333)"><path d="M16.5,5c-6.341,0 -11.5,5.159 -11.5,11.5v15c0,6.341 5.159,11.5 11.5,11.5h15c6.341,0 11.5,-5.159 11.5,-11.5v-15c0,-6.341 -5.159,-11.5 -11.5,-11.5zM34,12c1.105,0 2,0.895 2,2c0,1.104 -0.895,2 -2,2c-1.105,0 -2,-0.896 -2,-2c0,-1.105 0.895,-2 2,-2zM24,14c5.514,0 10,4.486 10,10c0,5.514 -4.486,10 -10,10c-5.514,0 -10,-4.486 -10,-10c0,-5.514 4.486,-10 10,-10zM24,17c-3.86599,0 -7,3.13401 -7,7c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7z"></path></g></g>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0,0,256,256">
<g fill="#8c919d" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M19,3h-14c-1.105,0 -2,0.895 -2,2v14c0,1.105 0.895,2 2,2h14c1.105,0 2,-0.895 2,-2v-14c0,-1.105 -0.895,-2 -2,-2zM9,17h-2.523v-7h2.523zM7.694,8.717c-0.771,0 -1.286,-0.514 -1.286,-1.2c0,-0.686 0.514,-1.2 1.371,-1.2c0.771,0 1.286,0.514 1.286,1.2c0,0.686 -0.514,1.2 -1.371,1.2zM18,17h-2.442v-3.826c0,-1.058 -0.651,-1.302 -0.895,-1.302c-0.244,0 -1.058,0.163 -1.058,1.302c0,0.163 0,3.826 0,3.826h-2.523v-7h2.523v0.977c0.325,-0.57 0.976,-0.977 2.197,-0.977c1.221,0 2.198,0.977 2.198,3.174z"></path></g></g>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0,0,256,256">
<g fill="#8c919d" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M21.582,6.186c-0.23,-0.86 -0.908,-1.538 -1.768,-1.768c-1.56,-0.418 -7.814,-0.418 -7.814,-0.418c0,0 -6.254,0 -7.814,0.418c-0.86,0.23 -1.538,0.908 -1.768,1.768c-0.418,1.56 -0.418,5.814 -0.418,5.814c0,0 0,4.254 0.418,5.814c0.23,0.86 0.908,1.538 1.768,1.768c1.56,0.418 7.814,0.418 7.814,0.418c0,0 6.254,0 7.814,-0.418c0.861,-0.23 1.538,-0.908 1.768,-1.768c0.418,-1.56 0.418,-5.814 0.418,-5.814c0,0 0,-4.254 -0.418,-5.814zM10,15.464v-6.928l6,3.464z"></path></g></g>
</svg>
              </div>

      
        <div class="mt-4 text-center md:mt-3 text-xl">
          Made With <span class="text-red-500">❤️</span> by <b class="text-white">ThemeWagon</b>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';


onMounted(() => {
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

</script>


<style scoped>
.anim-slide-left {
  opacity: 0;
  transform: translateX(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.anim-slide-left.animate{
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
