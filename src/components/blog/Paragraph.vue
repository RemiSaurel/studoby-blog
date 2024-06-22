<script setup lang="ts"></script>

<template>
  <div class="my-2">
    <div class="text-xl font-bold mt-6 mb-4">
      <slot name="title" />
    </div>

    <div class="text-lg font-semibold mt-3 mb-1">
      <slot name="subtitle" />
    </div>

    <div class="text-justify">
      <slot name="content" />
    </div>
  </div>
</template>

<style scoped></style>
