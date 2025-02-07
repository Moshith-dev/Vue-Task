<script setup lang="ts">

type TSection = {
  title?: string;
  description?: string;
  image: string;
};

defineProps<TSection>();

</script>

<template>
    <div class="flex items-start gap-3 p-1 md:items-center">
      <img :src="image" class="w-10 md:w-[70px]">
      <div>
        <h3 class="text-xl font-bold text-gary-700 md:text-2xl">
          <span v-if="!title" class="block w-72 h-10 bg-gray-300 rounded animate-pulse"></span>
          <span v-else>{{ title }}</span>
        </h3>
        <p class="text-base text-gray-500 md:text-xl mr-10">
          <span v-if=description>{{description }}</span>
          <span v-else class="block w-64 h-7 bg-gray-300 rounded animate-pulse"></span>
        </p>
      </div>
    </div>
</template>