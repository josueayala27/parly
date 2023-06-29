<template>
  <p class="p-caption" :class="[`p-caption--${size}`]">
    <slot />
  </p>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{ size?: "sm" | "base" }>(), {
  size: "base",
});
</script>

<style lang="scss" scoped>
.p-caption {
  &--base {
    @apply text-base;
  }

  &--sm {
    @apply text-sm;
  }
}
</style>
