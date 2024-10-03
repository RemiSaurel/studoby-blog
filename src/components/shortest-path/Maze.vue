<script setup lang="ts">
import { ref } from "vue";
import Cell from "./Cell.vue";
import { runDijkstra, runAStar } from "./algorithms";
import Button from "@/components/blog/Button.vue";
import Select from "@/components/blog/Select.vue";

const NB_ROWS = 13;
const NB_COLS = 11;

const RANDOM_WALLS = Array.from(
  { length: NB_ROWS * NB_COLS },
  () => Math.random() < 0.1
);

const START_INDEX = 27;
const END_INDEX = 115;

const MAZE_CONFIG = ref(
  Array.from({ length: NB_ROWS * NB_COLS }, (_, index) => ({
    isWall: RANDOM_WALLS[index] && index !== START_INDEX && index !== END_INDEX,
    isStart: index === START_INDEX,
    isEnd: index === END_INDEX,
    isVisited: false,
    isPath: false,
  }))
);

const selectedAlgorithm = ref("dijkstra");
const speed = ref(30);

const isMouseDown = ref(false);

const runAlgorithm = async () => {
  if (selectedAlgorithm.value === "dijkstra") {
    await runDijkstra(MAZE_CONFIG.value, NB_ROWS, NB_COLS, speed.value);
  } else if (selectedAlgorithm.value === "aStar") {
    await runAStar(MAZE_CONFIG.value, NB_ROWS, NB_COLS, speed.value);
  }
};

const resetMaze = () => {
  MAZE_CONFIG.value.forEach((cell) => {
    cell.isVisited = false;
    cell.isPath = false;
  });
};

const setStartOrEnd = (index: number) => {
  const currentStart = MAZE_CONFIG.value.findIndex((cell) => cell.isStart);
  const currentEnd = MAZE_CONFIG.value.findIndex((cell) => cell.isEnd);

  if (
    (MAZE_CONFIG.value[index].isWall &&
      (currentEnd === -1 || currentStart === -1)) ||
    MAZE_CONFIG.value[index].isVisited ||
    MAZE_CONFIG.value[index].isPath
  )
    return;

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

window.addEventListener("mouseup", handleMouseUp);

const options = [
  { value: "dijkstra", text: "Dijkstra" },
  { value: "aStar", text: "A*" },
];
</script>

<template>
  <div
    class="flex flex-col justify-center bg-slate-1 rounded border-solid border-slate-3 w-fit p-4 m-auto"
  >
    <div
      class="flex flex-col gap-2 items-start justify-center w-full rounded-lg"
    >
      <div class="flex items-center gap-2">
        <Select
          :options="options"
          v-model="selectedAlgorithm"
          label="Choix de l'algo."
        />
      </div>
      <div>
        <label> Durée ({{ speed }}ms) </label>
        <input type="range" v-model="speed" min="5" max="100" />
      </div>
      <div class="flex gap-2 w-full justify-between mb-2">
        <Button
          class="w-full"
          @click="runAlgorithm"
          text="Lancer"
          type="success"
          size="lg"
        ></Button>
        <Button
          class="w-full"
          @click="resetMaze"
          text="Reset"
          type="danger"
          size="lg"
        ></Button>
      </div>
    </div>
    <div
      class="grid"
      v-if="MAZE_CONFIG"
      :style="`grid-template-columns: repeat(${NB_COLS}, 2rem); grid-template-rows: repeat(${NB_ROWS}, 2rem);`"
    >
      <Cell
        v-for="(cell, i) in MAZE_CONFIG"
        :key="i"
        :type="cell"
        :onMouseDown="() => handleMouseDown(i)"
        :onMouseEnter="() => handleMouseEnter(i)"
      />
    </div>
  </div>
</template>

<style scoped></style>
