<template>
  <div class="conversation-header">
    <UiAvatar size="sm" />

    <div class="conversation-header__icons">
      <icon class="conversation-header__icon" size="20px" name="uil:search" />
      <icon class="conversation-header__icon" size="20px" name="uil:phone" />
      <icon
        class="conversation-header__icon"
        size="20px"
        name="uil:ellipsis-h"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.conversation-header {
  @apply p-3 flex items-center justify-between border-b;

  &__icons {
    @apply flex gap-4;
  }

  &__icon {
    @apply cursor-pointer;
  }
}
</style>
