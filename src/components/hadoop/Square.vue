<script setup lang="ts">
const props = defineProps<{
  color: string;
  text: string;
}>();
</script>

<template>
  <div
    class="w-16 h-16 rounded-lg p-2 flex items-center justify-center text-center"
    :class="[props.color]"
  >
    {{ props.text }}
  </div>
</template>

<style scoped></style>
