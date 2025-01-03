<template>
  <footer class="bg-[#000000] text-gray-400 py-8 md:py-16">
    <div class="container px-4 mx-auto md:px-8">
      <!-- Main Grid -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-12">
        <!-- Navigate Column -->
        <div class="text-center md:text-left">
          <h2 class="mb-4 text-xl font-semibold text-white md:mb-6 md:text-2xl">
            Navigate
          </h2>
          <ul class="space-y-2 md:space-y-3">
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
        <div class="text-center md:text-left">
          <h2 class="mb-4 text-xl font-semibold text-white md:mb-6 md:text-2xl">
            Contact
          </h2>
          <div class="space-y-4">
            <div class="flex items-start justify-center space-x-3 md:justify-start">
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

        <div class="text-center md:text-left lg:col-span-1">
          <h2 class="mb-4 text-xl font-semibold text-white md:mb-6 md:text-2xl">
            Subscribe
          </h2>
          <p class="max-w-md mx-auto mb-4 p md:mb-6 md:mx-0">
            Latest Shape news, articles, and resources sent straight to your inbox every month.
          </p>

          <div class="max-w-md mx-auto space-y-3 md:space-y-4 md:mx-0">
            <input
              type="email"
              placeholder="Your Email"
              class="w-full px-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 button"
            />
            <button
              class="w-full px-4 py-2 text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-700 button"
            >
              Subscribe
            </button>
            <p class="text-xs p md:text-sm">
              We'll never share your details. See our
              <a href="#" class="text-indigo-400 hover:text-indigo-300">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>

      
      <div class="pt-6 mt-8 border-t md:mt-16 md:pt-8 border-gray-950">
        
        <div class="flex flex-wrap justify-center gap-1 md:space-x-6">
          <a href="#"><img class="" src="/assets/twitter.png" alt="" width="30px" style="filter: invert();"></a>
          <a href="#"><img class="" src="/assets/insta.png" alt="" width="30px" style="filter: invert();"></a>
          <a href="#"><img class="" src="/assets/youtube.png" alt="" width="30px" style="filter: invert();"></a>
          <a href="#"><img class="" src="/assets/facebook.png" alt="" width="30px" style="filter: invert();"></a>
          <a href="#"><img class="" src="/assets/linked-in.png" alt="" width="30px" style="filter: invert();"></a>
          
        </div>

      
        <div class="mt-4 text-center md:mt-6">
          Made With <span class="text-red-500">❤️</span> by <b class="text-white">MoHa</b>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>