import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const useConfig = () => {

    if (!process.env.PORT) {
        throw new Error('Missing PORT environment variable');
    }

    if (!process.env.STORE_ACCOUNT) {
        throw new Error('Missing STORE_ACCOUNT environment variable');
    }

    if (!process.env.WEBHOOK_URL) {
        throw new Error('Missing WEBHOOK_URL environment variable');
    }

    if (!process.env.CODE_SEQUENCER_PUBLIC_KEY) {
        throw new Error('Missing CODE_SEQUENCER_PUBLIC_KEY environment variable');
    }

    const config = {
        port: parseInt(process.env.PORT, 10),
        storeAccount: process.env.STORE_ACCOUNT,
        webhookURL: process.env.WEBHOOK_URL,
        codeSequencerPublicKey: process.env.CODE_SEQUENCER_PUBLIC_KEY,
    };

    return config;
};