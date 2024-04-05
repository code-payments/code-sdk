<script lang="ts" setup>
  import CodeButton from '../CodeButton.vue';
  import CodeLogoSmall from '../../common/logos/CodeLogoSmall.vue';

  defineProps({
    id: { type: String, required: true, },
    payload: { type: String, required: true, },
  });
</script>

<template>
  <CodeButton :id="id" :payload="payload">
    <CodeLogoSmall class="inline-block w-7 h-7 mr-4" />
    <span class="font-avenir-next-bold text-md inline-block align-middle">
      Pay with Code
    </span>
  </CodeButton> 
</template>