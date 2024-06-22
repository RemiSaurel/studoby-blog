<script setup lang="ts">
import { onMounted, ref } from "vue";
import { md } from "@/main.ts";

const props = defineProps<{
  file: string;
  parent: string;
}>();

const content = ref<string>("");

onMounted(async () => {
  const el = await fetch(`./src/pages/blog/${props.parent}/${props.file}.md`);
  content.value = md.render(await el.text());
});
</script>

<template>
  <div class="relative mt-8">
    <div class="absolute -top-5 left-1 text-sm italic">
      {{ props.file }}
    </div>
    <div v-html="content" class="text-md" />
  </div>
</template>

<style scoped></style>
