<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();
</script>

<template>
  <div
    class="w-fit rounded-xl px-3 py-0 text-sm border-solid bg-white border-gray-2 flex items-center gap-2"
  >
    <div class="size-2 bg-gray-4 rounded-full"></div>
    <span class="">{{ props.text }}</span>
  </div>
</template>

<style scoped></style>
