<template>
  <div class="conversation">
    <div class="conversation__body">
      <ChatHead />
    </div>
    <ChatInformation />
  </div>
</template>

<style lang="scss" scoped>
.conversation {
  @apply flex gap-3 h-full;

  &__body {
    @apply flex-1 bg-white rounded-lg overflow-hidden;
  }
}
</style>
