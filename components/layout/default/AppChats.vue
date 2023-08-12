<template>
  <aside class="chats">
    <div class="flex gap-3">
      <UiInput v-model="ha" class="flex-1" placeholder="Busca un chat." />
      <div>i</div>
    </div>

    <span v-if="isLoading">Loading...</span>
    <template v-else>
      <RouterLink
        v-for="(chat, cid) in chats"
        :key="cid"
        :to="`/channels/${chat.id}`"
        class="rounded-lg p-4 hover:bg-gray-100 cursor-pointer duration-300"
      >
        <div class="flex gap-4">
          <UiAvatar
            :src="chat.is_group ? chat.image : chat.chat_whit?.avatar"
            size="medium"
          />
          <div class="flex flex-col overflow-hidden flex-1">
            <div class="flex gap-2 items-center">
              <UiCaption class="font-bold flex-1 truncate" size="base">
                {{
                  chat.is_group
                    ? chat.channel_name
                    : chat.message_author?.full_name
                }}
              </UiCaption>
              <UiCaption size="sm" class="truncate text-gray-700">
                {{ $dayjs(chat.created_at).format("HH:mm") }}
              </UiCaption>
            </div>
            <UiCaption class="truncate text-gray-700">
              {{ chat.message_content }}
            </UiCaption>
          </div>
        </div>
      </RouterLink>
    </template>
  </aside>
</template>

<script lang="ts" setup>
import { LastChat } from "@/interfaces/chat.interface";

const ha = ref<string>("");
const isLoading = ref<boolean>(true);
const chats = ref<LastChat[]>([]);

const { getLastMessages } = useChat();

getLastMessages((_chats: LastChat[]) => {
  chats.value = _chats;
  isLoading.value = false;
});
</script>

<style lang="scss" scoped>
.chats {
  @apply w-80 p-3 bg-white flex flex-col gap-2 overflow-auto scrollbar-hide;
}
</style>
