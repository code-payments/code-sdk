<script setup lang="ts">
import { PaymentRequest } from "../../../requests";
import { openInAppStore, openInApp, formatCurrency } from "../../../utils";
import { CodeSpinner } from '../../common';

import CodeMobileModal from '../CodeMobileModal.vue';

const props = defineProps({
  id: { type: String, required: true, },
  payload: { type: String, required: true, },
  asPage: { type: Boolean, required: false, },
});

function getFormattedAmount(req: PaymentRequest) {
  return formatCurrency(req.getAmount()!, req.getCurrency()!);
}
</script>

<template>
  <CodeMobileModal v-bind="props" :create-request="PaymentRequest.fromPayload">

    <template #default="{ state, channel, request }">
      
      <div class="text-white text-[26px] px-16 text-center leading-tight
        tracking-tighter font-medium">Use the Code Wallet app to pay</div>

      <button v-if="!state.isLoading" type="button" @click="openInApp(channel, request.toPayload())" 
      class="mt-6 block rounded-md bg-white py-4 text-base
      font-semibold text-[#0f0c1f] text-center shadow-sm
      w-full">Open in Code</button>

      <button v-else type="button" 
      class="mt-6 block rounded-md bg-white py-4 text-base
      font-semibold text-[#0f0c1f] text-center shadow-sm
      w-full whitespace-nowrap">
        <span class="absolute left-1/2 -translate-x-1/2 pt-1">
          <CodeSpinner v-if="state.isLoading"/>
        </span>
        &nbsp;
      </button>

      <button type="button" @click="openInAppStore(channel)"
        class="mt-6 block rounded-md bg-transparent border
        border-white py-4 text-base font-semibold text-[#0f0c1f]
        text-center text-white shadow-sm w-full">Download Code
        Now</button>

    </template>
  </CodeMobileModal>  
</template>

<style scoped>
@keyframes fade-slide {
  0% {
    opacity: 0;
    transform: translateY(-0.5vh);
    transform-origin: top center;
  }

  100% {
    opacity: 1;
  }
}

.delay-show-1 {
  opacity: 0;
  animation: fade-slide 0.5s ease-out 0s forwards;
}

.delay-show-2 {
  opacity: 0;
  animation: fade-slide 0.5s ease-out 0.5s forwards;
}

.delay-show-3 {
  opacity: 0;
  animation: fade-slide 0.5s ease-out 1.0s forwards;
}

.delay-show-4 {
  opacity: 0;
  animation: fade-slide 0.5s ease-out 1.5s forwards;
}
</style>