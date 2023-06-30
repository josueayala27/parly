<template>
  <div class="flex gap-4">
    <UiAvatar size="medium" />
    <div class="flex flex-col">
      <div class="flex items-center gap-2">
        <UiCaption class="font-semibold leading-[24px] text-sm">
          Josué Ayala
        </UiCaption>
        <UiCaption class="text-sm text-gray-700">19:31 PM </UiCaption>
        <Icon size="16px" name="uil:check" />
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
