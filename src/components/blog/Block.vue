<script setup lang="ts">
const props = defineProps<{
  type: 'info' | 'warning' | 'danger' | 'success'
  title: string
}>()

const colors = {
  info: 'bg-slate-1 border-slate-2 border-2 border-solid',
  warning: 'bg-orange-1 border-orange-2 border-2 border-solid',
  danger: 'bg-red-1 border-red-2 border-2 border-solid',
  success: 'bg-green-1 border-green-2 border-2 border-solid',
}

const emojis = {
  info: 'ℹ️',
  warning: '⚠️',
  danger: '❌',
  success: '✅',
}
</script>

<template>
  <div class="h-fit my-4 rounded-lg px-4 py-3" :class="colors[props.type]">
    <span class="text-md font-bold mb-1"> {{emojis[props.type]}} {{ props.title }}</span>
    <br>
    <slot></slot>
  </div>
</template>

<style scoped>

</style>