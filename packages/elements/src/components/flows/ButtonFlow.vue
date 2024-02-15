<script setup lang="ts">
import { Ref, inject, nextTick, ref } from 'vue';
import { 
  ElementEventEmitter, 
  ElementOptions, 
  LoginRequestIntent, 
  PaymentRequestIntent
} from '@code-wallet/library';
import { EventChannel, InternalEvents } from '@code-wallet/events';
import * as code from "@code-wallet/client";

import { 
  IntentRequestButton,
  IntentRequestModalDesktop,
  IntentRequestModalMobile,
} from '../elements';

import {
  PreloadIntentRequestModalDesktop,
  PreloadIntentRequestModalMobile,
} from '../preload';

import { isMobileDevice } from '../../utils/user-agent';
import { getURLParam } from '../../utils/url';

const fadeDuration = 500; // Animation duration in milliseconds (we use this to delay emitting events)
const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));
const options = inject<ElementOptions>('options');
const sdkEmit = inject<ElementEventEmitter>('emit', async () => false);
const channel : Ref<EventChannel<InternalEvents> | null> = ref(null);
const intent = ref<string | null>(null);
const open = ref(false);
const mobile = isMobileDevice();

// We're going to try to guess these values later, so we have to keep track of
// whether or not the user has provided them before we do that.
const userProvidedSuccessUrl = options?.confirmParams?.success?.url !== undefined;
const userProvidedCancelUrl = options?.confirmParams?.cancel?.url !== undefined;

function canMount() {
  if (options) {
    if (options.mode === 'payment') {
      return options.amount && options.currency && options.destination;
    }
    if (options.mode === 'login') {
      return options.login && options.login.domain;
    }
  }

  return false;
}

function onChannelCreated(val: EventChannel<InternalEvents>) {
  channel.value = val;
}

async function onInvoke() {
  open.value = true;

  // Wait for the modal to be mounted, this is necessary because we need to wait
  // for the iframe to be mounted before we can get the channel for it.
  await nextTick();

  if (!options) { throw new Error('Missing options'); }
  if (!channel.value) { throw new Error('Missing channel'); }

  // Let the iframe know that we're about to invoke user code
  channel.value.emit('beforeInvoke');

  // Invoke user code, if the user returns true, we'll cancel the invocation
  const preventAction = await sdkEmit('invoke');
  if (preventAction) {
    open.value = false;
    return;
  }

  // Get the intent id from the receiving app or iframe
  if (options.mode === 'payment') {
    intent.value = new PaymentRequestIntent(options).getIntentId();
  } else {
    intent.value = new LoginRequestIntent(options).getIntentId();
  }

  const variables = {
    INTENT_ID: intent.value,
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
}

async function onSuccess() {
  open.value = false;

  // Ensure that the modal is fully closed before emitting events
  await sleep(fadeDuration); 

  const url = options?.confirmParams?.success?.url;
  const preventAction = await sdkEmit('success', { url, options, intent: intent.value });
  if (preventAction) {
    return;
  }

  if (userProvidedSuccessUrl) {
    window.location.href = url!;
  }
}

async function onCancel() {
  open.value = false;

  // Ensure that the modal is fully closed before emitting events
  await sleep(fadeDuration);

  const url = options?.confirmParams?.cancel?.url;
  const preventAction = await sdkEmit('cancel', { url, options, intent: intent.value });
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
  open.value = false;
  await onError('stream_timed_out');
}

async function onStreamClosed() {
  open.value = false;
  await onError('stream_closed');
}

// Add an event listener for the 'visibilitychange' event
document.addEventListener("visibilitychange", async () => {
  if (document.visibilityState === "visible") {
    if (!intent.value) { return; }

    // Background tabs that might miss the 'intent-submitted' event, so we need
    // to check if the intent has been confirmed when the tab becomes visible.
    const { status } = await code.paymentIntents.getStatus({ intent: intent.value }); 

    if (status === 'confirmed') {
      onSuccess();
    }
  }
});
</script>

<template>
  <template v-if="canMount()">
    <IntentRequestButton 
      @invoke="onInvoke" />
    
    <Teleport to="body">
      <div v-if="open">
        <IntentRequestModalMobile
          v-if="mobile"
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
          @channel-created="onChannelCreated"
          @intent-submitted="onSuccess"
          @client-rejected-payment="onCancel"
          @client-rejected-login="onCancel"
          @error="onError"
          @stream-timeout="onStreamTimeout"
          @stream-closed="onStreamClosed"
        />
      </div>
      <div v-else>
        <PreloadIntentRequestModalMobile v-if="mobile" />
        <PreloadIntentRequestModalDesktop v-else />
      </div>
    </Teleport>
  </template>
</template>
