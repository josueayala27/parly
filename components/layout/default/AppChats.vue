<template>
  <aside class="chats">
    <RouterLink
      v-for="(chat, cid) in chats"
      :key="cid"
      :to="`/channels/${[chat.name]}`"
      class="rounded-lg p-4 hover:bg-gray-100 cursor-pointer duration-300"
    >
      <div class="flex gap-4">
        <UiAvatar size="medium" />
        <div class="flex flex-col overflow-hidden flex-1">
          <div class="flex gap-2 items-center">
            <UiCaption class="font-bold flex-1 truncate" size="base">
              {{ chat.name }}
            </UiCaption>
            <UiCaption size="sm" class="truncate text-gray-700">
              {{ chat.create_at }}
            </UiCaption>
          </div>
          <UiCaption class="truncate text-gray-700">
            {{ chat.message }}
          </UiCaption>
        </div>
      </div>
    </RouterLink>
  </aside>
</template>

<script lang="ts" setup>
interface Chat {
  name: string;
  message: string;
  create_at: string;
}

const chats: Chat[] = [
  {
    name: "Josué Ayala",
    message: "Hey, how is it going on? btw quick question fy",
    create_at: "23:56 PM",
  },
  {
    name: "Arkhip Lagounov",
    message: "Оком рек чтя Под мир роз сон Тем Сына лиры Век.",
    create_at: "00:56 PM",
  },
  {
    name: "Lyov Petrov",
    message: "Mira, ya aprendí a hablar español, qué tal lo estoy haciendo?",
    create_at: "01:12 AM",
  },
];
</script>

<style lang="scss" scoped>
.chats {
  @apply w-80 p-3 bg-white flex flex-col gap-2 overflow-auto scrollbar-hide;
}
</style>
