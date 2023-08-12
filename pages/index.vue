<template>
  <div>Home!</div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth", "socket"],
});
</script>
