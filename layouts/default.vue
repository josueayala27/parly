<template>
  <div class="app-layout">
    <LayoutDefaultAppHeader />
    <div class="app-layout__content overflow-hidden">
      <LayoutDefaultAppChats />
      <main class="app-layout__body">
        <slot />
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-layout {
  @apply h-screen overflow-hidden flex flex-col;

  &__content {
    @apply flex gap-3 p-3 flex-1 bg-blue-50;
    &__conversation {
      @apply flex-1;
    }
  }

  &__body {
    @apply flex-1;
  }
}
</style>
