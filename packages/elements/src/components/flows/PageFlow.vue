<script setup lang="ts">
import { Ref, inject, nextTick, onMounted, reactive, ref } from 'vue';
import { 
  ElementEventEmitter, 
  ElementOptions, 
  ExternalPlatformOptions, 
  LoginRequestIntent, 
  LoginRequestOptions, 
  PaymentRequestIntent,
  PaymentRequestOptions,
  TipRequestIntent
} from '@code-wallet/intents';
import { EventChannel, InternalEvents } from '@code-wallet/events';
import * as code from "@code-wallet/client";

import { 
  IntentRequestModalDesktop,
  IntentRequestModalMobile,
} from '../elements';

import { isMobileDevice } from '../../utils/user-agent';
import { getURLParam } from '../../utils/url';
import { sleep } from '../../utils/delay';

const fadeDuration = 500; // Animation duration in milliseconds (we use this to delay emitting events)

const options = inject<ElementOptions>('options');
const sdkEmit = inject<ElementEventEmitter>('emit', async () => false);
const channel : Ref<EventChannel<InternalEvents> | null> = ref(null);

const state = reactive({
  intent: null as string | null,
  mobile: isMobileDevice(),
});

// We're going to try to guess these values later, so we have to keep track of
// whether or not the user has provided them before we do that.
const userProvidedSuccessUrl = options?.confirmParams?.success?.url !== undefined;
const userProvidedCancelUrl = options?.confirmParams?.cancel?.url !== undefined;

function canMount() {
  if (options) {
    switch (options.mode) {
      case 'login':
        return options.login && options.login.domain;
      case 'payment':
        return options.amount && options.currency && options.destination;
      case 'tip':
        return options.platform && options.platform.name && options.platform.username;
      default:
        return false;
    }
  }

  return false;
}

function onChannelCreated(val: EventChannel<InternalEvents>) {
  channel.value = val;
}

async function onSuccess() {

  // Ensure that the modal is fully closed before emitting events
  await sleep(fadeDuration); 

  const url = options?.confirmParams?.success?.url;
  const preventAction = await sdkEmit('success', { url, options, intent: state.intent });
  if (preventAction) {
    return;
  }

  if (userProvidedSuccessUrl) {
    window.location.href = url!;
  }
}

async function onCancel() {

  // Ensure that the modal is fully closed before emitting events
  await sleep(fadeDuration);

  const url = options?.confirmParams?.cancel?.url;
  const preventAction = await sdkEmit('cancel', { url, options, intent: state.intent });
  if (preventAction) {
    return;
  }

  if (userProvidedCancelUrl) {
    window.location.href = url!;
  }
}

async function onError(err: any) {
  // Let the user know that something went wrong
  await sdkEmit('error', { message: `${err}` });
}

async function onStreamTimeout() {
  await onError('stream_timed_out');
}

async function onStreamClosed() {
  await onError('stream_closed');
}

onMounted(async () => {
  if (!options) { throw new Error('Missing options'); }
  if (!channel.value) { throw new Error('Missing channel'); }

  // Let the iframe know that we're about to invoke user code
  channel.value.emit('beforeInvoke');

  // Invoke user code, if the user returns true, we'll cancel the invocation
  const preventAction = await sdkEmit('invoke');
  if (preventAction) {
    return;
  }

  // Get the intent id from the receiving app or iframe
  switch (options.mode) {
    case 'login':
      state.intent = new LoginRequestIntent(options as ElementOptions & LoginRequestOptions).getIntentId();
      break;
    case 'payment':
      state.intent = new PaymentRequestIntent(options as ElementOptions & PaymentRequestOptions).getIntentId();
      break;
    case 'tip':
      state.intent = new TipRequestIntent(options as ElementOptions & ExternalPlatformOptions).getIntentId();
      break;
    default:
      throw new Error('Invalid mode');
  }

  const variables = {
    INTENT_ID: state.intent,
    // ...
  }

  // If the user doesn't provide a success or cancel url, we'll fallback to the
  // current url (if possible). Additionally, we'll replace any variables in the
  // url. For example, if the user provides a success url of
  // https://example.com/success?intent_id={{INTENT_ID}}, we'll replace
  // {{INTENT_ID}} with the actual intent id.
  const fallback = window.location.href;
  options.confirmParams = {
    success: getURLParam(options.confirmParams?.success, fallback, variables),
    cancel: getURLParam(options.confirmParams?.cancel, fallback, variables),
  };

  // Wait for the options to be injected into the iframe
  await nextTick();

  // It is possible that the user has already closed the modal before we get to
  // this point, so we need to check if the modal is still open.
  if (!channel.value) { throw new Error('Missing channel'); }

  // Let the iframe know that we're done invoking user code
  channel.value.emit('afterInvoke');
});

// Add an event listener for the 'visibilitychange' event
document.addEventListener("visibilitychange", async () => {
  if (document.visibilityState === "visible") {
    if (!state.intent) { return; }

    // Background tabs that might miss the 'intent-submitted' event, so we need
    // to check if the intent has been confirmed when the tab becomes visible.
    const { status } = await code.paymentIntents.getStatus({ intent: state.intent }); 

    if (status === 'confirmed') {
      onSuccess();
    }
  }
});
</script>

<template>
  <template v-if="canMount()">
    <Teleport to="body">
      <IntentRequestModalMobile
        v-if="state.mobile"
        :as-page="true"
        @channel-created="onChannelCreated"
        @intent-submitted="onSuccess"
        @client-rejected-payment="onCancel"
        @client-rejected-login="onCancel"
        @error="onError"
        @stream-timeout="onStreamTimeout"
        @stream-closed="onStreamClosed"
      />

      <IntentRequestModalDesktop
        v-else
        :as-page="true"
        @channel-created="onChannelCreated"
        @intent-submitted="onSuccess"
        @client-rejected-payment="onCancel"
        @client-rejected-login="onCancel"
        @error="onError"
        @stream-timeout="onStreamTimeout"
        @stream-closed="onStreamClosed"
      />
    </Teleport>
  </template>
</template>
