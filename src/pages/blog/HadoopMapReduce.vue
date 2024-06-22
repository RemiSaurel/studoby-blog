<script setup lang="ts">
import Square from "@/components/hadoop/Square.vue";
import anime from "animejs/lib/anime.es.js";
import { onMounted } from "vue";
import Line from "@/components/hadoop/Line.vue";
import Title from "@/components/blog/Title.vue";
import Code from "@/components/blog/Code.vue";

const startAnimation = () => {
  // Create a timeline
  const timeline = anime.timeline({
    loop: true, // Enable looping
    easing: "easeInOutSine", // Default easing for all animations
  });

  timeline
    .add({
      targets: ".lines > *",
      width: "10rem",
      duration: 2000,
    })
    .add({
      targets: ".start-reducer > *",
      width: "10rem",
      duration: 2000,
    })
    .add({
      duration: 1000,
    });
};

onMounted(() => {
  startAnimation();
});

const initCode =
  "const map = (key, value) => {\n" +
  "  // key: document name\n" +
  "  // value: document contents\n" +
  "  for (const word of value.split(' ')) {\n" +
  "    emit(word, 1);\n" +
  "  }\n" +
  "};\n" +
  "\n" +
  "const reduce = (key, values) => {\n" +
  "  // key: word\n" +
  "  // values: list of counts\n" +
  "  emit(key, values.length);\n" +
  "};\n";

const pythonCode =
  "def map(key, value):\n" +
  "  # key: document name\n" +
  "  # value: document contents\n" +
  "  for word in value.split(' '):\n" +
  "    emit(word, 1)\n" +
  "\n" +
  "def reduce(key, values):\n" +
  "  # key: word\n" +
  "  # values: list of counts\n" +
  "  emit(key, len(values))\n";
</script>

<template>
  <div>
    <Title>Hadoop MapReduce</Title>
    <Code :code="initCode" language="javascript" />
    <div class="flex gap-4 items-center">
      <div class="flex flex-col gap-2">
        <Square color="bg-red-2" text="Mapper 1" />
        <Square color="bg-blue-2" text="Mapper 2" />
        <Square color="bg-green-2" text="Mapper 3" />
      </div>
      <div class="flex flex-col gap-12 lines w-40">
        <Line class="top-14 rotate-20" color="bg-red-2" />
        <Line class="top-26" color="bg-blue-2" />
        <Line class="top-40 -rotate-20" color="bg-green-2" />
      </div>
      <div class="flex flex-col gap-2">
        <Square color="bg-amber-1" text="Shuffle & Sort" />
      </div>
      <div class="start-reducer w-40">
        <Line color="bg-amber-1" />
      </div>
      <div class="flex flex-col gap-2">
        <Square color="bg-neutral-2" text="Reducer" />
      </div>
    </div>
    <Code :code="pythonCode" language="python" />
  </div>
</template>

<style scoped></style>
