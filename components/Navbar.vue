<template>
  <nav class="flex items-center justify-center gap-12  px-4 md:px-5 py-5 bg-gray-950 z-[99999] fixed  w-full">
    <a class="flex-shrink-0  ml-10 pl-5 mr-5">
      <img src="/assets/logo.png" alt="logo" width="125" />
    </a>

    <!-- Mobile menu button -->
    <button @click="isMenuOpen = !isMenuOpen" class="text-gray-500 md:hidden hover:text-white">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Desktop Navigation -->
    <div class="items-center hidden gap-3 md:flex ml-28 ">
      <!-- Existing dropdown menus remain unchanged -->
      <div v-for="(menu, index) in menus" :key="index" class="relative group">
        <button class="text-[22px] font-light flex text-gray-400 transition-colors hover:text-white ">
          {{ menu.title }} <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#9ca3af"><path d="M480-360 280-560h400L480-360Z"/></svg> </button>
        <div class="absolute left-0 hidden pt-4 group-hover:block">
          <div :class="[
            'bg-[#ffffff] rounded-lg shadow-lg py-2',
            menu.title === 'Components' ? 'grid grid-cols-3 gap-1 p-1 w-[300px]' : 'w-48'
          ]">
            <a v-for="(item, i) in menu.items" :key="i"
              href="#"
              :class="[
                'text-gray-700 hover:text-white hover:bg-[#2f2f3f] rounded text-l',
                menu.title === 'Components' ? 'px-1 py-1' : 'block px-4 py-2'
              ]"
            >{{ item }}</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="isMenuOpen" class="absolute top-full left-0 right-0 bg-[#0f0f1a] md:hidden">
      <div class="px-4 py-2">
        <div v-for="(menu, index) in menus" :key="index" class="relative">
          <button 
            @click="toggleSubmenu(index)"
            class="flex items-center justify-between w-full py-3 font-semibold text-left text-gray-500 transition-colors hover:text-white"
          >
            {{ menu.title }}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                :d="activeSubmenu === index ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'" />
            </svg>
          </button>
          <div v-if="activeSubmenu === index" class="py-2 pl-4">
            <a v-for="(item, i) in menu.items" :key="i"
              href="#"
              class="block py-2 text-gray-400 hover:text-white"
            >{{ item }}</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="items-center hidden gap-4 md:flex mr-10 ml-5">
      <a class="px-11 py-3 font-semibold text-white bg-[#2f314b] rounded-lg lg:px-10 text-[18px] hover:bg-gray-500"
        href="#!">Sign In</a>
      <a class="px-11 py-3 font-semibold text-white bg-indigo-600 rounded-lg lg:px-10 text-[18px] hover:bg-indigo-500"
        href="#!">Purchase</a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
const activeSubmenu = ref(-1)

const toggleSubmenu = (index: number) => {
  activeSubmenu.value = activeSubmenu.value === index ? -1 : index
}

const menus = [
  {
    title: 'Pages ',
    items: ['Dashboard', 'Settings', 'Profile']
  },
  {
    title: 'Components',
    items: ['Buttons', 'Cards', 'Forms', 'Tables', 'Modals', 'Tabs', 'Alerts', 'Badges', 'Tooltips']
  },
  {
    title: 'Utilities',
    items: ['Colors', 'Typography', 'Spacing']
  },
  {
    title: 'Plugins',
    items: ['Authentication', 'Analytics', 'Storage']
  },
  {
    title: 'Documentation',
    items: ['Getting Started', 'API Reference', 'Examples']
  }
]
</script>