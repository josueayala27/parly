<template>
  <section
    class="flex flex-col gap-4 border-t first:border-t-0 last:border-b-0 py-6"
  >
    <header v-if="title" class="flex items-center justify-between px-6">
      <p class="text-lg font-bold">{{ title }}</p>
      <slot name="action">
        <p class="text-blue-500 font-medium cursor-pointer">See all</p>
      </slot>
    </header>
    <main
      v-if="$slots.default"
      :class="[list ? 'px-3' : 'px-6']"
      class="flex flex-col gap-[14px]"
    >
      <slot />
    </main>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ title?: any; list?: boolean }>(), {
  list: false,
  title: "",
});
</script>
