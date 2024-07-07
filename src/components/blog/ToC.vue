<script setup lang="ts">
// Reactive reference to hold the Table of Contents items
import {onMounted, ref} from "vue";

const tocItems = ref<{ title: string; subtitle?: string }[]>([]);

onMounted(() => {
  // Populate the ToC items
  const titles = document.querySelectorAll(".title");
  const subtitles = document.querySelectorAll(".subtitle");

  titles.forEach((title, index) => {
    const subtitle = subtitles[index]
        ? subtitles[index].textContent : ''
    // Add the title and subtitle only if one of them is not empty
    if (title.textContent !== "" || subtitle !== "") {
      tocItems.value.push({
        title: title.textContent!,
        subtitle: subtitle
      });
    }
  });
});
</script>

<template>
  <aside class="hidden xl:block fixed top-8 left-8 max-w-[200px]  ">
    <div class="flex flex-col gap-2">
      <div v-for="(item, index) in tocItems" :key="index">
        <div v-if="item.title !== ''" class="font-semibold mb-1 mt-2 truncate text-ellipsis">
          {{ item.title }}
        </div>
        <div v-if="item.subtitle !== ''" class="text-sm ml-4 truncate text-ellipsis">
          {{ item.subtitle }}
        </div>
      </div>
    </div>
  </aside>
</template>
<style scoped>

</style>