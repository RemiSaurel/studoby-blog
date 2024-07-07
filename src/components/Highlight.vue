<script setup lang="ts">
const props = defineProps<{
  color: 'red' | 'green' | 'orange' | 'blue' | 'purple' | 'yellow'
}>()
const colors = {
  orange: 'bg-orange-1 ',
  red: 'bg-red-1 ',
  green: 'bg-green-1',
  blue: 'bg-cyan-1',
  purple: 'bg-purple-1',
  yellow: 'bg-yellow-1',
}
</script>

<template>
  <div class="inline-flex w-fit px-1 rounded" :class="colors[props.color]">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>