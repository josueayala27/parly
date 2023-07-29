<template>
  <header class="app-header">
    <nav class="app-header__navigation">
      <p class="app-header__logo">Parly</p>

      <div class="app-header__actions">
        <UiAvatar />
        <div class="app-header__labels">
          <UiCaption>{{ user.full_name }}</UiCaption>
          <UiCaption class="app-header__labels--accent" size="sm">
            Online
          </UiCaption>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const { user } = useAuth();
</script>

<style lang="scss" scoped>
.app-header {
  @apply py-4 px-6 bg-white border-b;

  &__navigation {
    @apply flex justify-between;
  }

  &__logo {
    @apply text-[32px] font-bold;
  }

  &__actions {
    @apply flex items-center gap-4;
    .app-header__labels {
      &--accent {
        @apply text-blue-500;
      }
    }
  }
}
</style>
