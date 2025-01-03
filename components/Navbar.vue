<template>
    <nav class="flex items-center justify-between px-8 py-4 bg-[#0f0f1a] fixed w-full z-50 ">
      <a class="flex-shrink-0 pl-5">
        <img src="/assets/logo.png" alt="logo" width="100" />
      </a>

      <div class="flex items-center gap-6">
        <div class="relative group">
          <button class="font-semibold text-gray-500 transition-colors hover:text-white">
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
          <button class="font-semibold text-gray-500 transition-colors hover:text-white">
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
          <button class="text-gray-500 font-semibold transition-colors hover:text-white">
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
          <button class="text-gray-500 font-semibold transition-colors hover:text-white">
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
          <button class="text-gray-500 font-semibold transition-colors hover:text-white">
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
          class="px-10 py-3 text-l text-white font-semibold bg-gray-800 rounded-lg hover:bg-gray-700"
          href="#!"
          >Sign In</a
        >
        <a
          class="px-10 py-3 text-l font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500"
          href="#!"
          >Purchase</a
        >
      </div>
    </nav>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>