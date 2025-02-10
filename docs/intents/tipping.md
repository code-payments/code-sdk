---
title: Tipping
description: Learn how to enable tipping flows using the Code SDK.
---

# Tipping

The tipping feature allows users to support other Code Wallet users effortlessly. Whether it's for creators, developers, or community members, enabling tipping adds a layer of engagement and appreciation within your application.

## Tipping Modes

There are two primary modes for implementing tipping:

1. **Button Flow:** Embed a tipping button directly into your website or application.
2. **Dedicated Tipping Page:** Create a standalone page dedicated to tipping activities.

### Button Flow Example

Using the button flow, you can integrate a tipping button that users can interact with to send tips effortlessly.

```js
import code from 'https://js.getcode.com/v1';

const username = 'elonmusk';
const platformName = 'x'; // Alternatively, use 'twitter'

const options = {
  mode: 'tip',
  platform: {
    username,
    name: platformName,
  }
};

const { button } = code.elements.create('button', options);

button.mount('#button-container');
```

#### HTML

```html
<div id="button-container"></div>
```

> **Note:** Ensure that the users have linked their social accounts (e.g., Twitter) to their Code Wallet for tipping to function correctly.

### Dedicated Tipping Page Example

If you prefer a more customized user experience, you can create a dedicated tipping page without embedding a button.

```js
import code from 'https://js.getcode.com/v1';

const options = {
  mode: 'tip',
  platform: {
    username: 'elonmusk',
    name: 'x', // or 'twitter'
  }
};

const { page } = code.elements.create('page', options);
```

#### HTML

```html
<div id="tipping-page-container"></div>
```

With the above script, you can control the user experience more granularly, integrating the tipping flow seamlessly into your application's design.

![Tip Card Illustration](https://github.com/code-payments/code-sdk/assets/623790/766e8c21-041b-4846-89dc-d254414511a2)

### Notes

- **User Account Linking**: Ensure that users link their X/Twitter accounts with their Code Wallets to receive tips successfully.


## Further Reading

- [8-minimal-tip-card](https://github.com/code-payments/code-sdk/tree/main/examples/8-minimal-tip-card)

