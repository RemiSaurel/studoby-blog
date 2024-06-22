<script setup lang="ts">
import { Article } from "@/articles.ts";
import { useRouter } from "vue-router";
import Tag from "@/components/main/Tag.vue";
const router = useRouter();
const props = defineProps<{
  article: Article;
}>();
</script>

<template>
  <div
    class="relative flex flex-col items-start gap-4 border-1 bg-slate-1 pl-4 pr-8 py-4 rounded-lg w-96 hover:cursor-pointer hover:bg-slate-1.5 shadow hover:shadow-lg transition duration-400 group"
    @click="router.push(article.slug)"
  >
    <div class="flex gap-4 text-gray">
      <span>{{ props.article.date }}</span>
      <span>{{ props.article.time }}</span>
    </div>

    <div
      class="absolute top-4 right-4 group-hover:rotate-45 group-hover:scale-110 transition duration-500"
    >
      <img src="@/assets/arrow.svg" alt="arrow" class="w-6 h-6" />
    </div>

    <span class="text-xl font-800">{{ props.article.title }}</span>
    <div class="flex gap-2 -mt-2" v-if="props.article.tags">
      <Tag :text="tag" v-for="tag in props.article.tags"> </Tag>
    </div>
    <span class="text-gray">{{ props.article.description }}</span>
  </div>
</template>

<style scoped></style>
