// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file micropayment/v1/micro_payment_service.proto (package code.micropayment.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { IntentId, Signature, SolanaAccountId } from "../../common/v1/model_pb";

/**
 * @generated from message code.micropayment.v1.GetStatusRequest
 */
export class GetStatusRequest extends Message<GetStatusRequest> {
  /**
   * @generated from field: code.common.v1.IntentId intent_id = 1;
   */
  intentId?: IntentId;

  constructor(data?: PartialMessage<GetStatusRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.micropayment.v1.GetStatusRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "intent_id", kind: "message", T: IntentId },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetStatusRequest {
    return new GetStatusRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetStatusRequest {
    return new GetStatusRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetStatusRequest {
    return new GetStatusRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetStatusRequest | PlainMessage<GetStatusRequest> | undefined, b: GetStatusRequest | PlainMessage<GetStatusRequest> | undefined): boolean {
    return proto3.util.equals(GetStatusRequest, a, b);
  }
}

/**
 * @generated from message code.micropayment.v1.GetStatusResponse
 */
export class GetStatusResponse extends Message<GetStatusResponse> {
  /**
   * Does the payment request exist?
   *
   * @generated from field: bool exists = 1;
   */
  exists = false;

  /**
   * Has the user scanned the code at least once?
   *
   * @generated from field: bool code_scanned = 2;
   */
  codeScanned = false;

  /**
   * Has the user sumbmitted a payment?
   *
   * @generated from field: bool intent_submitted = 3;
   */
  intentSubmitted = false;

  constructor(data?: PartialMessage<GetStatusResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.micropayment.v1.GetStatusResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "exists", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "code_scanned", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "intent_submitted", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetStatusResponse {
    return new GetStatusResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetStatusResponse {
    return new GetStatusResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetStatusResponse {
    return new GetStatusResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetStatusResponse | PlainMessage<GetStatusResponse> | undefined, b: GetStatusResponse | PlainMessage<GetStatusResponse> | undefined): boolean {
    return proto3.util.equals(GetStatusResponse, a, b);
  }
}

/**
 * @generated from message code.micropayment.v1.RegisterWebhookRequest
 */
export class RegisterWebhookRequest extends Message<RegisterWebhookRequest> {
  /**
   * @generated from field: code.common.v1.IntentId intent_id = 1;
   */
  intentId?: IntentId;

  /**
   * @generated from field: string url = 2;
   */
  url = "";

  constructor(data?: PartialMessage<RegisterWebhookRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.micropayment.v1.RegisterWebhookRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "intent_id", kind: "message", T: IntentId },
    { no: 2, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterWebhookRequest {
    return new RegisterWebhookRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterWebhookRequest {
    return new RegisterWebhookRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterWebhookRequest {
    return new RegisterWebhookRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RegisterWebhookRequest | PlainMessage<RegisterWebhookRequest> | undefined, b: RegisterWebhookRequest | PlainMessage<RegisterWebhookRequest> | undefined): boolean {
    return proto3.util.equals(RegisterWebhookRequest, a, b);
  }
}

/**
 * @generated from message code.micropayment.v1.RegisterWebhookResponse
 */
export class RegisterWebhookResponse extends Message<RegisterWebhookResponse> {
  /**
   * @generated from field: code.micropayment.v1.RegisterWebhookResponse.Result result = 1;
   */
  result = RegisterWebhookResponse_Result.OK;

  constructor(data?: PartialMessage<RegisterWebhookResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.micropayment.v1.RegisterWebhookResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "enum", T: proto3.getEnumType(RegisterWebhookResponse_Result) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterWebhookResponse {
    return new RegisterWebhookResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterWebhookResponse {
    return new RegisterWebhookResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterWebhookResponse {
    return new RegisterWebhookResponse().fromJsonString(jsonString, options);
  }

  static equals(a: RegisterWebhookResponse | PlainMessage<RegisterWebhookResponse> | undefined, b: RegisterWebhookResponse | PlainMessage<RegisterWebhookResponse> | undefined): boolean {
    return proto3.util.equals(RegisterWebhookResponse, a, b);
  }
}

/**
 * @generated from enum code.micropayment.v1.RegisterWebhookResponse.Result
 */
export enum RegisterWebhookResponse_Result {
  /**
   * @generated from enum value: OK = 0;
   */
  OK = 0,

  /**
   * A webhook has already been registered
   *
   * @generated from enum value: ALREADY_REGISTERED = 1;
   */
  ALREADY_REGISTERED = 1,

  /**
   * A request does not exist for the provided intent ID
   *
   * @generated from enum value: REQUEST_NOT_FOUND = 2;
   */
  REQUEST_NOT_FOUND = 2,

  /**
   * A user has already submitted a payment
   *
   * @generated from enum value: INTENT_EXISTS = 3;
   */
  INTENT_EXISTS = 3,

  /**
   * The webhook URL is invalid
   *
   * @generated from enum value: INVALID_URL = 4;
   */
  INVALID_URL = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(RegisterWebhookResponse_Result)
proto3.util.setEnumType(RegisterWebhookResponse_Result, "code.micropayment.v1.RegisterWebhookResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "ALREADY_REGISTERED" },
  { no: 2, name: "REQUEST_NOT_FOUND" },
  { no: 3, name: "INTENT_EXISTS" },
  { no: 4, name: "INVALID_URL" },
]);

/**
 * @generated from message code.micropayment.v1.CodifyRequest
 */
export class CodifyRequest extends Message<CodifyRequest> {
  /**
   * The URL to Codify
   *
   * @generated from field: string url = 1;
   */
  url = "";

  /**
   * ISO 4217 alpha-3 currency code the payment should be made in
   *
   * @generated from field: string currency = 2;
   */
  currency = "";

  /**
   * The amount that should be paid in the native currency
   *
   * @generated from field: double native_amount = 3;
   */
  nativeAmount = 0;

  /**
   * The verified owner account public key
   *
   * @generated from field: code.common.v1.SolanaAccountId owner_account = 4;
   */
  ownerAccount?: SolanaAccountId;

  /**
   * The primary account public key where payment will be sent
   *
   * @generated from field: code.common.v1.SolanaAccountId primary_account = 5;
   */
  primaryAccount?: SolanaAccountId;

  /**
   * The signature is of serialize(CodifyRequest) without this field set using the
   * private key of the owner account. This provides an authentication mechanism
   * to the RPC and can be used to validate payment details.
   *
   * @generated from field: code.common.v1.Signature signature = 6;
   */
  signature?: Signature;

  constructor(data?: PartialMessage<CodifyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.micropayment.v1.CodifyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "currency", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "native_amount", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 4, name: "owner_account", kind: "message", T: SolanaAccountId },
    { no: 5, name: "primary_account", kind: "message", T: SolanaAccountId },
    { no: 6, name: "signature", kind: "message", T: Signature },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CodifyRequest {
    return new CodifyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CodifyRequest {
    return new CodifyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CodifyRequest {
    return new CodifyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CodifyRequest | PlainMessage<CodifyRequest> | undefined, b: CodifyRequest | PlainMessage<CodifyRequest> | undefined): boolean {
    return proto3.util.equals(CodifyRequest, a, b);
  }
}

/**
 * @generated from message code.micropayment.v1.CodifyResponse
 */
export class CodifyResponse extends Message<CodifyResponse> {
  /**
   * @generated from field: code.micropayment.v1.CodifyResponse.Result result = 1;
   */
  result = CodifyResponse_Result.OK;

  /**
   * The URL to view the content with a Code micro paywall
   *
   * @generated from field: string codified_url = 2;
   */
  codifiedUrl = "";

  constructor(data?: PartialMessage<CodifyResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.micropayment.v1.CodifyResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "enum", T: proto3.getEnumType(CodifyResponse_Result) },
    { no: 2, name: "codified_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CodifyResponse {
    return new CodifyResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CodifyResponse {
    return new CodifyResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CodifyResponse {
    return new CodifyResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CodifyResponse | PlainMessage<CodifyResponse> | undefined, b: CodifyResponse | PlainMessage<CodifyResponse> | undefined): boolean {
    return proto3.util.equals(CodifyResponse, a, b);
  }
}

/**
 * @generated from enum code.micropayment.v1.CodifyResponse.Result
 */
export enum CodifyResponse_Result {
  /**
   * @generated from enum value: OK = 0;
   */
  OK = 0,

  /**
   * The URL to Codify is invalid
   *
   * @generated from enum value: INVALID_URL = 1;
   */
  INVALID_URL = 1,

  /**
   * The primary account is invalid
   *
   * @generated from enum value: INVALID_ACCOUNT = 2;
   */
  INVALID_ACCOUNT = 2,

  /**
   * The currency isn't supported for micro payments
   *
   * @generated from enum value: UNSUPPORTED_CURRENCY = 3;
   */
  UNSUPPORTED_CURRENCY = 3,

  /**
   * The payment amount exceeds the minimum/maximum allowed amount
   *
   * @generated from enum value: NATIVE_AMOUNT_EXCEEDS_LIMIT = 4;
   */
  NATIVE_AMOUNT_EXCEEDS_LIMIT = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(CodifyResponse_Result)
proto3.util.setEnumType(CodifyResponse_Result, "code.micropayment.v1.CodifyResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_URL" },
  { no: 2, name: "INVALID_ACCOUNT" },
  { no: 3, name: "UNSUPPORTED_CURRENCY" },
  { no: 4, name: "NATIVE_AMOUNT_EXCEEDS_LIMIT" },
]);

/**
 * @generated from message code.micropayment.v1.GetPathMetadataRequest
 */
export class GetPathMetadataRequest extends Message<GetPathMetadataRequest> {
  /**
   * @generated from field: string path = 1;
   */
  path = "";

  constructor(data?: PartialMessage<GetPathMetadataRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.micropayment.v1.GetPathMetadataRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPathMetadataRequest {
    return new GetPathMetadataRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPathMetadataRequest {
    return new GetPathMetadataRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPathMetadataRequest {
    return new GetPathMetadataRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetPathMetadataRequest | PlainMessage<GetPathMetadataRequest> | undefined, b: GetPathMetadataRequest | PlainMessage<GetPathMetadataRequest> | undefined): boolean {
    return proto3.util.equals(GetPathMetadataRequest, a, b);
  }
}

/**
 * @generated from message code.micropayment.v1.GetPathMetadataResponse
 */
export class GetPathMetadataResponse extends Message<GetPathMetadataResponse> {
  /**
   * @generated from field: code.micropayment.v1.GetPathMetadataResponse.Result result = 1;
   */
  result = GetPathMetadataResponse_Result.OK;

  /**
   * The account where the payment should be sent to
   *
   * @generated from field: code.common.v1.SolanaAccountId destination = 2;
   */
  destination?: SolanaAccountId;

  /**
   * ISO 4217 alpha-3 currency code the payment should be made in
   *
   * @generated from field: string currency = 3;
   */
  currency = "";

  /**
   * The amount that should be paid in the native currency
   *
   * @generated from field: double native_amount = 4;
   */
  nativeAmount = 0;

  /**
   * The URL to redirect upon successful payment
   *
   * @generated from field: string redirct_url = 5;
   */
  redirctUrl = "";

  constructor(data?: PartialMessage<GetPathMetadataResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.micropayment.v1.GetPathMetadataResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "enum", T: proto3.getEnumType(GetPathMetadataResponse_Result) },
    { no: 2, name: "destination", kind: "message", T: SolanaAccountId },
    { no: 3, name: "currency", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "native_amount", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 5, name: "redirct_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPathMetadataResponse {
    return new GetPathMetadataResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPathMetadataResponse {
    return new GetPathMetadataResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPathMetadataResponse {
    return new GetPathMetadataResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetPathMetadataResponse | PlainMessage<GetPathMetadataResponse> | undefined, b: GetPathMetadataResponse | PlainMessage<GetPathMetadataResponse> | undefined): boolean {
    return proto3.util.equals(GetPathMetadataResponse, a, b);
  }
}

/**
 * @generated from enum code.micropayment.v1.GetPathMetadataResponse.Result
 */
export enum GetPathMetadataResponse_Result {
  /**
   * @generated from enum value: OK = 0;
   */
  OK = 0,

  /**
   * @generated from enum value: NOT_FOUND = 1;
   */
  NOT_FOUND = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(GetPathMetadataResponse_Result)
proto3.util.setEnumType(GetPathMetadataResponse_Result, "code.micropayment.v1.GetPathMetadataResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" },
]);
