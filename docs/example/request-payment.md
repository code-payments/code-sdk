# Minimal Example

Use the following example to create a payment button that you can embed in your website or application. This example is client-side only, and does not verify the payment on your server. 

::: info
If you need to verify the payment on your server, see the [Payment Verification](./payment-verification) example.
:::

## Payment Request

The full example code can be found on [GitHub](https://github.com/code-payments/code-sdk/tree/main/examples/1-minimal).

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code SDK - Example/1-minimal</title>
</head>

<body>
    <div id="button-container"></div>

    <script type="module">
        import code from 'https://js.getcode.com/v1';

        const { button } = code.elements.create('button', {
            currency: 'usd',
            amount: 0.05, // The minimum amount is $0.05 USD or equivalent in other currencies
            destination: 'E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR',
        });

        button.on('success', () => {
            alert('Thank you!');
        });

        button.mount('#button-container');
    </script>
</body>

</html>

```

This snippet creates a payment button that looks like this:

<div id="button-container"></div>
