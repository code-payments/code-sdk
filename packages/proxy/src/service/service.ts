import { CallOptions, } from '@bufbuild/connect';
import { 
  MethodInfoBiDiStreaming,
  MethodInfoClientStreaming,
  MethodInfoServerStreaming,
  MethodInfoUnary,
  PartialMessage,
} from "@bufbuild/protobuf";
import * as proto from '@code-wallet/rpc';

export type ServiceName = keyof typeof proto.Services;
export type MethodNames<S> = S extends keyof typeof proto.Services ? keyof typeof proto.Services[S]['methods'] : never;
export type MethodName = MethodNames<ServiceName>;

export type UnaryMethod<T> = T extends MethodInfoUnary<infer I, infer O>
  ? (request: PartialMessage<I>, options?: CallOptions) => Promise<O>
  : never;

export type ServerStreamingMethod<T> = T extends MethodInfoServerStreaming<infer I, infer O>
  ? (request: PartialMessage<I>, options?: CallOptions) => AsyncIterable<O>
  : never;

export type ClientStreamingMethod<T> = T extends MethodInfoClientStreaming<infer I, infer O>
  ? (request: AsyncIterable<PartialMessage<I>>, options?: CallOptions) => Promise<O>
  : never;

export type BiDiStreamingMethod<T> = T extends MethodInfoBiDiStreaming<infer I, infer O>
  ? (request: AsyncIterable<PartialMessage<I>>, options?: CallOptions) => AsyncIterable<O>
  : never;

