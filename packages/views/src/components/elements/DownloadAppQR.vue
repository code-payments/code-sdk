<script lang="ts" setup>
import QRCode from 'qrcode';
import { onMounted, ref } from 'vue';
import { Keypair } from '@solana/web3.js';
import { useConfig } from '../../config';

const emit = defineEmits([ 'complete', ]);
const qrDownloadLink = ref<string | undefined>();
const qrShow = ref(false);

const getDownloadImage = async (id: string) => {
    const config = useConfig();
    const url = config.httpPath() + "/download/" + encodeURIComponent(id);
    return await QRCode.toDataURL(url);
}

const isDownloadDone = async (id: string) => {
    const config = useConfig();
    const url = config.httpPath() + "/download/" + encodeURIComponent(id) + "/status";
    const res = await fetch(url);
    const data = await res.json();
    const done = (data.status === "completed" || data.status === "expired")

    return done;
}

const showDownloadImage = async () => {
    if (qrShow.value) {
        qrShow.value = false;
        return;
    }

    const randId = Keypair.generate().publicKey.toBase58().substring(0, 7)
    qrDownloadLink.value = await getDownloadImage(randId);

    const intervalId = setInterval(async () => {
        if (!qrShow.value || await isDownloadDone(randId)) {
            clearInterval(intervalId);
            qrShow.value = false;
            emit('complete');
        };
    }, 400);

    qrShow.value = true;
}

onMounted(() => {
    showDownloadImage();
});

</script>

<template>
    <div v-if="qrShow" class="text-center">
        <div
            class="text-white text-[1.4vh] text-center leading-tight font-medium font-avenir-next-bold">
            Scan this QR code with your phone’s camera to download the Code Wallet app
        </div>

        <div class="mt-5 flex items-center justify-center">
            <img :src="qrDownloadLink" class="w-[16vh] h-[16vh]" />
        </div>
    </div>
</template>
