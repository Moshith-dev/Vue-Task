<script setup lang="ts">
import { ref, computed } from "vue";
import Button from "./Button.vue";


const custombutton = ref({
  text: ['Sign In', 'Purchase'],
  buttonStyle: ['px-11 py-3 font-semibold text-white bg-[#2f314b] rounded-lg lg:px-10 text-[18px] hover:bg-gray-500','px-11 py-3 font-semibold text-white bg-indigo-600 rounded-lg lg:px-10 text-[18px] hover:bg-indigo-500']
});

const HandleClick = () => {
  console.log('Button clicked');
};

type Tmenu = {
  menu: string;
  items: string[];
  parentId: number;
};

const props = defineProps<{
  MenuItem: Tmenu[];
}>();

// Define menus based on parentId for each menu in MenuItem
const menus = computed(() => {
  return [
    { title: props.MenuItem[0]?.menu, parentId: 1 }, 
    { title: props.MenuItem[1]?.menu, parentId: 2 }, 
    { title: props.MenuItem[2]?.menu, parentId: 3 }, 
    { title: props.MenuItem[3]?.menu, parentId: 4 }, 
    { title: props.MenuItem[4]?.menu, parentId: 5 },
  ];
});

// Fetch menu items based on parentId
const getMenuItems = (parentId: number) => {
  return props.MenuItem.filter(item => item.parentId === parentId).map(item => item.menu);
};

const isMenuOpen = ref(false);

const activeSubmenu = ref<number | null>(null);

const toggleSubmenu = (index: number) => {
  activeSubmenu.value = activeSubmenu.value === index ? null : index;
};
</script>

<template>
  <nav class="flex items-center justify-center gap-12 px-4 md:px-5 py-5 bg-gray-950 z-[99999] fixed w-full">
    <a class="flex-shrink-0 ml-10 pl-5 mr-5">
      <img src="/assets/logo.png" alt="logo" width="125" />
    </a>

    <button @click="isMenuOpen = !isMenuOpen" class="text-gray-500 md:hidden hover:text-white">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16" />
        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <div class="items-center hidden gap-3 md:flex ml-28">
      <div v-for="(menu, index) in menus" :key="index" class="relative group">
        <button class="text-[20px] font-medium flex text-gray-300 transition-colors hover:text-white">
          <span v-if="props.MenuItem.length > 0">{{ menu.title }}</span>
          <span v-else class="block w-[100px] h-8 bg-gray-300 rounded animate-pulse"></span>

          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#9ca3af">
            <path d="M480-360 280-560h400L480-360Z" />
          </svg>
        </button>
        <div class="absolute left-0 hidden pt-4 group-hover:block">
          <div :class="[ 'bg-[#ffffff] rounded-lg shadow-lg py-2', menu.title === 'Components' ? 'grid grid-cols-4 gap-1 p-1 w-[600px]' : 'w-48' ]">
            <a v-for="(item, i) in getMenuItems(menu.parentId)" :key="i" href="#" :class="[
              'text-gray-500 hover:text-gray-700 hover:bg-gray-200 text-[19px]',
              menu.title === 'Components' ? 'px-2 py-2 ' : 'block px-4 py-1 ' ]">
              <span v-if="getMenuItems.length > 0">{{ item }}</span>
              <span v-else class="block w-28 h-7 bg-gray-300 rounded animate-pulse"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isMenuOpen" class="absolute top-full left-0 right-0 bg-[#0f0f1a] md:hidden">
      <div class="px-4 py-2">
        <div v-for="(menu, index) in menus" :key="index" class="relative">
          <button @click="toggleSubmenu(index)"
            class="flex items-center justify-between w-full py-3 font-semibold text-left text-gray-500 transition-colors hover:text-white">
            <span v-if="props.MenuItem.length > 0">{{ menu.title }}</span>
            <span v-else class="block w-[100px] h-8 bg-gray-300 rounded animate-pulse"></span>

            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                :d="activeSubmenu === index ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'" />
            </svg>
          </button>
          <div v-if="activeSubmenu === index" class="py-2 pl-4">
            <a v-for="(item, i) in getMenuItems(menu.parentId)" :key="i" href="#"
              class="block py-2 text-gray-400 hover:text-white">{{ item }}</a>
          </div>
        </div>
      </div>
    </div>

    <div class="items-center hidden gap-4 md:flex mr-10 ml-5">
      <Button :buttonStyle="custombutton.buttonStyle[0]" :text="custombutton.text[0]" :action="HandleClick"/>
      <Button :buttonStyle="custombutton.buttonStyle[1]" :text="custombutton.text[1]" :action="HandleClick"/>
    </div>
  </nav>
</template>
