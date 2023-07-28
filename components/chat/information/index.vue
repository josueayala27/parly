<template>
  <aside class="chat-info w-72 flex-shrink-0 flex flex-col bg-white rounded-lg">
    <ChatInformationSection title="Contact Information">
      <template #action>
        <icon size="20px" name="uil:ellipsis-h" />
      </template>
    </ChatInformationSection>

    <ChatInformationSection class="chat-info__section">
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
    </ChatInformationSection>

    <ChatInformationSection title="Files">
      <div class="flex gap-2 overflow-auto scrollbar-hide">
        <div
          v-for="item in 5"
          :key="item"
          class="w-20 flex-shrink-0 aspect-square rounded-lg overflow-hidden bg-gray-100"
        />
      </div>
    </ChatInformationSection>

    <ChatInformationSection list>
      <div class="flex flex-col gap-0">
        <ChatInformationAction icon="uil:comments-alt" title="Notifications">
          <UiToggle />
        </ChatInformationAction>
        <ChatInformationAction icon="uil:star" title="Starred">
          <span
            class="bg-orange-400 text-white px-2 py-[2px] rounded-full text-sm"
          >
            14
          </span>
        </ChatInformationAction>
      </div>
    </ChatInformationSection>
    <ChatInformationSection list>
      <div class="flex flex-col gap-0">
        <ChatInformationAction
          class="text-red-500"
          icon="uil:trash-alt"
          title="Delete chat"
        />
        <ChatInformationAction
          class="text-red-500"
          icon="uil:user-times"
          title="Block user"
        />
      </div>
    </ChatInformationSection>
  </aside>
</template>

<style lang="scss">
.chat-info {
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
