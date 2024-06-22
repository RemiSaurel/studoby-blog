<script setup lang="ts">
const props = defineProps<{
  color: string;
}>();
</script>

<template>
  <div class="h-2 w-0 rounded-lg" :class="[props.color]"></div>
</template>

<style scoped></style>
