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
    class="relative flex w-4/5 flex-col flex-wrap items-start gap-3 rounded-lg border-solid py-4 pr-8 pl-4 shadow transition bg-slate-1 border-1.5 border-slate-1 duration-400 group hover:border-slate-4 hover:cursor-pointer"
    @click="router.push(article.slug)"
  >
    <div class="flex gap-4 text-gray text-sm">
      <div class="flex items-center gap-1">
        <img src="@/assets/calendar.svg" alt="calendar" class="h-4 w-4" />
        <span>{{ props.article.date }}</span>
      </div>
      <div class="flex items-center gap-1">
        <img src="@/assets/clock.svg" alt="clock" class="h-4 w-4" />
        <span>{{ props.article.time }}</span>
      </div>
    </div>

    <div
      class="absolute top-4 right-4 transition duration-500 group-hover:rotate-45 group-hover:scale-110"
    >
      <img src="@/assets/arrow.svg" alt="arrow" class="h-6 w-6" />
    </div>

    <span class="text-xl font-800">{{ props.article.title }}</span>
    <div class="-mt-2 flex flex-wrap gap-2" v-if="props.article.tags">
      <Tag :text="tag" v-for="tag in props.article.tags"> </Tag>
    </div>
    <span class="w-full truncate text-ellipsis text-gray mt-2">{{
      props.article.description
    }}</span>
  </div>
</template>

<style scoped></style>
