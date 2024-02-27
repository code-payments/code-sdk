<script setup lang="ts">
    import { inject, onMounted, ref } from 'vue';
    import { useConfig } from '../../config';
    import { EventChannel, InternalButtonEvents, InternalElementEvents } from '@code-wallet/events';
    import { ElementOptions, encode } from '@code-wallet/intents';

    const config = useConfig();
    const options = inject<ElementOptions>('options');
    const mode = options?.mode ?? 'payment';

    const emit = defineEmits<{
        resize: [{ width: number, height: number }];
        invoke: [ undefined ];
    }>();

    const channel = new EventChannel<InternalElementEvents & InternalButtonEvents>();
    const url = `${config.codeSdk()}/${mode}-request-button/#/${channel.id}/p=${encode(options)}`;

    console.log('url', url);

    const el = ref<HTMLIFrameElement | null>(null);
    const frameWidth = ref(0);
    const frameHeight = ref(0);

    onMounted(() => {
        if (!el.value) return;

        channel.on('resize', (args: { width: number, height: number }) => {
            const { width, height } = args;

            if (!el.value) return;
            frameWidth.value = width;
            frameHeight.value = height;
        });

        channel.on('invoke', () => {
            emit('invoke', undefined);
        });
    });

    function getStyle() : { [key:string]: string } {
        const _ = (v:string) => v + ' !important';
        return {
            display: _('inline-block'),
            width: _('222px'),
            height: _('60px'),
            // We have to set this to make sure the iframe stays transparent.
            // Completely counter-intuitive.
            // https://bugs.chromium.org/p/chromium/issues/detail?id=1150352
            colorScheme: _('light'),
        }
    }
    
</script>

<template>
    <iframe ref="el" :src="url"
        :width="frameWidth"
        :height="frameHeight"
        frameborder="0" 
        allowtransparency="true" 
        scrolling="no"
        name="payment-request-button" 
        referrerpolicy="no-referrer" 
        :style="getStyle()"
    ></iframe>
</template>