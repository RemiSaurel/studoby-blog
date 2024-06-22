<script setup lang="ts">
import { articles } from "@/articles.ts";
import ArticleLine from "@/components/ArticleLine.vue";
</script>

<template>
  <ArticleLine :article="article" v-for="article in articles"> </ArticleLine>
</template>

<style scoped></style>
