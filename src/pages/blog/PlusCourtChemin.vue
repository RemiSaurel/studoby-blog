<script setup lang="ts">
import ToC from "@/components/blog/ToC.vue";
import Title from "@/components/blog/Title.vue";
import Paragraph from "@/components/blog/Paragraph.vue";
import Maze from "@/components/shortest-path/Maze.vue";
</script>

<template>
  <div>
    <ToC></ToC>
    <Title>Plus court chemin</Title>
    <Paragraph>
      <template #title>
        C'est quoi ?
      </template>
      <template #subtitle>
        Algos
      </template>
      <template #content>
        <Maze />
      </template>
    </Paragraph>
  </div>
</template>

<style scoped>

</style>