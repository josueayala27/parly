<template>
  <button
    type="button"
    role="switch"
    :class="[isActive ? 'bg-blue-500' : 'bg-gray-200']"
    class="h-[24px] w-[40px] rounded-full relative inline-flex duration-300 p-[3px]"
    @click="toggle"
  >
    <span
      :class="{ 'translate-x-4 border-blue-500': isActive }"
      class="h-full aspect-square flex-shrink-0 bg-white rounded-full duration-300 shadow-md"
    />
  </button>
</template>

<script setup lang="ts">
const isActive = ref<boolean>(false);

const toggle = () => {
  isActive.value = !isActive.value;
};
</script>
