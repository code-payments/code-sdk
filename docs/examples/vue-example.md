# Vue Example

This example shows how to use the Code SDK with Vue, Vite, and TypeScript. 


First, lets create a new Vue project:

```bash
npm create vite@latest
```

Select `Vue` and `TypeScript` when prompted.

::: info
You should be able to run the project with `npm run dev` and see the default Vue page.
:::


## Payment Request

Once you have a Vue project, install the Code elements package:

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

Now, use the `onMounted` hook to create the button when the container component is mounted.

```vue
<script setup lang="ts">
import code from '@code-wallet/elements';
import { onMounted, ref } from 'vue'

const el = ref();

onMounted(() => {
  const { button } = code.elements.create('button', {
    currency: 'usd',
    destination: 'E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR',
    amount: 0.05,
  });

  button.mount(el.value);
})
</script>

<template>
  <div ref="el"></div>
</template>
```

This snippet creates a payment button that looks like this:

<div id="button-container"></div>