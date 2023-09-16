<template>
  <div class="flex gap-4">
    <UiAvatar size="medium" />
    <div class="flex flex-col">
      <div class="flex items-center gap-2">
        <UiCaption class="font-semibold leading-[24px] text-sm">
          {{ fullName }}
        </UiCaption>
        <UiCaption class="text-sm text-gray-700">
          <!-- {{ $dayjs(createdAt).format("HH:mm A") }} -->
        </UiCaption>
        <!-- <Icon size="16px" name="uil:check" /> -->
      </div>
      <div>
        <slot />
        <div
          v-if="likes"
          class="inline-flex items-center gap-[2px] text-sm text-gray-600 cursor-pointer group"
        >
          {{ likes }}
          <Icon
            size="20px"
            class="text-red-500 group-hover:text-red-600"
            name="heroicons-solid:heart"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  fullName: string;
  createdAt: string;
  likes: number;
}>();
</script>
