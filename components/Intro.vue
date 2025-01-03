<template>
    <section class="relative bg-white">
  <div class="px-4 py-8 md:py-20 md:px-20">
    <!-- Header Text -->
    <div class="flex flex-col py-2 mx-2 my-3 text-center md:mx-5 md:my-5">
      <h3 class="text-2xl font-bold text-gray-900 md:text-4xl">
        Start with our design and give 
        <br class="hidden md:block" />
        your app a fresh look.
      </h3>
      <p class="mt-4 text-sm text-gray-500 md:mt-7 md:text-base">
        Updating branding in your app is now easier than ever with our design system. 
        <br class="hidden md:block" />
        The Shape allows you to make changes to your colors, icons within your app.
      </p>
    </div>

    <!-- Video Section -->
    <div class="relative flex justify-center py-5 mx-2 my-5 md:py-10 md:mx-10 md:my-10">
      <!-- Decorative Images - Hidden on mobile -->
      <img 
        class="absolute hidden md:block" 
        src="https://prium.github.io/Shape/assets/img/illustrations/home/home-vector-1.png" 
        alt="" 
        style="left:20%; width:16%; top:1%;"
      >
      <img 
        class="absolute hidden md:block" 
        src="https://prium.github.io/Shape/assets/img/illustrations/home/home-vector-2.png" 
        alt="" 
        style="right:15%; width:20%; top:1%;"
      >
      
      <div class="relative w-full max-w-[730px]">
        <img 
          class="absolute hidden md:block" 
          src="https://prium.github.io/Shape/assets/img/illustrations/home/jhiri-1.png" 
          alt="" 
          style="width:10%; left: -10%; top: -15%;"
        >
        <video
          class="w-full h-auto md:h-[410px] rounded"
          autoplay controls 
          src="https://prium.github.io/Shape/assets/video/beach.mp4"
        ></video>
      </div>
    </div>

    
    <div class="flex flex-col justify-around gap-6 px-2 pt-5 mx-10 md:flex-row md:px-5">
      
      <div class="flex items-start gap-3 p-1 md:items-center">
        <img
          class="w-10 md:w-[70px]"
          src="https://prium.github.io/Shape/assets/img/icons/icon-1.png"
          alt="download "
        />
        <div class="flex-1">
          <p class="text-xl font-semibold text-gray-700 md:text-2xl">
            Create your account in Shape
          </p>
          <p class="mt-2 text-sm text-gray-500 md:text-base">
            its easy, simple and just a few clicks job to create an account with shape
          </p>
        </div>
      </div>

      
      <div class="flex items-start gap-3 p-1 md:items-center">
        <img
          class="w-10 md:w-[70px]"
          src="https://prium.github.io/Shape/assets/img/icons/icon.png"
          alt="download"
        />
        <div class="flex-1">
          <p class="text-xl font-semibold text-gray-700 md:text-2xl">
            Start building beautiful Apps With shape
          </p>
          <p class="mt-2 text-sm text-gray-500 md:text-base">
            with our design system, you will find it no brainers job to build your application
          </p>
        </div>
      </div>

    
      <div class="flex items-start gap-3 p-1 md:items-center">
        <img
          class="w-10 md:w-[70px]"
          src="https://prium.github.io/Shape/assets/img/icons/icon-3.png"
          alt="download"
        />
        <div class="flex-1">
          <p class="text-xl font-semibold text-gray-700 md:text-2xl">
            Deploy your site and make money
          </p>
          <p class="mt-2 text-sm text-gray-500 md:text-base">
            make it, bake it, and next thing you know your cake is ready. enjoy it!
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>