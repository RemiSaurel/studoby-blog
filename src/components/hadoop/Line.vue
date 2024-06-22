<script setup lang="ts">
const props = defineProps<{
  color: string;
}>();
</script>

<template>
  <div class="w-0 h-2 rounded-lg" :class="[props.color]"></div>
</template>

<style scoped></style>
