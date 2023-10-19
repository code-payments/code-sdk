# React Example

This example shows how to use the Code SDK with React and TypeScript.

First, lets create a new React project:

```bash
npx create-react-app my-react-ts-app --template typescript
```

::: info
You should be able to run the project with `npm start` and see the default React page.
:::

## Payment Request

Once you have a React project, install the Code elements package:

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

Now, use the `useEffect` hook to create the button when the container component is mounted.

```tsx
import React, { useEffect, useRef } from 'react';
import code from '@code-wallet/elements';

function App() {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { button } = code.elements.create('button', {
      currency: 'usd',
      destination: 'E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR',
      amount: 0.05,
    });

    button.mount(el.current!);
  }, []);

  return (
    <div className="App">
      <div ref={el} />
    </div>
  );
}
```

This snippet creates a payment button that looks like this:

<div id="button-container"></div>