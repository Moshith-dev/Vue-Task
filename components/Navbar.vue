<script setup lang="ts">
import { GetMenuApi } from "@/services/home";
import { ref, computed, onMounted } from "vue";

// Type definition for the menu item
type Tmenu = {
  menu: string;
  items: string[];
  parentId: number;
};

const MenuItem = ref<Tmenu[]>([]);

// Fetch menu items from API
async function GetMenu() {
  try {
    const response = await GetMenuApi();
    if (response.status === 200) {
      console.log(response.data);
      MenuItem.value = response.data;
    }
  } catch (error) {
    console.log(error);
  }
}

// Call GetMenu API when the component is mounted
onMounted(() => {
  GetMenu();
});

// Use the API data to dynamically create the menus with fixed index ranges
const menus = computed(() => {
  return [
    { title: MenuItem.value[0]?.menu ?? "Menu 0", indexRange: [5, 8] }, // First menu (0-4 index range)
    { title: MenuItem.value[1]?.menu ?? "Menu 1", indexRange: [9, 36] }, // Second menu (9-36 index range)
    { title: MenuItem.value[2]?.menu ?? "Menu 2", indexRange: [37, 52] }, // Third menu (37-52 index range)
    { title: MenuItem.value[3]?.menu ?? "Menu 3", indexRange: [53, 57] }, // Fourth menu (53-57 index range)
    { title: MenuItem.value[4]?.menu ?? "Menu 4", indexRange: [58, 63] }, // Fifth menu (58-63 index range)
  ];
});

// Function to retrieve menu items based on the index range for each menu title
const getMenuItems = (index: number) => {
  const range = menus.value[index]?.indexRange;
  if (range) {
    const [start, end] = range;
    return MenuItem.value.slice(start, end + 1).map((item) => item.menu); // Slice based on the range
  }
  return [];
};

// State for controlling whether the menu is open or not
const isMenuOpen = ref(false);

// State for managing which submenu is active
const activeSubmenu = ref<number | null>(null);

// Toggle submenu visibility based on the clicked index
const toggleSubmenu = (index: number) => {
  activeSubmenu.value = activeSubmenu.value === index ? null : index;
};
</script>

<template>
  <nav class="flex items-center justify-center gap-12 px-4 md:px-5 py-5 bg-gray-950 z-[99999] fixed w-full">
    <a class="flex-shrink-0 ml-10 pl-5 mr-5">
      <img src="/assets/logo.png" alt="logo" width="125" />
    </a>

    <!-- Mobile menu button -->
    <button @click="isMenuOpen = !isMenuOpen" class="text-gray-500 md:hidden hover:text-white">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16" />
        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Desktop Navigation -->
    <div class="items-center hidden gap-2 md:flex ml-28">
      <!-- Loop through the menu titles dynamically from API -->
      <div v-for="(menu, index) in menus" :key="index" class="relative group">
        <button class="text-[20px] font-medium flex text-gray-300 transition-colors hover:text-white">

          <span v-if="MenuItem.length > 0">{{ menu.title }}</span>
          <span v-else class="block w-[100px] h-8 bg-gray-300 rounded animate-pulse"></span>

          <!-- Use the dynamic title here -->
          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#9ca3af">
            <path d="M480-360 280-560h400L480-360Z" />
          </svg>
        </button>

        <!-- Dropdown menu items -->
        <div class="absolute left-0 hidden pt-4 group-hover:block">
          <div :class="[
            'bg-[#ffffff] rounded-lg shadow-lg py-2',
            menu.title === 'Components'
              ? 'grid grid-cols-4 gap-1 p-1 w-[600px]'
              : 'w-48',
          ]">
            <!-- Loop through items based on the index for the menu -->
            <a v-for="(item, i) in getMenuItems(index)" :key="i" href="#" :class="[
              'text-gray-500 hover:text-gray-700 hover:bg-gray-200 text-[19px]',
              menu.title === 'Components' ? 'px-2 py-2' : 'block px-4 py-1  ',
            ]">
              <span v-if="getMenuItems.length > 0">{{ item }}</span>
              <span v-else class="block w-28 h-7 bg-gray-300 rounded animate-pulse"></span>


            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="isMenuOpen" class="absolute top-full left-0 right-0 bg-[#0f0f1a] md:hidden">
      <div class="px-4 py-2">
        <div v-for="(menu, index) in menus" :key="index" class="relative">
          <button @click="toggleSubmenu(index)"
            class="flex items-center justify-between w-full py-3 font-semibold text-left text-gray-500 transition-colors hover:text-white">

            <span v-if="MenuItem.length > 0">{{ menu.title }}</span>
            <span v-else class="block w-[100px] h-8 bg-gray-300 rounded animate-pulse"></span>

            <!-- Use the dynamic title here -->
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                :d="activeSubmenu === index ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'" />
            </svg>
          </button>
          <div v-if="activeSubmenu === index" class="py-2 pl-4">
            <a v-for="(item, i) in getMenuItems(index)" :key="i" href="#"
              class="block py-2 text-gray-400 hover:text-white">{{ item }}</a>
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
