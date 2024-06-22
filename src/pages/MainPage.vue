<script setup lang="ts">
import {articles} from "@/articles.ts";
import {useRouter} from "vue-router";

const router = useRouter();
console.log(articles)
</script>

<template>
  <div v-for="article in articles">
    <button @click="router.push(article.slug)">{{article.title}}</button>
  </div>
</template>

<style scoped>

</style>