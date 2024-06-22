<script setup lang="ts">
import { Article } from "@/articles.ts";
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps<{
  article: Article;
}>();
</script>

<template>
  <div class="flex flex-col gap-2">
    <h2>{{ props.article.title }}</h2>
    <span v-if="props.article.tags" v-for="tag in props.article.tags">
      {{ tag }}
    </span>
    <button @click="router.push(article.slug)">{{ article.title }}</button>
  </div>
</template>

<style scoped></style>
