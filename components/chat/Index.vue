<template>
  <div
    ref="content"
    class="p-6 flex flex-col gap-3 overflow-auto flex-1 scrollbar-hide"
  >
    <template
      v-for="({ user, created_at, count_likes, ...message }, i) in messages"
      :key="i"
    >
      <ChatMessage
        :likes="count_likes"
        :created-at="created_at"
        :full-name="user?.full_name"
      >
        <UiCaption
          :class="[!message.is_temp ? 'text-gray-700' : 'text-red-500']"
        >
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
const { $gsap } = useNuxtApp();

const content = ref(null);
const bottom = ref();

const writeHello = () => {
  $gsap.to(content.value, {
    duration: 0,
    scrollTo: bottom.value,
  });
};

/**
 * Expose methods to use with refs.
 */
defineExpose({
  writeHello,
});

onMounted(() => {
  $gsap.to(content.value, {
    duration: 0,
    scrollTo: bottom.value,
  });
});

defineProps<{ messages: Array<any> }>();
</script>
