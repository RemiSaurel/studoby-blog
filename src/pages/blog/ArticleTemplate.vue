<script setup lang="ts">
import ToC from "@/components/blog/ToC.vue";
import Title from "@/components/blog/Title.vue";
import Paragraph from "@/components/blog/Paragraph.vue";
import Block from "@/components/blog/Block.vue";
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
    <Block title="Titre" type="info">
      Contenu
    </Block>
  </div>
</template>

<style scoped>

</style>