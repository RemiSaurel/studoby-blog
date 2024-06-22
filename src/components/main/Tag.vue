<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();
</script>

<template>
  <span class="w-fit rounded-2xl px-2 py-0 text-sm text-white bg-slate-9">{{
    props.text
  }}</span>
</template>

<style scoped></style>
