<template>
  <div class="flex gap-3 h-full">
    <div class="flex flex-col gap-3 flex-1">
      <div class="flex-1 bg-white rounded-lg overflow-hidden">
        <ChatHead />
        <Chat :messages="messages" />
      </div>
      <div class="px-6 py-2 bg-white rounded-lg flex items-center gap-6">
        <div class="flex items-center gap-4">
          <Icon size="24px" name="uil:paperclip" />
        </div>
        <input
          class="flex-1 py-2 px-4 border rounded-lg outline-none"
          type="text"
          placeholder="Write a message here"
          value="What a nice song"
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
const route = useRoute();

const { data: messages } = await useAsyncData(`chat:${route.params.uid}`, () =>
  useApi<Array<any>>(`/channels/${route.params.uid}/messages`)
);

console.log(messages.value);

definePageMeta({
  middleware: ["auth"],
  keepalive: true,
});
</script>
