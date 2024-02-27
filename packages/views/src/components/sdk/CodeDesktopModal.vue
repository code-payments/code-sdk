<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { EventChannel, InternalEvents } from "@code-wallet/events";
import { CodeRequest, CodeRequestFromPayload, LoginRequest } from "../../utils"
import { ErrorMessage } from '../elements';

const props = defineProps<{
  id: string;
  payload: string;
  createRequest: CodeRequestFromPayload;
}>();

const el = ref<HTMLElement | null>(null);
const elFocusOn = ref(null);

const channel = new EventChannel<InternalEvents>(props.id);
const request = ref<CodeRequest>(props.createRequest(props.payload));

const updatableFields = { 
  clientSecret: ref<string | undefined>(),
  idempotencyKey: ref<string | undefined>(),
  successUrl: ref<string | undefined>(),
  cancelUrl: ref<string | undefined>(),
}

const state = reactive({
  hasRejected: false,
  hasScanned: false,
  hasCompletedIntent: false,

  hasError: false,
  errMessage: "",

  isOpen: true,
  isLoading: true,
  isShowingDownloadQr: false,

  openedAt: Date.now(),
});


channel.on([ 'error', 'streamTimeout', 'streamClosed' ] , (msg) => { 
  state.hasError = true;
  state.errMessage = `${msg}`;
});

channel.on(['clientRejectedLogin', 'clientRejectedPayment'], () => {
  state.hasRejected = true; 
});

channel.on("intentSubmitted", () => { state.hasCompletedIntent = true; });
channel.on("codeScanned", () => { state.hasScanned = true; });
channel.on("beforeInvoke", () => { state.isLoading = true; })
channel.on("afterInvoke", () => {
  const { clientSecret, idempotencyKey, successUrl, cancelUrl } = updatableFields;

  const shouldRecreateRequest : boolean = [
    clientSecret.value, 
    idempotencyKey.value, 
    successUrl.value, 
    cancelUrl.value
  ].some((v) => v !== undefined);

  if (shouldRecreateRequest) {
    request.value = props.createRequest(props.payload, 
    {
      clientSecret: clientSecret.value,
      idempotencyKey: idempotencyKey.value,
      successUrl: successUrl.value,
      cancelUrl: cancelUrl.value,
    });
  }

  request.value.openStream(channel);
  state.isLoading = false;
})

channel.on("updatedClientSecret", (args: { value: string }) => { updatableFields.clientSecret.value = args.value; });
channel.on("updatedIdempotencyKey", (args: { value: string }) => { updatableFields.idempotencyKey.value = args.value; });
channel.on("updatedSuccessUrl", (args: { value: string }) => { updatableFields.successUrl.value = args.value; });
channel.on("updatedCancelUrl", (args: { value: string }) => { updatableFields.cancelUrl.value = args.value; });

onMounted(() => {
  // We probably don't have the right info yet to generate the kikcode properly,
  // however, we can ask the client to do it anyway in order to prefetch and
  // warm all assets required for showing the kikcode.
  if (request.value && !request.value.kikCode) {
    request.value.generateKikCode();
  }
});

onUnmounted(() => {
  if (request.value) {
    request.value.closeStream();
  }
});

function onClose() {
  // Avoid an obscure headlessui Firefox bug where the dialog is closed on open (hard to reproduce)
  // Source of issue:
  // https://github.com/tailwindlabs/headlessui/blob/1469b85c36802265c2409f443f926e1bb02230d4/packages/%40headlessui-vue/src/components/dialog/dialog.ts#L280-L287

  if (Date.now() > (state.openedAt + 100)) {
    state.isOpen = false;
    setTimeout(() => { 
        if (request.value instanceof LoginRequest) {
            channel.emit('clientRejectedLogin')
        } else {
            channel.emit('clientRejectedPayment')
        }
    }, 800);
  } else {
    state.isOpen = true;
  }
}
</script>

<template>
  <div ref="el">

    <TransitionRoot as="template" :show="state.isOpen">
      <Dialog as="div" class="relative z-10" @close="onClose" :initialFocus="elFocusOn">

        <TransitionChild as="template" 
          enter="duration-[100ms]" 
          enter-from="opacity-0" 
          enter-to="opacity-100"
          leave="duration-[400ms]" 
          leave-from="opacity-100" 
          leave-to="opacity-0">
          <div class="fixed inset-0 transition-opacity backdrop-blur-sm bg-[#0f0c1f]" />
        </TransitionChild>

        <div class="fixed inset-0 z-10 overflow-y-auto">

          <TransitionChild as="template" enter="duration-[100ms]" enter-from="opacity-0" enter-to="opacity-100"
            leave="duration-[100ms]" leave-from="opacity-100" leave-to="opacity-0">
            <button @click="onClose" type="button"
              class="absolute right-4 top-4 flex h-14 w-14 items-center justify-center rounded-full z-100">
              <XMarkIcon class="h-9 w-9 text-white" aria-hidden="true" />
            </button>
          </TransitionChild>

          <div class="grid h-screen place-items-center">
            <TransitionChild as="template" enter="duration-[100ms]"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100" leave="duration-[100ms]"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">


              <div class="text-center">

                <DialogPanel class="relative transform  transition-all w-full max-w-4xl p-6 mx-auto">

                  <Transition>
                    <div class="max-w-md m-auto" ref="elFocusOn">

                      <div v-if="state.hasError">
                        <ErrorMessage :errMessage="state.errMessage" />
                      </div>

                      <div v-else class="delay-500">
                        <slot 
                            :request="request"
                            :channel="channel"
                            :state="state"
                        />
                        
                      </div>
                    </div>
                  </Transition>

                </DialogPanel>
              </div>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<style scoped>

.delay-500 {
  opacity: 0;
  animation: delay 0.5s linear 0.5s forwards;
}

@keyframes delay {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

</style>