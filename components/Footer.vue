<template>
    <footer class="bg-[#000000] text-gray-400 py-16">
    <div class="container grid grid-cols-3 gap-8 px-8 mx-auto">
      <!-- Navigate Column -->
      <div>
        <h2 class="mb-6 text-2xl font-semibold text-white">Navigate</h2>
        <ul class="space-y-3">
          <li>
            <a href="#" class="transition-colors hover:text-white">Demos</a>
          </li>
          <li>
            <a href="#" class="transition-colors hover:text-white">Pages</a>
          </li>
          <li>
            <a href="#" class="transition-colors hover:text-white">Blog</a>
          </li>
          <li>
            <a href="#" class="transition-colors hover:text-white"
              >Portfolio</a
            >
          </li>
          <li>
            <a href="#" class="transition-colors hover:text-white"
              >Elements</a
            >
          </li>
        </ul>
      </div>

      <!-- Contact Column -->
      <div>
        <h2 class="mb-6 text-2xl font-semibold text-white">Contact</h2>
        <div class="space-y-4">
          <div class="flex items-start space-x-3">
            <span class="text-amber-500">📍</span>
            <div>
              <p>369 ape view Avenue</p>
              <p>Brooklyn, NY</p>
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <span class="text-amber-500">📞</span>
            <div>
              <p>369 ape view Avenue</p>
              <p>Mon - Fri 9am - 5pm</p>
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <span class="text-amber-500">✉️</span>
            <div>
              <p>+91 3929 3355</p>
              <p>Brooklyn, NY</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Subscribe Column -->
      <div>
        <h2 class="mb-6 text-2xl font-semibold text-white">Subscribe</h2>
        <p class="mb-6">
          Latest Shape news, articles, and resources sent straight to your
          inbox every month.
        </p>

        <div class="space-y-4">
          <input
            type="email"
            placeholder="Your Email"
            class="w-full px-4 py-3 bg-white rounded-lg focus:outline-none"
          />
          <button
            class="w-full px-4 py-3 text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Subscribe
          </button>
          <p class="text-sm">
            We'll never share your details. See our
            <a href="#" class="text-indigo-400 hover:text-indigo-300"
              >Privacy Policy</a
            >
          </p>
        </div>
      </div>
    </div>

    <!-- Social Links & Credits -->
    <div class="container px-8 pt-8 mx-auto mt-16 border-t border-gray-950">
      <div class="flex justify-center space-x-6">
        <a href="#" class="transition-colors hover:text-white">Twitter</a>
        <a href="#" class="transition-colors hover:text-white">Facebook</a>
        <a href="#" class="transition-colors hover:text-white">YouTube</a>
        <a href="#" class="transition-colors hover:text-white">Instagram</a>
        <a href="#" class="transition-colors hover:text-white">LinkedIn</a>
      </div>
      <div class="mt-6 text-center">
        Made With ❤️ by <b class="text-white">MoHa</b>
      </div>
    </div>
  </footer>
</template>