<template>
  <div
    class="p-2 pr-3 rounded-lg bg-blue-100/50 inline-flex items-center gap-2"
  >
    <Icon size="40px" class="text-blue-500" name="uil:file-blank" />
    <div class="flex flex-col">
      <UiCaption size="sm" class="text-blue-500 font-semibold">
        {{ name }}
      </UiCaption>
      <UiCaption class="text-gray-700" size="sm"> 19:31 PM • 43 MB </UiCaption>
    </div>
    <Icon size="24px" class="text-blue-500" name="uil:cloud-download" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ name?: String }>();
</script>
