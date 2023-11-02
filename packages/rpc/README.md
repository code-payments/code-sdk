[![npm][npm-image]][npm-url]
[![npm-downloads][npm-downloads-image]][npm-url]

[npm-downloads-image]: https://img.shields.io/npm/dt/@code-wallet/rpc.svg?style=flat
[npm-image]: https://img.shields.io/npm/v/@code-wallet/rpc.svg?style=flat
[npm-url]: https://www.npmjs.com/package/@code-wallet/rpc.svg

# @code-wallet/rpc
This module provides a convenient way to wrap gRPC protocol
messages into envelopes that can be seamlessly transmitted through a WebSocket
proxy server. This package aids in the creation of WebSocket RPC streams for
unary or bi-directional streaming gRPC methods. Additionally, this package
includes the Code RPC protocol.

Learn more about Code at https://getcode.com. See the [docs](https://code-wallet.github.io/code-sdk/docs) for more information.

## Features
This package wraps messages in envelopes that can be transmitted through a
WebSocket proxy server. It also provides support for unary and bi-directional
gRPC method streams. The streams can be server side or client side only streams
as well.

Unlike other solutions, for example,
gRPC-web or [connect-es](https://github.com/connectrpc/connect-es/blob/05603aba01d0f004e0e3f2ed78701882c706902e/packages/connect-web/src/grpc-web-transport.ts#L117-L118),
this package supports bidi streams by using web-sockets instead of
HTTP/2 or
[Fetch](https://github.com/connectrpc/connect-es/blob/05603aba01d0f004e0e3f2ed78701882c706902e/packages/connect-web/src/grpc-web-transport.ts#L301).

## Getting Started
This package is not designed to be used directly by developers, but rather as a
dependency for other packages within the Code SDK.

To install the module, you can use npm or yarn:
    
```bash 
npm install @code-wallet/rpc
```

## Usage

Here's a basic unary method example:

```typescript
import * as proto from '@code-wallet/rpc';

// Create a unary method stream for sending messages
const msgSend = await proto.RpcStream.createUnaryMethod(proto.Messaging, "sendMessage", config.wsPath());

// Use the unary method stream to send a message
const res = await msgSend(req);

if (res.result != proto.SendMessageResponse_Result.OK) {
    // Handle message sending failure
    return;
}
```

Here's a basic bi-directional stream example:

```typescript
// Create a bi-directional stream for opening message streams with event handlers
const msgStream = await proto.RpcStream.create(proto.Messaging, "openMessageStream", config.wsPath(), {
    onClose: () => {
        // Handle WebSocket stream closure
    },
    onError: (err: any) => {
        // Handle errors
    },
});

// Use the bi-directional stream
msgStream.write(new proto.OpenMessageStreamRequest({
    rendezvousKey: new proto.RendezvousKey({
        value: rendezvousKeypair.publicKey,
    }),
}));

for await (const [res, err] of msgStream.read()) {
    // Handle streamed responses and errors
}
```
