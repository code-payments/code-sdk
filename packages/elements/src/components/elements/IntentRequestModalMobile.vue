<script setup lang="ts">
    import { EventChannel, InternalEvents } from '@code-wallet/events';
    import { ElementOptions, encode } from '@code-wallet/intents';
    import { useConfig } from '../../config';
    import { inject, onMounted, ref, watchEffect } from 'vue';

    const config = useConfig();
    const options = inject<ElementOptions>('options');
    const mode = options?.mode ?? 'payment';

    const props = defineProps<{
        asPage?: boolean,
    }>();

    const emit = defineEmits([
        'codeScanned',
        'clientRejectedPayment',
        'clientRejectedLogin',
        'intentSubmitted',
        'channelCreated',
        'error',
        'streamTimeout',
        'streamClosed',
    ]);

    const channel = new EventChannel<InternalEvents>();
    const kind = props.asPage ? 'page' : 'modal';
    const url = `${config.codeSdk()}/${mode}-request-${kind}-mobile/#/${channel.id}/p=${encode(options)}`;
    const el = ref<HTMLIFrameElement | null>(null);

    channel.on('codeScanned' , () => { emit('codeScanned'); });
    channel.on('clientRejectedPayment' , () => { emit('clientRejectedPayment'); });
    channel.on('clientRejectedLogin' , () => { emit('clientRejectedLogin'); });
    channel.on('intentSubmitted' , () => { emit('intentSubmitted'); });

    channel.on('navigate' , (event) => {
        if (!event.url) { return; }
        window.location.href = event.url;
    });

    // Error states
    channel.on('error' , (err) => {
        if (`${err}`.includes('NGHTTP2_INTERNAL_ERROR')) {
            console.warn('CodeSDK: GRPC stream closed.');
            emit(`streamClosed`);
        } else {
            console.error(`CodeSDK: ${err}`);
            emit('error', err);
        }
    });
    channel.on('streamTimeout' , () => {
        console.warn('CodeSDK: Websocket Stream timeout.');
        emit('streamTimeout');
    });
    channel.on('streamClosed' , () => {
        console.warn('CodeSDK: Websocket Stream closed.');
        emit('streamClosed');
    });

    onMounted(() => {
        if (!el.value) { return; }

        channel.setTargetWindow(el.value);
        emit('channelCreated', channel);
    })

    watchEffect(() => {
        const { clientSecret, idempotencyKey, confirmParams } = options ?? {};

        if (clientSecret) {
            channel.emit('updatedClientSecret', { value: clientSecret });
        }

        if (idempotencyKey) {
            channel.emit('updatedIdempotencyKey', { value: idempotencyKey });
        }

        if (confirmParams) {
            if (confirmParams.success?.url) {
                channel.emit('updatedSuccessUrl', { value: confirmParams.success.url });
            }
            if (confirmParams.cancel?.url) {
                channel.emit('updatedCancelUrl', { value: confirmParams.cancel.url });
            }
        }
    });

    function getStyle() : { [key:string]: string } {
        const _ = (v:string) => v + ' !important';
        const inset = { inset: _('0'), top: _('0'), left: _('0'), right: _('0'), bottom: _('0'), }
        return {
            ...inset,
            position: _('fixed'),
            zIndex: _('2147483647'),
            overflow: _('hidden'),
            width: _('100dvw'),
            height: _('100dvh'),
            // We have to set this to make sure the iframe stays transparent.
            // Completely counter-intuitive.
            // https://bugs.chromium.org/p/chromium/issues/detail?id=1150352
            colorScheme: _('light'),
        }
    }
</script>

<template>
    <iframe ref="el" :src="url"
        frameborder="0" 
        allowTransparency="true" 
        scrolling="no" 
        name="payment-request-card" 
        referrerPolicy="no-referrer" 
        :style="getStyle()"
    ></iframe>
</template>