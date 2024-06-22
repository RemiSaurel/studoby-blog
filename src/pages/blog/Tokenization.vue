<script setup lang="ts">
import anime from "animejs/lib/anime.es.js";
import { onMounted } from "vue";
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
    <Title>Tokenization</Title>
    <Code :code="pythonCode" language="python" />
  </div>
</template>

<style scoped></style>
