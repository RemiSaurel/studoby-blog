<script setup lang="ts">
const props = defineProps<{
  color: string;
}>();
</script>

<template>
  <div class="h-6 w-6 rounded-full" :class="[props.color]"></div>
</template>

<style scoped></style>
