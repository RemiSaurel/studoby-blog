<script setup lang="ts">

import ToC from "@/components/blog/ToC.vue";
import Title from "@/components/blog/Title.vue";
import Paragraph from "@/components/blog/Paragraph.vue";
</script>

<template>
  <div>
    <ToC></ToC>
    <Title>Title</Title>
    <Paragraph>
      <template #title>
        Title
      </template>
      <template #subtitle>
        Subtitle
      </template>
      <template #content>
        Content
      </template>
    </Paragraph>
  </div>
</template>

<style scoped>

</style>