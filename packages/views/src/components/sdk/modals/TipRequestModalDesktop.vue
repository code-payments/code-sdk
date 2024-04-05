<script setup lang="ts">
import { CodeSpinner, DownloadAppQR, } from '../../common';
import { TipRequest,  } from "../../../requests"

import CodeDesktopModal from '../CodeDesktopModal.vue';
import CodeRequestTip from '../../cards/CodeRequestTip.vue';

const props = defineProps({
  id: { type: String, required: true, },
  payload: { type: String, required: true, },
  asPage: { type: Boolean, required: false, },
});

function onDownload(state: { isShowingDownloadQr: boolean; }) {
  state.isShowingDownloadQr = !state.isShowingDownloadQr;
}

</script>

<template>
  <CodeDesktopModal v-bind="props" :create-request="TipRequest.fromPayload">

    <template #default="{ state, request }">

      <h2 class="text-white text-[2.8vh] leading-tight
      font-avenir-next-bold mb-10">
        Scan with the Code Wallet<br>app to tip {{ props.asPage }}
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
          <CodeRequestTip 
            :payload="request.kikCode" 
            :username="request.intent.options.platform?.username"
            class="bounce" />
        </div>

        <div v-show="state.isLoading" class="h-[45.9vh]">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2">
            <CodeSpinner class="text-white" />
          </div>
        </div>

        <div v-if="state.hasScanned" class="absolute top-1/2 left-1/2 -translate-x-1/2">
          <p class="text-white text-[12px] leading-tight font-avenir-next-bold pb-10">
            Confirm login on Code
            <button type="button" @click="state.hasScanned = false"
              class="underline block mt-2 text-center w-full">Need to scan again?</button>
          </p>
        </div>
      </div>

      <div>

      <button type="button" @click="onDownload(state)" 
        class="mt-10 block rounded-md bg-transparent border
        border-white/50 py-2.5 text-base font-semibold text-[#0f0c1f]
        text-center text-white shadow-sm w-[30vh] min-w-[250px] mx-auto">
        Download Code

        <svg class="inline-block -mt-1.5 ml-2" width="45" height="18" viewBox="0 0 45 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.7562 13.3991C15.5085 13.9493 15.2153 14.4558 14.8757 14.9214C14.4126 15.5563 14.0335 15.9958 13.7413 16.2398C13.2885 16.6403 12.8032 16.8454 12.2835 16.8571C11.9105 16.8571 11.4607 16.7551 10.937 16.548C10.4116 16.3419 9.9288 16.2398 9.48732 16.2398C9.02431 16.2398 8.52774 16.3419 7.99659 16.548C7.46463 16.7551 7.03609 16.863 6.70844 16.8737C6.21016 16.894 5.71348 16.6831 5.21772 16.2398C4.90129 15.9743 4.50551 15.5194 4.03138 14.8749C3.52267 14.1865 3.10445 13.3883 2.7768 12.4784C2.42591 11.4955 2.25 10.5437 2.25 9.62226C2.25 8.56675 2.48716 7.65639 2.9622 6.89351C3.33555 6.28073 3.83222 5.79736 4.45385 5.44251C5.07547 5.08766 5.74714 4.90683 6.47047 4.89526C6.86626 4.89526 7.38526 5.01299 8.03025 5.24438C8.67341 5.47653 9.08638 5.59426 9.26743 5.59426C9.40281 5.59426 9.86157 5.45661 10.6393 5.18216C11.3748 4.92763 11.9954 4.82224 12.5039 4.86376C13.8818 4.9707 14.9171 5.49306 15.6055 6.43414C14.3732 7.15221 13.7636 8.15794 13.7757 9.44813C13.7869 10.4531 14.166 11.2894 14.911 11.9534C15.2487 12.2616 15.6258 12.4998 16.0453 12.669C15.9543 12.9227 15.8582 13.1658 15.7562 13.3991ZM12.5959 1.44009C12.5959 2.22777 12.2967 2.96323 11.7002 3.64395C10.9805 4.4532 10.1099 4.92083 9.16573 4.84704C9.15371 4.75254 9.14673 4.65309 9.14673 4.54858C9.14673 3.79241 9.48904 2.98315 10.0969 2.32148C10.4004 1.98646 10.7864 1.7079 11.2544 1.48569C11.7215 1.26678 12.1633 1.14572 12.5787 1.125C12.5909 1.2303 12.5959 1.33562 12.5959 1.44009Z" fill="white"/>
          <path d="M30.2242 6.23775C29.6817 6.23775 29.25 6.66945 29.25 7.21197V11.2699C29.25 11.8125 29.6817 12.2442 30.2242 12.2442C30.7667 12.2442 31.1984 11.8125 31.1984 11.2699V7.21197C31.1984 6.66945 30.7667 6.23775 30.2242 6.23775ZM40.2498 6.40485V12.7021C40.2498 13.2452 39.8417 13.6894 39.3142 13.7464L39.1995 13.7524L38.5018 13.7523L38.5028 15.9007C38.5028 16.4433 38.071 16.875 37.5285 16.875C37.0248 16.875 36.6166 16.5027 36.5608 16.0153L36.5543 15.9007L36.5534 13.7523H35.2561L35.2564 15.9007C35.2564 16.4433 34.8247 16.875 34.2821 16.875C33.7784 16.875 33.3702 16.5027 33.3144 16.0153L33.3079 15.9007L33.3077 13.7523L32.6112 13.7524C32.0681 13.7524 31.6239 13.3444 31.5671 12.8169L31.5609 12.7021V6.40485H40.2498ZM41.5865 6.23775C42.0903 6.23775 42.4985 6.60998 42.5543 7.09752L42.5608 7.21197V11.2699C42.5608 11.8125 42.129 12.2442 41.5865 12.2442C41.0828 12.2442 40.6746 11.8719 40.6188 11.3844L40.6123 11.2699V7.21197C40.6123 6.66945 41.0441 6.23775 41.5865 6.23775ZM38.6027 1.12501C38.6258 1.12523 38.6472 1.13118 38.6684 1.14292C38.724 1.17372 38.7496 1.23097 38.7379 1.28829L38.722 1.33089L38.0358 2.57065C39.2901 3.22333 40.1577 4.43428 40.2428 5.83844L40.2498 6.06171H31.5609C31.5626 4.63821 32.3676 3.38873 33.5801 2.67831L33.7749 2.57067L33.0886 1.33089C33.05 1.26124 33.0729 1.18143 33.1423 1.14292C33.1635 1.13118 33.185 1.12524 33.208 1.12501C33.2408 1.12469 33.2726 1.13554 33.2979 1.15686L33.3303 1.19662L34.0255 2.44982C34.5943 2.19755 35.2322 2.05596 35.9053 2.05596C36.4823 2.05596 37.0334 2.15998 37.5373 2.34857L37.7851 2.44982L38.4804 1.19661C38.5066 1.14916 38.5534 1.12453 38.6027 1.12501ZM33.9002 3.74628C33.7019 3.74628 33.5377 3.91046 33.5377 4.10881C33.5377 4.30716 33.7019 4.47134 33.9002 4.47134C34.0986 4.47134 34.2627 4.30716 34.2627 4.10881C34.2627 3.91046 34.0986 3.74628 33.9002 3.74628ZM37.9104 3.74628C37.7121 3.74628 37.5479 3.91046 37.5479 4.10881C37.5479 4.30716 37.7121 4.47134 37.9104 4.47134C38.1088 4.47134 38.273 4.30716 38.273 4.10881C38.273 3.91046 38.1088 3.74628 37.9104 3.74628Z" fill="white"/>
        </svg>
      </button>

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
  animation: delay 0.2s linear 0.7s forwards;
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