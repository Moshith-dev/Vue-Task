<template>
  <section class="py-8 bg-white md:py-16">
    <div class="container px-4 mx-auto">
      <div class="flex flex-col justify-center gap-8 lg:flex-row md:gap-12">
        <!-- Left Section - Team Members -->
        <div class="flex flex-col items-center justify-center gap-6 lg:items-end">
          <!-- Team Member 1 -->
          <div class="flex flex-col items-center gap-4 p-3 md:flex-row md:p-5">
            <img
              class="rounded-full w-[100px] md:w-[150px]"
              src="https://prium.github.io/Shape/assets/img/team/adult-boy-1.png"
              alt="Mila Dalush"
            />
            <div class="px-2 text-center md:text-left md:px-5">
              <p class="text-xl font-semibold text-gray-700 md:text-2xl">
                Mila Dalush
              </p>
              <p class="text-base font-semibold text-gray-500 md:text-l">
                HR Manager
              </p>
              <p class="mt-2 text-gray-500">
                A design platform should unite code,
                <br class="hidden md:block" /> content, and design, helping people 
                <br class="hidden md:block" /> in each discipline collaborate. 
                <br class="hidden md:block" /> And That is Shape for you.
              </p>
            </div>
          </div>

          <!-- Team Member 2 -->
          <div class="flex flex-col items-center gap-4 p-3 md:flex-row md:p-5">
            <img
              class="rounded-full w-[100px] md:w-[150px]"
              src="https://prium.github.io/Shape/assets/img/team/adult-boy-3.png"
              alt="Mila Dalush"
            />
            <div class="px-2 text-center md:text-left md:px-5">
              <p class="text-xl font-semibold text-gray-700 md:text-2xl">
                Mila Dalush
              </p>
              <p class="text-base font-semibold text-gray-500 md:text-l">
                Front-End-Developer
              </p>
              <p class="mt-2 text-gray-500">
                Web publishing platforms 
                <br class="hidden md:block" />should empower you to build whatever 
                <br class="hidden md:block" />you like. Here at Shape 
                <br class="hidden md:block" />we work on that for you.
              </p>
            </div>
          </div>
        </div>

        <!-- Right Section - Content -->
        <div class="px-4 py-5 text-center md:px-1 md:py-10 lg:text-left">
          <h3 class="relative text-3xl font-bold md:text-5xl text-gray-950">
            <span>We are professionals</span>
            <span
              class="absolute w-[60px] md:w-[90px] h-[60px] md:h-[90px] bg-no-repeat bg-center bg-contain hidden md:block"
              style="background-image: url('https://prium.github.io/Shape/assets/img/illustrations/shapes-13.png'); right: 10%; top: -25%;"
            ></span>
            <br />
            <span>at Shape Studios.</span>
          </h3>
          
          <p class="py-3 text-lg text-gray-500 md:py-5 md:text-xl">
            A design dummy text for this content, helping people in each discipline 
            <br class="hidden md:block" />collaborate. And that is Shape for you.
          </p>
          
          <h3 class="py-3 text-2xl font-bold text-gray-800 md:py-5 md:text-4xl">
            Excited about our team?
            <br />
            We are hiring!
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
            *Please read our <b>terms and conditions</b> before dropping your CV
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.transition-colors {
  transition: all 0.3s ease-in-out;
}

button:hover {
  transform: translateY(-2px);
  transition: transform 0.2s ease-in-out;
}
</style>