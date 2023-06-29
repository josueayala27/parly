<template>
  <div
    class="flex justify-between items-center p-3 hover:bg-gray-100 cursor-pointer rounded-lg"
  >
    <div class="flex gap-4">
      <icon size="20px" :name="icon" />
      <UiCaption size="sm">
        {{ title }}
      </UiCaption>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; icon: String }>();
</script>
