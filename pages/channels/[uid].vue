<template>
  <div class="flex gap-3 h-full">
    <div class="flex flex-col gap-3 flex-1">
      <div class="flex-1 bg-white rounded-lg overflow-hidden flex flex-col">
        <ChatHead />
        <template v-if="pending"> Loading... </template>

        <Chat v-else ref="chat" :messages="data" />
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
const { socket } = useSocket();
const { sendMessage } = useChat();

const channelId = ref<string>(String(route.params.uid));

const chat = ref<InstanceType<typeof ChatComponent> | null>(null);
const message = ref<string>("");

/**
 * Retrieve channel messages.
 */
const { data, pending } = await useAsyncData<any>(
  `chat:${channelId.value}`,
  async () => {
    const api = await useApi<Array<any>>(
      `/channels/${channelId.value}/messages`
    );
    return api.map((message: any) => ({
      ...message,
      is_temp: false,
    }));
  },
  { lazy: true }
);

/**
 * Send channel message.
 */
const handleSendMessage = async () => {
  const msg = await sendMessage<any>(message.value!, String(channelId.value));
  data.value.push(msg);
  message.value = "";

  // chat.value?.writeHello();
};

onMounted(() => {
  socket.value.on("message:get", (msg) => {
    data.value.push(msg);
  });
});

/**
 * Define page config.
 */
definePageMeta({
  middleware: ["auth", "socket"],
  keepalive: true,
  key: (route) => `channel:${route.params.uid}`,
});
</script>
