<template>
  <main id="top" class="bg-white">
    <nav class="flex items-center justify-between px-8 py-4 bg-[#0f0f1a] fixed w-full overflow-hidden">
      <a class="flex-shrink-0">
        <img src="/assets/logo.png" alt="logo" width="100" />
      </a>

      <div class="flex items-center space-x-6">
        <div class="relative group">
          <button class="text-gray-400 transition-colors hover:text-white">
            Pages
          </button>
          <div class="absolute left-0 hidden pt-4 group-hover:block">
            <div class="w-48 bg-[#ffffff] rounded-lg shadow-lg py-2">
              <a
                href="#"
                class="block px-4 py-2 text-gray-400 hover:text-white rounded hover:bg-[#2f2f3f]"
                >Dashboard</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-gray-400 hover:text-white rounded hover:bg-[#2f2f3f]"
                >Settings</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-gray-400 hover:text-white rounded hover:bg-[#2f2f3f]"
                >Profile</a
              >
            </div>
          </div>
        </div>

        <div class="relative group">
          <button class="text-gray-400 transition-colors hover:text-white">
            Components
          </button>
          <div class="absolute left-0 hidden pt-4 group-hover:block">
            <div
              class="grid grid-cols-3 gap-1 p-1 bg-[#ffffff] rounded-lg shadow-lg w-[300px]"
            >
              <a
                href="#"
                class="px-1 py-1 text-gray-400 hover:text-white hover:bg-[#2f2f3f] rounded"
                >Buttons</a
              >
              <a
                href="#"
                class="px-1 py-1 text-gray-400 hover:text-white hover:bg-[#2f2f3f] rounded"
                >Cards</a
              >
              <a
                href="#"
                class="px-1 py-1 text-gray-400 hover:text-white hover:bg-[#2f2f3f] rounded"
                >Forms</a
              >
              <a
                href="#"
                class="px-1 py-1 text-gray-400 hover:text-white hover:bg-[#2f2f3f] rounded"
                >Tables</a
              >
              <a
                href="#"
                class="px-1 py-1 text-gray-400 hover:text-white hover:bg-[#2f2f3f] rounded"
                >Modals</a
              >
              <a
                href="#"
                class="px-1 py-1 text-gray-400 hover:text-white hover:bg-[#2f2f3f] rounded"
                >Tabs</a
              >
              <a
                href="#"
                class="px-1 py-1 text-gray-400 hover:text-white hover:bg-[#2f2f3f] rounded"
                >Alerts</a
              >
              <a
                href="#"
                class="px-1 py-1 text-gray-400 hover:text-white hover:bg-[#2f2f3f] rounded"
                >Badges</a
              >
              <a
                href="#"
                class="px-1 py-1 text-gray-400 hover:text-white hover:bg-[#2f2f3f] rounded"
                >Tooltips</a
              >
              <a
                href="#"
                class="px-1 py-1 text-gray-400 hover:text-white hover:bg-[#2f2f3f] rounded"
                >Tooltips</a
              >
            </div>
          </div>
        </div>

        <div class="relative group">
          <button class="text-gray-400 transition-colors hover:text-white">
            Utilities
          </button>
          <div class="absolute left-0 hidden pt-4 group-hover:block">
            <div class="w-48 bg-[#ffffff] rounded-lg shadow-lg py-2">
              <a
                href="#"
                class="block px-4 py-2 text-gray-400 hover:text-white rounded hover:bg-[#2f2f3f]"
                >Colors</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-gray-400 hover:text-white rounded hover:bg-[#2f2f3f]"
                >Typography</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-gray-400 hover:text-white rounded hover:bg-[#2f2f3f]"
                >Spacing</a
              >
            </div>
          </div>
        </div>

        <div class="relative group">
          <button class="text-gray-400 transition-colors hover:text-white">
            Plugins
          </button>
          <div class="absolute left-0 hidden pt-4 group-hover:block">
            <div class="w-48 bg-[#ffffff] rounded-lg shadow-lg py-2">
              <a
                href="#"
                class="block px-4 py-2 text-gray-400 hover:text-white rounded hover:bg-[#2f2f3f]"
                >Authentication</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-gray-400 hover:text-white rounded hover:bg-[#2f2f3f]"
                >Analytics</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-gray-400 hover:text-white rounded hover:bg-[#2f2f3f]"
                >Storage</a
              >
            </div>
          </div>
        </div>

        <div class="relative group">
          <button class="text-gray-400 transition-colors hover:text-white">
            Documentation
          </button>
          <div class="absolute left-0 hidden pt-4 group-hover:block">
            <div class="w-48 bg-[#ffffff] rounded-lg shadow-lg py-2">
              <a
                href="#"
                class="block px-4 py-2 text-gray-400 hover:text-white rounded hover:bg-[#2f2f3f]"
                >Getting Started</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-gray-400 hover:text-white rounded hover:bg-[#2f2f3f]"
                >API Reference</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-gray-400 hover:text-white rounded hover:bg-[#2f2f3f]"
                >Examples</a
              >
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <a
          class="px-6 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-700"
          href="#!"
          >Sign In</a
        >
        <a
          class="px-6 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500"
          href="#!"
          >Purchase</a
        >
      </div>
    </nav>

    <!--first section-->
    <section class="pt-[150px] bg-black " >
      <div class="items-center pt-2 col">
        <h1 class="text-6xl font-medium text-center text-white capitalize">
          An attractive landing <br />
          for your mobile app.
        </h1>
        <p class="my-10 text-2xl text-center text-gray-500 capitalize">
          The fastest way to assemble beautiful screens and then <br />
          output clean, reusable code.
        </p>
        <div class="flex justify-center">
          <input
            type="email"
            placeholder="Your Email"
            class="px-6 py-4 text-lg font-bold bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            class="px-6 py-4 ml-10 text-lg font-bold text-white bg-indigo-600 rounded hover:bg-indigo-500"
          >
            Get Access
          </button>
        </div>
      </div>
    <div class="justify-center mt-5 row">
      <p class="font-bold text-center text-gray-500 capitalize">trusted by companies like this</p>

    </div>
    
    </section>

    <!--Video-->

    <section class="bg-white">
      <div class="pt-20">
        <div class="flex flex-col py-2 mx-5 my-5 text-center">
          <h3 class="text-4xl font-bold text-centertext-gray-900">
            Start with our design and give <br />
            your app a fresh look.
          </h3>
          <p class="text-gray-500 mt-7">
            Updating branding in your app is now easier than ever with our
            design system. The <br />
            Shape allows you to make changes to your colors, icons within your
            app.
          </p>
        </div>
        <div class="flex justify-center py-2 mx-10 my-5 row">
          <video
            class="items-center w-[730px] h-[410px] rounded"
            controls
            src="https://prium.github.io/Shape/assets/video/beach.mp4"
          ></video>
        </div>
        <div class="flex justify-around mx-5 mt-5">
          <div class="flex items-center gap-2 p-1 m-1">
            <img
              class="m-2"
              src="https://prium.github.io/Shape/assets/img/icons/icon-1.png"
              alt="download"
              width="50"
            />
            <div class="px-5 text-justify card-body">
              <p class="px-2 py-1 text-xl text-gray-700 title">
                Create your account in Shape
              </p>
              <p class="px-2 py-1 text-gray-500 subtitle">
                its easy, simple and just a few clicks job to create an account
                with shape
              </p>
            </div>
          </div>
          <div class="flex items-center gap-2 p-1 m-3">
            <img
              class="m-2"
              src="https://prium.github.io/Shape/assets/img/icons/icon.png"
              alt="download"
              width="50"
            />
            <div class="px-5 text-justify card-body">
              <p class="px-2 py-1 text-xl text-gray-700 title">
                Start building beautiful Apps With shape
              </p>
              <p class="px-2 py-1 text-gray-500 subtitle">
                with our design system, you will find it no brainers job to
                build your application
              </p>
            </div>
          </div>
          <div class="flex items-center gap-2 p-1 m-3">
            <img
              class="m-2"
              src="https://prium.github.io/Shape/assets/img/icons/icon-3.png"
              alt="download"
              width="50"
            />
            <div class="px-5 text-justify card-body">
              <p class="px-2 py-1 text-xl text-gray-700 title">
                Deploy your site and make money
              </p>
              <p class="px-2 py-1 text-gray-500 subtitle">
                make it, bake it, and next thing you know your cake is ready.
                enjoy it!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Style-->
    <section class="bg-gray-800">
      <div class="py-10">
        <div class="flex justify-around px-10">
          <div class="flex flex-col justify-center gap-3 p-10">
            <h3 class="text-4xl font-bold text-white">
              It’s Stylish by default.
            </h3>
            <div class="items-center my-5 text-gray-400">
              With our built-in design system, it's easy to create <br />
              beautiful screens with ease. And because we separate <br />
              style from layout, you can try out new themes <br />
              instantly.
            </div>
            <div class="flex items-center gap-4">
              <div>
                <h3 class="text-xl font-bold text-white">Smart Features</h3>
                <p class="text-gray-400">
                  we have 120+ smart unique <br />
                  features
                </p>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white">Dynamic structure</h3>
                <p class="text-gray-400">
                  Our structure is stable and<br />
                  versatile
                </p>
              </div>
            </div>
          </div>
          <div class="items-center">
            <img
              src="https://prium.github.io/Shape/assets/img/gallery/iPad-Pro-Design-Mockup.png"
              alt="download"
              width="450"
            />
          </div>
        </div>
      </div>
    </section>

    <!--workflow-->
    <section class="bg-gray-950">
      <div>
        <div class="flex justify-between px-10">
          <div class="flex w-[50%] p-10 items-center">
            <img src="/assets/bg3.png" alt="download" width="450" />
          </div>
          <div class="w-[50%] px-1 py-10">
            <h3 class="text-4xl font-bold text-white">
              Fits Into Any Workflow.
            </h3>
            <p class="py-2 text-gray-500">
              our system goes with almost any kind of integrations <br />
              and supports almost every platform.
            </p>
            <div class="grid grid-cols-2">
              <div
                class="flex items-center gap-2 px-2 py-3 m-3 bg-gray-800 rounded-lg group hover:bg-white"
              >
                <img
                  class="m-2"
                  src="https://prium.github.io/Shape/assets/img/icons/slack-logo.png"
                  alt="download"
                  width="50"
                />
                <div class="px-5 text-justify card-body">
                  <p
                    class="px-2 py-1 text-xl text-white title group-hover:text-gray-900"
                  >
                    Slack
                  </p>
                  <p class="px-2 py-1 text-gray-500 subtitle">communication</p>
                </div>
              </div>
              <div
                class="flex items-center gap-2 px-2 py-3 m-3 bg-gray-800 rounded-lg group hover:bg-white"
              >
                <img
                  class="m-2"
                  src="https://prium.github.io/Shape/assets/img/icons/dropbox-logo.png"
                  alt="download"
                  width="50"
                />
                <div class="px-3 text-justify card-body">
                  <p
                    class="px-2 py-1 text-xl text-white title group-hover:text-gray-900"
                  >
                    Dropbox
                  </p>
                  <p class="px-2 py-1 text-gray-500 subtitle">Productivity</p>
                </div>
              </div>
              <div
                class="flex items-center gap-2 px-2 py-3 m-3 bg-gray-800 rounded-lg group hover:bg-white"
              >
                <img
                  class="m-2"
                  src="https://prium.github.io/Shape/assets/img/icons/hubstaff-logo.png"
                  alt="download"
                  width="50"
                />
                <div class="px-5 text-justify card-body">
                  <p
                    class="px-2 py-1 text-xl text-white title group-hover:text-gray-900"
                  >
                    Hubstaff
                  </p>
                  <p class="px-2 py-1 text-gray-500 subtitle">Productivity</p>
                </div>
              </div>
              <div
                class="flex items-center gap-2 px-2 py-3 m-3 bg-gray-800 rounded-lg group hover:bg-white"
              >
                <img
                  class="m-2"
                  src="https://prium.github.io/Shape/assets/img/icons/Sketch_Logo.png"
                  alt="download"
                  width="50"
                />
                <div class="px-5 text-justify card-body">
                  <p
                    class="px-3 py-1 text-xl text-white title group-hover:text-gray-900"
                  >
                    Sketch
                  </p>
                  <p class="px-3 py-1 text-gray-500 subtitle">Creative Tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- resume -->

    <section class="bg-white">
      <div>
        <div class="flex justify-between px-10 py-5">
          <div class="w-[50%]">
            <img src="/assets/Shape_App.png" alt="download" width="450" />
          </div>
          <div class="w-[50%] px-1 py-10">
            <h3 class="text-4xl font-bold text-black">
              we are professionals<br />
              at shape Studios.
            </h3>
            <p class="py-5 text-gray-500">
              A design dummy text for this content, and design, helping people
              in each discipline collaborate. And That is Shape for you.
            </p>
            <h3 class="my-4 text-4xl font-bold">
              Excited about our team?<br />
              we are hiring!
            </h3>
            <button
              class="px-8 py-4 ml-10 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500"
            >
              Drop Your CV
            </button>
            <button
              class="px-8 py-4 ml-10 text-indigo-600 bg-gray-300 rounded-lg hover:bg-indigo-500"
            >
              Learn More
            </button>
            <p class="py-10 text-gray-500">
              *Please read our <b>term and conditions</b> <br />
              before dropping your CV
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- access -->
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

    <!-- Downloads Section -->
    <section class="bg-white">
      <div class="py-20">
        <div class="flex justify-around px-10">
          <div class="flex flex-col justify-center gap-3 p-10">
            <h3 class="text-4xl font-bold text-gray-700">Download It Now</h3>
            <div class="text-gray-500 w-[320px] items-center my-10 px-6">
              You can get the mobile version of our application from stores for
              free
            </div>
            <div class="flex items-center gap-4">
              <a
                class="px-6 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-700"
                href="#!"
                >App Store</a
              >
              <a
                class="px-6 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500"
                href="#!"
                >Google Play</a
              >
            </div>
          </div>
          <div>
            <img src="/assets/Shape_App.png" alt="download" width="450" />
          </div>
        </div>
        <div class="float-right pr-20 mr-10">
          <img
            class="img-fluid"
            src="/assets/ground_shape.png"
            alt="download"
            width="700"
          />
        </div>
      </div>
    </section>

    <!-- Purchase Section -->
    <section class="py-10 text-center bg-gray-950">
      <div class="container px-8 mx-auto">
        <h2 class="mb-8 text-3xl font-bold text-white">
          Start Building Your Website
        </h2>
        <div class="flex justify-center">
          <a
            href="#!"
            class="inline-block px-8 py-3 text-lg font-medium text-gray-500 transition-colors bg-white rounded-lg hover:bg-gray-400"
          >
            Purchase
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
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
  </main> 
</template>
<script setup>

</script>