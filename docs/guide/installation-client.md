# Client-side Install (browser)

For use in the browser, you can access the SDK directly at [https://js.getcode.com/v1/](https://js.getcode.com/v1/). However, you can also import the `@code-wallet/elements` package. 


## Installation

```bash [npm]
import code from 'https://js.getcode.com/v1/';
```

If you're using a package manager, you can install the `@code-wallet/elements` package.

::: code-group

```bash [npm]
npm install @code-wallet/elements
```

```bash [yarn]
yarn add @code-wallet/elements
```

```bash [pnpm]
pnpm add @code-wallet/elements
```

```bash [bun]
bun install @code-wallet/elements
```
:::

## Quick Start

::: code-group
```html [Plain HTML]
<script type="module">
    import code from 'https://js.getcode.com/v1';

    const { button } = code.elements.create('button', {
        // ...
    });

    button.mount('#button-container');
</script>
```

```js [ES Module]
import code from '@code-wallet/elements';

const { button } = code.elements.create('button', {
    // ...
});

button.mount('#button-container');
```

```js [CommonJS]
const code = require('@code-wallet/elements');

const { button } = code.elements.create('button', {
    // ...
});

button.mount('#button-container');
```
:::

With this snippet, you can create a payment button that looks like this:

<div id="button-container"></div>

See a minimal example [here](../examples/request-payment).

## Examples 
You can also see the [React](../examples/react-example.md) or [Vue](../examples/vue-example.md) examples for more information.