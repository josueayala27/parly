<template>
  <div class="info-item">
    <UiCaption class="info-item__title" size="sm">
      {{ title.toUpperCase() }}
    </UiCaption>
    <UiCaption class="info-item__description" size="sm">
      {{ description }}
    </UiCaption>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; description: string }>();
</script>

<style lang="scss" scoped>
.info-item {
  &__title {
    @apply text-[#757D8A];
  }
}
</style>
