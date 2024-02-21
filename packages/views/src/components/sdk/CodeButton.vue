<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { decode } from "@code-wallet/library";
  import { EventChannel, InternalButtonEvents, InternalElementEvents } from '@code-wallet/events';

  const props = defineProps({
    id: { type: String, required: true, },
    payload: { type: String, required: true, },
  });

  const el = ref<HTMLElement | null>(null);
  const channel = new EventChannel<InternalButtonEvents & InternalElementEvents>(props.id);
  const button = ref(decode(props.payload));

  onMounted(() => {
    if (!el.value) return;

    const { clientWidth, clientHeight } = el.value;
    channel.emit('resize', { width: clientWidth, height: clientHeight });
  });

  function onClick(event: MouseEvent) {
    channel.emit('invoke');
  }

  function getFgColor() {
    return button.value.appearance === 'light' ? '#0F0C1F' : 'white';
  }

  function getBgColor() {
    return button.value.appearance === 'light' ? 'white' : '#0F0C1F';
  }
</script>

<template>
  <button ref="el" type="button" 
    @click="onClick"
    :style="{ color:getFgColor(), background: getBgColor() }"
    class="fade-in text-center rounded-md py-4 px-9 whitespace-nowrap
    hover:opacity-90 active:opacity-80 ease-out duration-100 
    w-[13.875rem] h-[3.75rem]">
    <slot />
  </button>
</template>

<style scoped>
.fade-in {
  animation: fadeIn ease 0.3s;
  transform-origin: center bottom;
}

@keyframes fadeIn {
  0% { opacity:0; transform: scaleY(0.8); }
  100% { opacity:1; transform: scaleY(1); }
}
</style>
