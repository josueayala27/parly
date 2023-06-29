<template>
  <aside class="chat-info">
    <div class="chat-info__head">
      <UiCaption> Contact Information </UiCaption>
      <icon size="20px" name="uil:ellipsis-h" />
    </div>

    <div class="chat-info__data">
      <ChatInformationItem
        class="chat-info__username"
        title="username"
        description="@josue_ayala27"
      />

      <ChatInformationItem title="mobile" description="(503) 2531 2362" />

      <ChatInformationItem
        title="description"
        description="Join us if u wanna work together 😈"
      />
    </div>
  </aside>
</template>

<style lang="scss">
.chat-info {
  @apply w-72 flex-shrink-0 p-3 flex flex-col gap-6 bg-white;

  &__head {
    @apply flex justify-between items-center;
    svg {
      @apply cursor-pointer;
    }
  }

  &__data {
    @apply flex flex-col gap-3;
  }

  &__username {
    .info-item__description {
      @apply text-blue-500 font-semibold cursor-pointer;
    }
  }
}
</style>
