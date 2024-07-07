<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import {CellType} from "@/components/shortest-path/models.ts";

const props = defineProps<{ type: CellType, onMouseDown: () => void, onMouseEnter: () => void }>();

const cell = ref<CellType>(props.type);

watchEffect(() => {
  cell.value = props.type;
});

const COLORS = {
  wall: 'bg-slate-7',
  start: 'bg-green-7',
  end: 'bg-red-4',
  visited: 'bg-blue-4',
  path: 'bg-yellow-4',
};
</script>

<template>
  <button class="w-8 h-8 border border-slate-600 border-solid"
          @mousedown="props.onMouseDown"
          @mouseenter="props.onMouseEnter"
          :class="{
    [COLORS.wall]: cell.isWall,
    [COLORS.start]: cell.isStart,
    [COLORS.end]: cell.isEnd,
    [COLORS.visited]: cell.isVisited,
    [COLORS.path]: cell.isPath,
  }">
  </button>
</template>

