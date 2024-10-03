<script setup lang="ts">
import { articles } from "@/articles.ts";
import ArticleLine from "@/components/main/ArticleLine.vue";

const sortedArticles = articles.sort((a, b) => {
  const aDate = a.date.split("-").reverse().join("-");
  const bDate = b.date.split("-").reverse().join("-");
  return aDate > bDate ? -1 : 1;
});
</script>

<template>
  <div
    class="flex flex-col-reverse items-center gap-1 mt-8 md:flex-row md:items-start"
  >
    <div class="flex w-full flex-col items-center gap-4">
      <ArticleLine
        :key="article.title"
        :article="article"
        v-for="(article, i) in sortedArticles"
        :new="i === 0"
      ></ArticleLine>
    </div>
    <div class="flex gap-2">
      <a href="https://github.com/RemiSaurel" target="_blank">
        <img
          src="@/assets/github.svg"
          alt="programming"
          class="w-10 h-10 hover:brightness-50 duration-400 transition"
        />
      </a>
    </div>
  </div>
</template>

<style scoped></style>
