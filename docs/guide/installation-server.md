# Server-side Install

While server-side integration is optional, you'll usually want to confirm payment on the server-side. The SDK is split into multiple [packages](./installation#packages), each of which can be installed separately. This allows you to install only the packages you need, and avoid installing unnecessary dependencies.  

::: info ES vs CommonJS
The SDK is available as both a CommonJS module and an ECMAScript module (ESM). The ESM version is recommended for use with bundlers, as it allows bundlers to perform tree-shaking and other optimizations.

Learn more about JavaScript modules [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).
:::


## Installation

::: code-group
```bash [npm]
npm install @code-wallet/client
```

```bash [yarn]
yarn add @code-wallet/client
```

```bash [pnpm]
pnpm add @code-wallet/client
```

```bash [bun]
bun install @code-wallet/client
```
:::

## Quick Start

Once installed, you can import the SDK into your project.

::: code-group
```js [ES Module]
import code from '@code-wallet/client';

const { intent } = code.paymentIntents.create({
    // ...
});
```

```js [CommonJS]
const code = require('@code-wallet/client');

const { intent } = code.paymentIntents.create({
    // ...
});
```
:::

See a minimal server example [here](../example/payment-verification).
