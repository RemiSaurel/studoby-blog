<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();
</script>

<template>
  <span class="py-0 px-2 w-fit rounded-2xl bg-slate-9 text-white text-sm">{{
    props.text
  }}</span>
</template>

<style scoped></style>
