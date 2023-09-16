<template>
  <input
    v-bind="{ ...$attrs, value: modelValue }"
    class="flex-1 py-2 px-4 border rounded-lg outline-none"
    type="text"
    @input="
      emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>

<script setup lang="ts">
defineProps<{ modelValue: string }>();

const emit = defineEmits(["update:modelValue"]);
</script>
