<script lang="ts" setup>
  import { CodeButton } from '../sdk';
  import CodeLogoSmall from '../elements/logos/CodeLogoSmall.vue';

  defineProps({
    id: { type: String, required: true, },
    payload: { type: String, required: true, },
  });
</script>

<template>
  <CodeButton :id="id" :payload="payload">
    <CodeLogoSmall class="inline-block w-7 h-7 mr-3" />
    <span class="font-avenir-next-bold text-md inline-block align-middle">
      Tip with Code
    </span>
  </CodeButton> 
</template>