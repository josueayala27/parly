<template>
  <div class="p-6 flex flex-col gap-6 overflow-auto flex-1 scrollbar-hide">
    <template
      v-for="({ user, created_at, count_likes, ...message }, i) in messages"
      :key="i"
    >
      <ChatMessage
        :likes="count_likes"
        :created-at="created_at"
        :full-name="user?.full_name"
      >
        <UiCaption class="text-gray-700">
          {{ message.content }}
        </UiCaption>

        <!-- <div class="flex gap-2">
          <component
            :is="component"
            v-for="(attachment, j) in message.attachments"
            :key="j"
            :name="attachment"
            class="mt-2"
          />
        </div> -->
      </ChatMessage>
      <!-- <ChatMessageSeparator /> -->
    </template>
  </div>
</template>

<script lang="ts" setup>
// const component = resolveComponent("ChatMessageDocument");

defineProps<{ messages: Array<any> }>();
</script>
