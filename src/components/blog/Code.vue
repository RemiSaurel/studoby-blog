<script setup lang="ts">
import {onMounted, ref} from "vue";
import {md} from "@/main.ts";
const props = defineProps<{
  file: string;
  parent: string;
}>();

const content = ref<string>("");

const copyToClipboard = () => {
  navigator.clipboard.writeText(content.value);
};

onMounted(async () => {
  const el = await fetch(`./src/pages/blog/${props.parent}/${props.file}.md`);
  content.value = md.render(await el.text());
});
</script>

<template>
  <div class="relative">
    <div v-html="content" class="text-md" />
    <button
      class="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded border-0 bg-transparent hover:bg-neutral-2 hover:cursor-pointer"
      @click="copyToClipboard"
    >
      <img src="@/assets/copy.svg" alt="copy" />
    </button>
  </div>
</template>

<style scoped></style>
