<template>
  <header class="header">
    <nav class="header__navigation">
      <p class="header__logo">Parly</p>

      <div class="header__actions">
        <UiAvatar />
        <div class="header__labels">
          <UiCaption>Josué Ayala</UiCaption>
          <UiCaption class="header__labels--accent" size="sm">Online</UiCaption>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  @apply py-4 px-6 bg-white border-b;

  &__navigation {
    @apply container mx-auto flex justify-between;
  }

  &__logo {
    @apply text-[32px] font-bold;
  }

  &__actions {
    @apply flex items-center gap-4;
    .header__labels {
      &--accent {
        @apply text-blue-500;
      }
    }
  }
}
</style>
