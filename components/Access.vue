<template>
    <section
      class="relative h-[300px] bg-cover bg-center bg-no-repeat"
      style="
        background-image: url('https://prium.github.io/Shape/assets/img/bg-img/bg-cta-home.png');
      "
    >
      <div class="absolute inset-0 bg-black bg-opacity-10"></div>
      <div class="relative h-full">
        <div class="float-right px-[100px] py-9 text-center">
          <h3 class="text-5xl font-bold text-white">Get Early Access</h3>
          <p class="py-10 text-lg text-white">
            Secure your spot in our beta with just an email
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            class="px-4 py-2 ml-10 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500"
          >
            Get Early Access
          </button>
        </div>
      </div>
    </section>
</template>