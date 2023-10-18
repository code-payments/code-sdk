# Browser Events

Sometimes you may want to know when a payment has been made within the current browser tab. With the SDK, you can do this by listening to events on the element. 

However, the use of `success` and `cancel` URLs is recommended as a fallback for when the browser events don't come through. See the [confirmation URLs](#confirmation-urls) section.


::: warning
It is best practice to not rely on browser based events, as they can be tampered with or may not come through at all (eg: network outages). Instead, you can ask the Code Sequencer to notify you of events using a [webhook](../reference/webhook). 

Additionally, the `success` and `cancel` events may not be triggered on mobile devices. See [Payment Requests](../intents/payment-requests#mobile-vs-desktop-flows) for more information.
:::


## How it works

When you create an element, you can attach custom event handlers to it.

```js [client-side]
import code from 'https://js.getcode.com/v1';

const { button } = code.elements.create('button', { ... });

button.on('success', async (event) => {
    // Handle successful payment, the intent ID will be provided in the event object
    // return true; // Return true to prevent the browser from navigating to the optional success URL provided in the confirmParams
});

button.on('cancel', async (event) => {
    // Handle cancelled payment, the intent ID will be provided in the event object
    // return true; // Return true to prevent the browser from navigating to the optional cancel URL provided in the confirmParams
});

button.mount('#button-container');
```

## Confirmation URLs

In addition to event handlers, you can provide optional `success` and `cancel` URLs in the `confirmParams` object.

These URLs will be used to redirect the user to a success or cancel page once the payment has been made or cancelled. You can also use these URLs to gate content on your website. For example, you can redirect the user to a success page once the payment has been made.

```js{7,8} [client-side]
import code from 'https://js.getcode.com/v1';

const { button } = code.elements.create('button', {
    ...

    confirmParams: {
        success: { url: 'https://example.com/success/{{INTENT_ID}}', },
        cancel: { url: 'https://example.com/cancel', },
    },
});

button.mount('#button-container');
```

Both the `success` and `cancel` urls can contain a special `INTENT_ID` variable, which will be automatically replaced with the intent ID once the payment has been made or cancelled. You can use this on your server to verify the intent status.

::: info Note
These are optional but encouraged, especially on mobile devices where the `success` event may not be triggered. You can learn more about the differences between desktop and mobile flows on the [Payment Requests](../intents/payment-requests#mobile-vs-desktop-flows) page.
:::

The full example code can be found on [GitHub](https://github.com/code-wallet/code-sdk/tree/main/examples/4-minimal-with-webhook).
