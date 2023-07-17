<template>
  <aside class="chats">
    <div
      v-for="chat in 10"
      :key="chat"
      class="rounded-lg p-4 hover:bg-gray-100 cursor-pointer duration-300"
    >
      <div class="flex gap-4">
        <UiAvatar size="medium" />
        <div class="flex flex-col overflow-hidden">
          <div class="flex gap-2 items-center">
            <UiCaption class="font-bold flex-1 truncate" size="base">
              Josué Alfonso Ayala Martínez
            </UiCaption>
            <UiCaption size="sm" class="truncate text-gray-700">
              23:56 PM
            </UiCaption>
          </div>
          <UiCaption class="truncate text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ut,
            sed corrupti nam odit deserunt quam nihil aut fugiat nemo excepturi
            optio nisi ipsa dolor quibusdam quaerat. Impedit, error ipsam.
          </UiCaption>
        </div>
      </div>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.chats {
  @apply w-80 p-3 bg-white flex flex-col gap-2 overflow-auto scrollbar-hide;
}
</style>
