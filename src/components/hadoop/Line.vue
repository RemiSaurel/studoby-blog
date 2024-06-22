<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  color: string;
  rotate?: number;
}>();

const handleRotate = computed(() => {
  if (!props.rotate) {
    return "";
  } else if (props.rotate > 0) {
    return `rotate-${props.rotate}`;
  } else {
    return `-rotate-${props.rotate.toString().slice(1)}`;
  }
});
</script>

<template>
  <div class="w-0 h-2 rounded-lg" :class="[props.color, handleRotate]"></div>
</template>

<style scoped></style>
