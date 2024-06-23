<script setup lang="ts">
import { ref } from 'vue';
import Cell from './Cell.vue';
import { runDijkstra, runAStar } from './algorithms';

const NB_ROWS = 13;
const NB_COLS = 11;

const RANDOM_WALLS = Array.from({ length: NB_ROWS * NB_COLS }, () => Math.random() < 0.075);

const MAZE_CONFIG = ref(Array.from({ length: NB_ROWS * NB_COLS }, (_, index) => ({
  isWall: RANDOM_WALLS[index] && index !== 0 && index !== NB_ROWS * NB_COLS - 1,
  isStart: index === 27,
  isEnd: index === 115,
  isVisited: false,
  isPath: false,
})));

const selectedAlgorithm = ref('dijkstra');
const speed = ref(30);

const isMouseDown = ref(false);

const runAlgorithm = async () => {
  if (selectedAlgorithm.value === 'dijkstra') {
    await runDijkstra(MAZE_CONFIG.value, NB_ROWS, NB_COLS, speed.value);
  } else if (selectedAlgorithm.value === 'aStar') {
    await runAStar(MAZE_CONFIG.value, NB_ROWS, NB_COLS, speed.value);
  }
};

const resetMaze = () => {
  MAZE_CONFIG.value.forEach(cell => {
    cell.isVisited = false;
    cell.isPath = false;
  });
};

const setStartOrEnd = (index: number) => {
  const currentStart = MAZE_CONFIG.value.findIndex(cell => cell.isStart);
  const currentEnd = MAZE_CONFIG.value.findIndex(cell => cell.isEnd);

  if ((MAZE_CONFIG.value[index].isWall && (currentEnd === -1 || currentStart === -1))  || MAZE_CONFIG.value[index].isVisited || MAZE_CONFIG.value[index].isPath) return;

  if (currentStart === -1 && currentEnd === -1) {
    MAZE_CONFIG.value[index].isStart = true;
  } else if (currentStart !== -1 && currentEnd === -1) {
    if (index === currentStart) {
      MAZE_CONFIG.value[currentStart].isStart = false;
    } else {
      MAZE_CONFIG.value[index].isEnd = true;
    }
  } else if (currentStart === -1 && currentEnd !== -1) {
    if (index === currentEnd) {
      MAZE_CONFIG.value[currentEnd].isEnd = false;
    } else {
      MAZE_CONFIG.value[index].isStart = true;
    }
  } else {
    if (index === currentStart) {
      MAZE_CONFIG.value[currentStart].isStart = false;
    } else if (index === currentEnd) {
      MAZE_CONFIG.value[currentEnd].isEnd = false;
    } else {
      MAZE_CONFIG.value[index].isWall = !MAZE_CONFIG.value[index].isWall;
    }
  }
};

const handleMouseDown = (index: number) => {
  isMouseDown.value = true;
  setStartOrEnd(index);
};

const handleMouseEnter = (index: number) => {
  if (isMouseDown.value) {
    setStartOrEnd(index);
  }
};

const handleMouseUp = () => {
  isMouseDown.value = false;
};

window.addEventListener('mouseup', handleMouseUp);
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div class="controls">
      <select v-model="selectedAlgorithm">
        <option value="dijkstra">Dijkstra</option>
        <option value="aStar">A*</option>
      </select>
      <label>
        Duration
        <input type="range" v-model="speed" min="5" max="100" />
      </label>
      <button @click="runAlgorithm">Run</button>
      <button @click="resetMaze" >Reset</button>
    </div>
    <div class="grid" v-if="MAZE_CONFIG" :style="`grid-template-columns: repeat(${NB_COLS}, 2rem); grid-template-rows: repeat(${NB_ROWS}, 2rem);`">
      <Cell v-for="(cell, i) in MAZE_CONFIG" :key="i" :type="cell" :onMouseDown="() => handleMouseDown(i)" :onMouseEnter="() => handleMouseEnter(i)" />
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
}

.controls {
  margin-bottom: 1rem;
}

label {
  margin-left: 1rem;
}
</style>
