<script setup lang="ts">
const props = defineProps<{
  value: string;
}>()
</script>

<template>
<div class="border-solid border-slate-4 bg-slate-1 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
  {{props.value}}
</div>
</template>

<style scoped>

</style>