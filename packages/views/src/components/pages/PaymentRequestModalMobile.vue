<script setup lang="ts">
import { PaymentRequest, openInAppStore, openInApp, formatCurrency } from "../../utils";
import { CodeSpinner } from '../elements';
import CodeMobileModal from '../sdk/CodeMobileModal.vue';

const props = defineProps({
  id: { type: String, required: true, },
  payload: { type: String, required: true, },
});

function getFormattedAmount(req: PaymentRequest) {
  return formatCurrency(req.getAmount()!, req.getCurrency()!);
}
</script>

<template>
  <CodeMobileModal :create-request="PaymentRequest.fromPayload" 
    :payload="props.payload" 
    :id="props.id">

    <template #default="{ state, channel, request }">
      
      <div class="delay-show-1 pb-10">
        <div class="pb-5 text-white text-[28px] text-center leading-tight
          tracking-tighter font-medium">Use Code App to Purchase for 
          {{ getFormattedAmount(request as PaymentRequest) }}
        </div>

        <button v-if="!state.isLoading" type="button" @click="openInApp(channel, request.toPayload())" 
        class="mt-6 block rounded-md bg-white py-4 text-base
        font-semibold text-[#0f0c1f] text-center shadow-sm
        w-full">Open Code</button>

        <button v-else type="button" 
        class="mt-6 block rounded-md bg-white py-4 text-base
        font-semibold text-[#0f0c1f] text-center shadow-sm
        w-full whitespace-nowrap">
          <span class="absolute left-1/2 -translate-x-1/2 pt-1">
            <CodeSpinner v-if="state.isLoading"/>
          </span>
          &nbsp;
        </button>
      </div>

      <div class="delay-show-2 border-b border-[#565C86]"></div>

      <div class="delay-show-3 mt-10">
        <div class="pb-10 text-white text-[28px] text-center
        leading-tight tracking-tighter font-medium">
        Don’t have the <br> Code Wallet app yet?</div>

        <div class="flex content-center text-white">
          <div class="grow h-14 grid content-center pl-3 text-lg leading-6">
            Download it and create an account.<br>
            Get your first $1 for free.
          </div>
        </div>

      <button type="button" @click="openInAppStore(channel)"
        class="mt-6 block rounded-md bg-transparent border
        border-white py-4 text-base font-semibold text-[#0f0c1f]
        text-center text-white shadow-sm w-full">Download Code
        Now</button>
      </div>

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