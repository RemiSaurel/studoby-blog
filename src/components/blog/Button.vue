<script setup lang="ts">
import {PropType} from "vue";

type ButtonType = 'primary' | 'warning' | 'danger' | 'success';
type ButtonSize = 'sm' | 'md' | 'lg';
const props = defineProps({
  text: String,
  type: {
    type: String as PropType<ButtonType>,
    default: 'primary'
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'md'
  }
})
</script>

<template>
<button class="px-3 py-2  text-white rounded border-none hover:cursor-pointer transition"
        :class="{
          'bg-slate-8 hover:bg-slate-9': props.type === 'primary',
          'bg-orange-4 hover:bg-orange-5': props.type === 'warning',
          'bg-red-5 hover:bg-red-6': props.type === 'danger',
          'bg-green-6 hover:bg-green-7': props.type === 'success',
          'text-sm': props.size === 'sm',
          'text-lg': props.size === 'lg',
        }">

  {{ text }}
</button>
</template>

<style scoped>

</style>