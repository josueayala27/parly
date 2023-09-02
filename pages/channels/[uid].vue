<template>
  <div class="flex gap-3 h-full">
    <div class="flex flex-col gap-3 flex-1">
      <div class="flex-1 bg-white rounded-lg overflow-hidden flex flex-col">
        <ChatHead />
        <Chat ref="chat" :messages="messages" />
      </div>
      <div class="px-6 py-2 bg-white rounded-lg flex items-center gap-6">
        <div class="flex items-center gap-4">
          <Icon size="24px" name="uil:paperclip" />
        </div>
        <UiInput
          v-model="message"
          placeholder="Write a message here"
          @keypress.enter="handleSendMessage"
        />
        <div>
          <Icon size="24px" name="uil:microphone" />
        </div>
      </div>
    </div>
    <ChatInformation />
  </div>
</template>

<script setup lang="ts">
import ChatComponent from "@/components/chat/Index.vue";

const route = useRoute();
const { sendMessage, generateTempMessage } = useChat();

const channelId = ref<string>(String(route.params.uid));

const chat = ref<InstanceType<typeof ChatComponent> | null>(null);
const messages = ref<any>([]);
const message = ref<string>("");

/**
 * Retrieve channel messages.
 */
const { data } = await useAsyncData<any>(`chat:${channelId.value}`, () =>
  useApi<Array<any>>(`/channels/${channelId.value}/messages`)
);

messages.value = data.value.map((message: any) => ({
  ...message,
  is_temp: false,
}));

/**
 * Send channel message.
 */
const handleSendMessage = () => {
  sendMessage(message.value!, String(channelId.value));
  messages.value.push(generateTempMessage(message.value));
  message.value = "";

  chat.value?.writeHello();
};

/**
 * Define page config.
 */
definePageMeta({
  middleware: ["auth", "socket"],
  keepalive: true,
  key: (route) => `channel:${route.params.uid}`,
});
</script>
