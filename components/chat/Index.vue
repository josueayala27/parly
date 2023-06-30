<template>
  <div class="p-6 flex flex-col gap-6">
    <template v-for="(message, i) in messages" :key="i">
      <ChatMessage>
        <UiCaption class="text-gray-700">
          {{ message.message }}
        </UiCaption>

        <div class="flex gap-2">
          <component
            :is="component"
            v-for="(attachment, j) in message.attachments"
            :key="j"
            :name="attachment"
            class="mt-2"
          />
        </div>
      </ChatMessage>
      <!-- <ChatMessageSeparator /> -->
    </template>
  </div>
</template>

<script lang="ts" setup>
const component = resolveComponent("ChatMessageDocument");

const messages = ref<Array<{ message: String; attachments?: any }>>([
  {
    attachments: ["Reporte.doc", "Hola.csv"],
    message:
      "We're currently developing our sales literature and web sites and are interested in translating these into five languages apart from English.",
  },
  {
    message: "Howdy pals :) Just listen to that song 😍",
  },
  {
    message: "Hey! Don't forget to post the report TODAY! 😠",
  },
  {
    attachments: ["Reporte #1 LOL.doc"],
    message: "Hey guys check this out!",
  },
]);
</script>
