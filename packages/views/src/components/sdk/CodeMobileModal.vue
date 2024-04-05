<script setup lang="ts">
import { ref, onMounted, onUnmounted, reactive } from 'vue';
import { XMarkIcon } from '@heroicons/vue/20/solid';
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { EventChannel, InternalEvents } from "@code-wallet/events";
import { openInApp, setHasCodeApp, sleep, hasCodeApp } from "../../utils";
import { 
  CodeRequest, 
  CodeRequestFromPayload, 
  LoginRequest, 
  CodeRequestWithMessage
} from "../../requests";
import { CodeSpinner, ErrorMessage } from '../common';

const props = defineProps<{
  createRequest: CodeRequestFromPayload;
  id: string;
  payload: string;
  asPage?: boolean;
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
  hasApp: hasCodeApp(),
  hasRejected: false,
  hasCompletedIntent: false,

  hasError: false,
  errMessage: "",

  isOpen: true,
  isDelaying: hasCodeApp(),
  isLoading: true,
});

channel.on([ 'error', 'streamTimeout', 'streamClosed' ] , (msg) => { 
  state.hasError = true;
  state.errMessage = `${msg}`;
});

channel.on(['clientRejectedLogin', 'clientRejectedPayment'], () => {
  state.hasRejected = true; 
});

channel.on("intentSubmitted", () => { 
  state.hasCompletedIntent = true; 
  setHasCodeApp(); 
});

channel.on("beforeInvoke", () => {
  state.isLoading = true;
  state.isDelaying = true;
});

channel.on("afterInvoke", async () => {
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

  if (request.value.hasMessage()) {
    const reqWithMessage = request.value as CodeRequestWithMessage;

    // intentionally ignoring the await here
    reqWithMessage.openStream(channel);
  }

  // If we know the user has the app, then give the system prompt asking them if
  // they want to open the app, wait 5 seconds, then show the modal content
  // underneath the system prompt. Unfortunately, there is no way to know if the
  // user has clicked on the system prompt, so we choose 5 seconds arbitrarily
  // here as a value that is long enough for a user action. Worst case, they
  // don't have the app and see the spinner for 1-4 seconds (which we don't
  // expect will happen).

  if (state.hasApp && !state.hasError) {
    openInApp(channel, request.value.toPayload());
    await sleep(5000);
  } 

  state.isDelaying = false;
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
    request.value.generateKikCode()
  }
});

onUnmounted(() => {
  if (request.value && request.value.hasMessage()) {
    const reqWithMessage = request.value as CodeRequestWithMessage;
    reqWithMessage.closeStream();
  }
});

function onClose () {
  if (props.asPage) {
    return;
  }

  state.isOpen = false;

  if (request.value.hasMessage()) {
    const reqWithMessage = request.value as CodeRequestWithMessage;
    reqWithMessage.closeStream();
  }

  // Wait for the modal to close before emitting the event
  setTimeout(() => { 
    if (request.value instanceof LoginRequest) {
      channel.emit('clientRejectedLogin')
    } else {
      channel.emit('clientRejectedPayment')
    }
  }, 800);
}
</script>

<template>
  <div ref="el">
    <TransitionRoot as="template" :show="state.isOpen">
      <Dialog as="div" class="relative z-10" @close="onClose" :initialFocus="elFocusOn">

        <TransitionChild as="template" enter="duration-[0ms]" enter-from="opacity-0" enter-to="opacity-100"
          leave="duration-[800ms]" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 transition-opacity backdrop-blur-sm bg-[#0f0c1f]" />
        </TransitionChild>

        <div class="fixed inset-0 z-10 overflow-y-auto">

          <TransitionChild v-if="!asPage" as="template" enter="duration-[800ms]" enter-from="opacity-0" enter-to="opacity-100"
            leave="duration-[800ms]" leave-from="opacity-100" leave-to="opacity-0">
            <button @click="onClose" type="button"
              class="absolute right-2 top-2 flex h-14 w-14 items-center justify-center rounded-full z-100">
              <XMarkIcon class="h-9 w-9 text-white" aria-hidden="true" />
            </button>
          </TransitionChild>

          <div class="grid h-screen place-items-center">
            <TransitionChild as="template" enter="duration-[800ms]"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100" leave="duration-[800ms]"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">

              <div class="text-center font-avenir-next-bold py-[100px]">

                <DialogPanel class="relative transform  transition-all w-full max-w-4xl p-6 mx-auto">

                  <div class="max-w-md m-auto" ref="elFocusOn">

                    <div v-if="state.hasError">
                      <ErrorMessage :errMessage="state.errMessage" />
                    </div>

                    <div v-else>
                        <div v-if="state.isDelaying">
                        <span class="absolute left-1/2 -translate-x-1/2 pt-1">
                            <CodeSpinner />
                        </span>
                        </div>

                        <div v-else>
                            <slot 
                                :request="request"
                                :channel="channel"
                                :state="state"
                            />
                        </div>
                    </div>

                  </div>

                </DialogPanel>

              </div>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>

</template>
