<img width="1280" alt="Code SDK" src="https://github.com/code-payments/code-sdk/assets/623790/78166c02-1d24-49b0-ae95-13f5aaff15b2">

# Code SDK

[![npm][npm-image]][npm-url]
[![npm-downloads][npm-downloads-image]][npm-url]
![license][license-image]

[npm-downloads-image]: https://img.shields.io/npm/dt/@code-wallet/elements?style=flat
[npm-image]: https://img.shields.io/npm/v/@code-wallet/elements?style=flat
[npm-url]: https://www.npmjs.com/package/@code-wallet/elements
[license-image]: https://img.shields.io/badge/license-MIT-blue?style=flat

The Code SDK is a set of JavaScript packages that enables any web developer to integrate Code into their website or web app and easily start accepting payments for as little as 5 cents with no sign up required and just a few lines of code.

See the [docs](https://code-payments.github.io/code-sdk/docs/guide/introduction) for more information.

##  What is Code?

[Code](https://getcode.com) is a mobile wallet app that leverages self custodial blockchain technology to deliver a seamless payments experience that is instant, global, and private. 

##  Installation

The Code SDK is available as a set of JavaScript packages on npm, and can be used in both the browser and on the server.

```bash
npm install --worspaces
```

##  Usage

You can build the packages locally using npm or yarn.

```bash
npm run build --workspaces
```

## Contributor Quick Start

First, you'll likely want to run your own [proxy](https://github.com/code-payments/code-sdk/blob/main/packages/proxy/example/index.ts) server. We need a proxy as a
workaround for the browser's lack of support for GRPC traffic. Running your own
proxy is highly recommended as you'll see the interactions between the SDK
elements and the Code services. This is especially useful when you're developing
new elements or views.

The following command will start a local server that proxies GRPC requests over
WebSocket and HTTP/1 envelopes to the Code services. 
    
```bash
cd packages/proxy
npm run dev
```

Next, start the elements and views packages. These are the main packages that
you will be working with. The elements package contains the SDK elements flows
and the views package contains the iframes that are actually embedded into the
website. 

Each of these packages will start a local server that you can use to
test the SDK elements and views.

```bash
cd packages/elements
npm run dev
```

```bash
cd packages/views
npm run dev
```

You can now visit `http://localhost:8760/` to see the elements and views in
action.

Note: Both the elements and views packages assume the proxy is on
`localhost:3000`. If you're running the proxy on a different port, you'll need
to update each package.

## Getting Help

If you have any questions or need help integrating Code into your website or application, please reach out to us on [Discord](https://discord.gg/T8Tpj8DBFp) or [Twitter](https://twitter.com/getcode).

##  Contributing

For now the best way to contribute is to share feedback on [Discord](https://discord.gg/T8Tpj8DBFp). This will evolve as we continue to build out the platform and open up more ways to contribute. 
