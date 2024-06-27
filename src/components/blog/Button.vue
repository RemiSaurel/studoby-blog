<script setup lang="ts">
defineProps({
  text: String
});
</script>

<template>
<button class="px-3 py-2 bg-slate-8 text-white rounded border-none hover:bg-slate-9 hover:cursor-pointer">
  {{ text }}
</button>
</template>

<style scoped>

</style>