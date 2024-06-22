<script setup lang="ts">
import { articles } from "@/articles.ts";
import ArticleLine from "@/components/main/ArticleLine.vue";
</script>

<template>
  <div class="flex flex-col gap-4 mt-4">
    <div class="text-4xl mb-4">Studoby Blog</div>

    <ArticleLine :article="article" v-for="article in articles"> </ArticleLine>
  </div>
</template>

<style scoped></style>
