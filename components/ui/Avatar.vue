<template>
  <div class="p-avatar">
    <img v-if="src" class="p-avatar__image" v-bind="{ src, alt }" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ src?: string; alt?: string }>();
</script>

<style lang="scss" scoped>
.p-avatar {
  @apply h-12 aspect-square rounded-full overflow-hidden bg-gray-200;
  &__image {
    @apply w-full h-full object-cover;
  }
}
</style>
