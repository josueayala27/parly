<template>
  <div class="conversation">
    <div class="conversation__body">Chat Content...</div>
    <aside class="conversation__info">Chat Information...</aside>
  </div>
</template>

<style lang="scss" scoped>
.conversation {
  @apply flex gap-3 h-full;

  &__body {
    @apply flex-1 bg-white;
  }

  &__info {
    @apply w-60 bg-white;
  }
}
</style>
