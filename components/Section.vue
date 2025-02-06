<script setup lang="ts">
import { ref, computed } from "vue";

type TSection = {
  title: string;
  description: string;
};

const props = defineProps<TSection>();

</script>