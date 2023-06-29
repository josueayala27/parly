<template>
  <div :class="[`p-avatar--${size}`]" class="p-avatar">
    <img v-if="src" class="p-avatar__image" v-bind="{ src, alt }" />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{ src?: string; alt?: string; size?: "sm" | "base" }>(),
  { src: "", alt: "", size: "base" }
);
</script>

<style lang="scss" scoped>
.p-avatar {
  @apply aspect-square rounded-full overflow-hidden bg-gray-200;
  &__image {
    @apply w-full h-full object-cover;
  }

  &--base {
    @apply h-12;
  }

  &--sm {
    @apply h-8;
  }
}
</style>
