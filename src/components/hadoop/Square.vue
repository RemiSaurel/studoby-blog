<script setup lang="ts">
const props = defineProps<{
  color: string;
  text: string;
}>();
</script>

<template>
  <div class="w-fit p-2 rounded-lg py-6" :class="[props.color]">
    {{ props.text }}
  </div>
</template>

<style scoped></style>
