import * as UserAgent from './detect';
import { EventChannel, InternalEvents } from "@code-wallet/events";

export function getAppStoreUrl() {
    var url: string;

    if (UserAgent.iOS() || UserAgent.Safari() || !UserAgent.Android()) {
        // Apple App Store URL
        url = 'https://apps.apple.com/us/app/code-wallet/id1562384846';
    } else {
        // Google Play Store URL
        url = 'https://play.google.com/store/apps/details?id=com.getcode';
    }

    return url;
}

export function openInAppStore(channel: EventChannel<InternalEvents>) {
    const url = getAppStoreUrl();
    channel.emit('navigate', { url });
}

export function getAppUrl(payload: string) {
    const base = window.location.href.replace(/https?:\/\//, "codewallet://");
    return base.replace(/p=([^&]+)/, `p=${payload}`);
}

export function openInApp(channel: EventChannel<InternalEvents>, payload: string, delay: number = 0) {
    setTimeout(() => {
        const url = getAppUrl(payload);
        channel.emit('navigate', { url });
    }, delay);
}

export function hasCodeApp() {
    return localStorage.getItem('codewallet:hasApp') === 'true';
}

export function setHasCodeApp() {
    localStorage.setItem('codewallet:hasApp', 'true');
}