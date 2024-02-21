<script setup lang="ts">
import { CodeRequestPayment, CodeSpinner, DownloadAppQR, } from '../elements';
import { PaymentRequest, formatCurrency,  } from "../../utils"
import CodeDesktopModal from '../sdk/CodeDesktopModal.vue';

const props = defineProps({
  id: { type: String, required: true, },
  payload: { type: String, required: true, },
});

function onDownload(state: { isShowingDownloadQr: boolean; }) {
  state.isShowingDownloadQr = !state.isShowingDownloadQr;
}

function getFormattedAmount(req: PaymentRequest) {
  return formatCurrency(req.getAmount()!, req.getCurrency()!);
}
</script>

<template>
  <CodeDesktopModal :create-request="PaymentRequest.fromPayload" 
    :payload="props.payload" 
    :id="props.id">

    <template #default="{ state, request }">

      <h2 class="text-white text-[34px] leading-tight
      font-avenir-next-bold mb-10">
        Scan with Code App to Pay
        {{ getFormattedAmount(request as PaymentRequest) }}
      </h2>

      <div class="m-auto relative">

        <div class="absolute top-[10vh] right-0 max-w-[21vh] mv-right-start"
          :class="{ 'mv-right-end': state.isShowingDownloadQr }">

          <a @click="onDownload(state)" href="https://www.getcode.com/download" target="_blank">
            <DownloadAppQR v-if="state.isShowingDownloadQr" @complete="onDownload" />
          </a>
        </div>

        <div v-show="!state.isLoading" class="mv-left-start delay-800"
          :class="{ 'invisible': state.hasScanned, 'mv-left-end': state.isShowingDownloadQr, }">
          <CodeRequestPayment
            :payload="request.kikCode" 
            :amount="request.intent.options.amount" 
            :currency="request.intent.options.currency"
            class="bounce" />
        </div>

        <div v-show="state.isLoading" class="h-[45.9vh]">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2">
            <CodeSpinner class="text-white" />
          </div>
        </div>

        <div v-if="state.hasScanned" class="absolute top-1/2 left-1/2 -translate-x-1/2">
          <p class="text-white text-[12px] leading-tight font-avenir-next-bold pb-10">
            Confirm payment on Code
            <button type="button" @click="state.hasScanned = false"
              class="underline block mt-2 text-center w-full">Need to scan again?</button>
          </p>
        </div>
      </div>

      <div>
        <p class="mt-10 text-white text-[16px] leading-tight font-avenir-next-bold pb-10">
          Don’t have the Code app yet?<br>
          <button v-if="!state.isShowingDownloadQr" @click="onDownload(state)" class="underline">Download Now</button>
          <a v-else @click="onDownload(state)" href="https://www.getcode.com/download" target="_blank" class="underline">Download Now</a>
          and get your first $1 free
        </p>
      </div>

    </template>
  </CodeDesktopModal>  
</template>

<style scoped>
.mv-right-start {
  transition: all 0.25s ease-out;
  transform: scale(0.8);
  opacity: 0;
}

.mv-right-end {
  transform: translateX(5vh);
  opacity: 1;
}

.mv-left-start {
  transition: all 0.25s ease-out;
}

.mv-left-end {
  transform: scale(0.8) translateX(-20vh);
  opacity: 1;
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.delay-500 {
  opacity: 0;
  animation: delay 0.5s linear 0.5s forwards;
}

.delay-800 {
  opacity: 0;
  animation: delay 0.8s linear 0.8s forwards;
}

@keyframes delay {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.bounce {
  transform: scale(0.6);
  animation: pop 0.45s linear(0, 0.67793 0.01%, 0.70702 1.26%, 0.7582 2.65%, 1.06306 9.091%,
      1.11795 10.871%, 1.14755 12.611%, 1.15324 13.471%, 1.1533 14.341%,
      1.13654 16.202%, 1.10139 18.102%, 0.96192 24.192%, 0.93228 26.333%,
      0.92023 28.443%, 0.92146 29.893%, 0.93014 31.463%, 1.01182 39.104%,
      1.02627 41.204%, 1.03255 43.274%, 1.02807 46.425%, 0.98852 54.095%,
      0.97849 58.236%, 0.98079 61.516%, 0.99924 68.857%, 1.00436 72.677%,
      1.00367 76.268%, 0.99199 88.109%, 0.99732 99.99%, 1) 0.1s forwards;
  animation-delay: 800ms;
}

@keyframes pop {
  0% {
    transform: scale(0.6);
  }

  100% {
    transform: scale(1);
  }
}
</style>