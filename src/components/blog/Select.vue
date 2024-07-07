<script setup lang="ts">
type SelectType = {
  value: string;
  text: string;
};

defineProps({
  label: String,
  options: Array as () => SelectType[]
});
</script>

<template>
  <div class="flex flex-col gap-1">
    <label>{{ label }}</label>
    <select class="px-3 py-2 bg-slate-8 text-white rounded border-none hover:bg-slate-9 hover:cursor-pointer">
      <option class="w-12" v-for="option in options" :value="option.value">{{ option.text }}</option>
    </select>
  </div>

</template>

<style scoped>

</style>