# Element Appearance

Depending on the design of your website or app, you may want to change the appearance of elements created by the SDK.

With the SDK, you can provide an `appearance` object to the element constructor. This can be used to change the appearance of the element.

```js{7}
import code from 'https://js.getcode.com/v1';

const { button } = code.elements.create('button', {
  currency: 'usd',
  destination: 'E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR',
  amount: 0.05,
  appearance: 'light', // or 'dark'
});

button.mount('#button-container');
```
