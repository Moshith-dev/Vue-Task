<script setup lang="ts">
type IButton = {
  text: string;
  buttonStyle: string;
  action : () => void;
};

const props = defineProps<IButton>();
</script>

<template>
  <!-- Display the text inside the button -->
  <button :class="props.buttonStyle" @click="action">
    {{ props.text }}
  </button>
</template>
