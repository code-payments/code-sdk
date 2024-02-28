<script setup lang="ts">
    import { ElementOptions, encode } from '@code-wallet/intents';
    import { useConfig } from '../../config';
    import { inject, ref } from 'vue';

    const config = useConfig();
    const options = inject<ElementOptions>('options');
    const mode = options?.mode ?? 'payment';
    const url = `${config.codeSdk()}/${mode}-request-modal-desktop/#/preload/p=${encode(options)}`;
    const el = ref<HTMLIFrameElement | null>(null);

    function getStyle() : { [key:string]: string } {
        const _ = (v:string) => v + ' !important';
        return {
            opacity: _('0'),
            visibility: _('hidden'),
            position: _('absolute'),
            top: _('-1px'),
            left: _('-1px'),
            zIndex: _('-1'),
            width: _('1px'),
            height: _('1px'),
        }
    }
</script>

<template>
    <iframe ref="el" :src="url"
        frameborder="0" 
        allowTransparency="true" 
        scrolling="no" 
        name="preload-payment-request-card" 
        referrerpolicy="no-referrer" 
        :style="getStyle()"
    ></iframe>
</template>