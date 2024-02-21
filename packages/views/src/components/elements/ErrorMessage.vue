<script setup lang="ts">
import { CodeLogo } from '.';

const props = defineProps<{
  errMessage: string
}>()
</script>

<template>
  <div class="-mt-20 saturate-0">
    <CodeLogo class="h-12 mb-10 mx-auto" />

    <p class="text-gray-300 text-[16px] leading-tight font-avenir-next-bold pb-10">
      We've detected an issue with the Code SDK integration on this website. The following error code should be helpful for the developer of this website to make a fix.
    </p>

    <p class="relative text-gray-300 ring-1 ring-gray-500 rounded-md bg-gray-700 p-4 text-sm">
      {{ errMessage.replace(/Error: /, '') }}
    </p>

    <a class="block mt-10 underline text-gray-300" href="https://sdk.getcode.com" target="_blank" >https://sdk.getcode.com</a>
  </div>
</template>
