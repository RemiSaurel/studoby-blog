<script setup lang="ts">
import { ref, onMounted } from "vue";
import { codeToHtml } from "shiki";

const props = defineProps<{
  code: string;
  language: string;
}>();

const content = ref<string>("");

const loadHtml = () =>
  codeToHtml(props.code, {
    lang: "typescript",
    theme: "catppuccin-latte",
  }).then((html) => {
    content.value = html;
  });

const copyToClipboard = () => {
  navigator.clipboard.writeText(props.code);
};

onMounted(() => {
  loadHtml();
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
