<template>
  <section>
    <div
      class="bg-holder"
      style="
        background-image: url('https://prium.github.io/Shape/assets/img/bg-img/home-header.png');
      "
    ></div>

    <div
      class="bg-holder"
      style="
        background-image: url('https://prium.github.io/Shape/assets/img/bg-img/appland_bg_companies.svg');
      "
    ></div>

    <div
        class="relative overflow-visible bg-bottom bg-no-repeat bg-contain"
        style="
          background-image: url('https://prium.github.io/Shape/assets/img/bg-img/appland_bg_companies.svg');
        "
      >
        <button
          class="w-full px-4 py-3 text-base font-bold text-white bg-indigo-600 rounded md:w-auto md:px-6 md:py-4 md:ml-10 lg:text-lg button hover:bg-indigo-500"
        >
          Get Access
        </button>
      </div>  
  </section>
  <section class="pt-[100px] bg-gray-950 relative">
    <div
      class="relative bg-center bg-no-repeat bg-contain h-[200vh]"
      style="
        background-image: url('https://prium.github.io/Shape/assets/img/bg-img/home-header.png');
      "
    >
      <!-- <div
        class="relative overflow-visible bg-bottom bg-no-repeat bg-contain"
        style="
          background-image: url('https://prium.github.io/Shape/assets/img/bg-img/appland_bg_companies.svg');
        "
      >
        <button
          class="w-full px-4 py-3 text-base font-bold text-white bg-indigo-600 rounded md:w-auto md:px-6 md:py-4 md:ml-10 lg:text-lg button hover:bg-indigo-500"
        >
          Get Access
        </button>
      </div> -->

      <div class="">
        <div class="flex">
          <img
            class="absolute w-[8%] md:w-[8%] top-[5%] left-[5%] md:left-[18%]"
            src="https://prium.github.io/Shape/assets/img/illustrations/home/appland_shapes2.png"
            alt=""
          />
          <img
            class="absolute w-[10%] md:w-[10%] top-[13%] right-[5%] md:right-[13%]"
            src="https://prium.github.io/Shape/assets/img/illustrations/home/appland_shapes4.png"
            alt=""
          />
          <div class="items-center px-4 pt-2 md:px-6 lg:px-8">
            <h1
              class="text-3xl font-medium text-center text-white capitalize md:text-4xl lg:text-6xl"
            >
              An attractive landing <br class="hidden md:block" />
              for your mobile app.
            </h1>
            <p
              class="my-6 text-lg text-center text-gray-500 capitalize md:my-10 md:text-xl lg:text-2xl"
            >
              The fastest way to assemble beautiful screens and then
              <br class="hidden md:block" />
              output clean, reusable code.
            </p>
            <div
              class="relative flex flex-col justify-center gap-4 pb-10 md:flex-row md:gap-0 md:pb-20"
            >
              <img
                class="w-full max-w-[800px] absolute bottom-1 left-1/2 transform -translate-x-1/2"
                src="https://prium.github.io/Shape/assets/img/gallery/iPad-Pro-Mockup.png"
                alt=""
              />
            </div>
          </div>
          <div class="relative py-10 md:py-10">
            <div class="flex-row justify-center">
              <p
                class="text-sm font-bold text-center text-gray-500 capitalize md:text-base"
              >
                Trusted by companies like this
              </p>
              <div class="flex justify-center gap-2 py-5 my-5">
                <img
                  src="https://prium.github.io/Shape/assets/img/logos/airbnb-logo.png"
                  alt=""
                  width="200px"
                />
                <img
                  src="https://prium.github.io/Shape/assets/img/logos/google-logo.png"
                  alt=""
                  width="200px"
                />
                <img
                  src="https://prium.github.io/Shape/assets/img/logos/Spotify_Logo.png"
                  alt=""
                  width="200px"
                />
                <img
                  src="https://prium.github.io/Shape/assets/img/logos/microsoft-logo.png"
                  alt=""
                  width="200px"
                />
                <img
                  src="https://prium.github.io/Shape/assets/img/logos/Paypal-logo.png"
                  alt=""
                  width="200px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-holder {
  position: absolute;
  width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  will-change: transform, opacity, filter;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-repeat: no-repeat;
  z-index: 0;
}

.bg-holder.overlay:before {
  position: absolute;
  content: "";
  background: rgba(0, 0, 0, 0.25);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
