// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file invite/v2/invite_service.proto (package code.invite.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { PhoneNumber, UserId } from "../../common/v1/model_pb";

/**
 * @generated from enum code.invite.v2.InvitationStatus
 */
export enum InvitationStatus {
  /**
   * The phone number has never been invited.
   *
   * @generated from enum value: NOT_INVITED = 0;
   */
  NOT_INVITED = 0,

  /**
   * The phone number has been invited at least once.
   *
   * @generated from enum value: INVITED = 1;
   */
  INVITED = 1,

  /**
   * The phone number has been invited and used the app at least once via a
   * phone verified account creation or login.
   *
   * @generated from enum value: REGISTERED = 2;
   */
  REGISTERED = 2,

  /**
   * The phone number was invited, but revoked at a later time.
   *
   * @generated from enum value: REVOKED = 3;
   */
  REVOKED = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(InvitationStatus)
proto3.util.setEnumType(InvitationStatus, "code.invite.v2.InvitationStatus", [
  { no: 0, name: "NOT_INVITED" },
  { no: 1, name: "INVITED" },
  { no: 2, name: "REGISTERED" },
  { no: 3, name: "REVOKED" },
]);

/**
 * @generated from message code.invite.v2.GetInviteCountRequest
 */
export class GetInviteCountRequest extends Message<GetInviteCountRequest> {
  /**
   * The user to query for their invite count
   *
   * @generated from field: code.common.v1.UserId user_id = 1;
   */
  userId?: UserId;

  constructor(data?: PartialMessage<GetInviteCountRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.invite.v2.GetInviteCountRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "message", T: UserId },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetInviteCountRequest {
    return new GetInviteCountRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetInviteCountRequest {
    return new GetInviteCountRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetInviteCountRequest {
    return new GetInviteCountRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetInviteCountRequest | PlainMessage<GetInviteCountRequest> | undefined, b: GetInviteCountRequest | PlainMessage<GetInviteCountRequest> | undefined): boolean {
    return proto3.util.equals(GetInviteCountRequest, a, b);
  }
}

/**
 * @generated from message code.invite.v2.GetInviteCountResponse
 */
export class GetInviteCountResponse extends Message<GetInviteCountResponse> {
  /**
   * @generated from field: code.invite.v2.GetInviteCountResponse.Result result = 1;
   */
  result = GetInviteCountResponse_Result.OK;

  /**
   * The number of invites the user is allowed to issue.
   *
   * @generated from field: uint32 invite_count = 2;
   */
  inviteCount = 0;

  constructor(data?: PartialMessage<GetInviteCountResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.invite.v2.GetInviteCountResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "enum", T: proto3.getEnumType(GetInviteCountResponse_Result) },
    { no: 2, name: "invite_count", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetInviteCountResponse {
    return new GetInviteCountResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetInviteCountResponse {
    return new GetInviteCountResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetInviteCountResponse {
    return new GetInviteCountResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetInviteCountResponse | PlainMessage<GetInviteCountResponse> | undefined, b: GetInviteCountResponse | PlainMessage<GetInviteCountResponse> | undefined): boolean {
    return proto3.util.equals(GetInviteCountResponse, a, b);
  }
}

/**
 * @generated from enum code.invite.v2.GetInviteCountResponse.Result
 */
export enum GetInviteCountResponse_Result {
  /**
   * @generated from enum value: OK = 0;
   */
  OK = 0,
}
// Retrieve enum metadata with: proto3.getEnumType(GetInviteCountResponse_Result)
proto3.util.setEnumType(GetInviteCountResponse_Result, "code.invite.v2.GetInviteCountResponse.Result", [
  { no: 0, name: "OK" },
]);

/**
 * @generated from message code.invite.v2.InvitePhoneNumberRequest
 */
export class InvitePhoneNumberRequest extends Message<InvitePhoneNumberRequest> {
  /**
   * The source for the invite. One of these values must be present
   *
   * @generated from oneof code.invite.v2.InvitePhoneNumberRequest.source
   */
  source: {
    /**
     * @generated from field: code.common.v1.UserId user = 1;
     */
    value: UserId;
    case: "user";
  } | {
    /**
     * @generated from field: code.invite.v2.InviteCode invite_code = 3;
     */
    value: InviteCode;
    case: "inviteCode";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * The phone number receiving the invite.
   *
   * @generated from field: code.common.v1.PhoneNumber receiver = 2;
   */
  receiver?: PhoneNumber;

  constructor(data?: PartialMessage<InvitePhoneNumberRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.invite.v2.InvitePhoneNumberRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user", kind: "message", T: UserId, oneof: "source" },
    { no: 3, name: "invite_code", kind: "message", T: InviteCode, oneof: "source" },
    { no: 2, name: "receiver", kind: "message", T: PhoneNumber },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InvitePhoneNumberRequest {
    return new InvitePhoneNumberRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InvitePhoneNumberRequest {
    return new InvitePhoneNumberRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InvitePhoneNumberRequest {
    return new InvitePhoneNumberRequest().fromJsonString(jsonString, options);
  }

  static equals(a: InvitePhoneNumberRequest | PlainMessage<InvitePhoneNumberRequest> | undefined, b: InvitePhoneNumberRequest | PlainMessage<InvitePhoneNumberRequest> | undefined): boolean {
    return proto3.util.equals(InvitePhoneNumberRequest, a, b);
  }
}

/**
 * @generated from message code.invite.v2.InvitePhoneNumberResponse
 */
export class InvitePhoneNumberResponse extends Message<InvitePhoneNumberResponse> {
  /**
   * @generated from field: code.invite.v2.InvitePhoneNumberResponse.Result result = 1;
   */
  result = InvitePhoneNumberResponse_Result.OK;

  constructor(data?: PartialMessage<InvitePhoneNumberResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.invite.v2.InvitePhoneNumberResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "enum", T: proto3.getEnumType(InvitePhoneNumberResponse_Result) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InvitePhoneNumberResponse {
    return new InvitePhoneNumberResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InvitePhoneNumberResponse {
    return new InvitePhoneNumberResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InvitePhoneNumberResponse {
    return new InvitePhoneNumberResponse().fromJsonString(jsonString, options);
  }

  static equals(a: InvitePhoneNumberResponse | PlainMessage<InvitePhoneNumberResponse> | undefined, b: InvitePhoneNumberResponse | PlainMessage<InvitePhoneNumberResponse> | undefined): boolean {
    return proto3.util.equals(InvitePhoneNumberResponse, a, b);
  }
}

/**
 * @generated from enum code.invite.v2.InvitePhoneNumberResponse.Result
 */
export enum InvitePhoneNumberResponse_Result {
  /**
   * @generated from enum value: OK = 0;
   */
  OK = 0,

  /**
   * The source exceeded their invite count and is restricted from issuing
   * further invites.
   *
   * @generated from enum value: INVITE_COUNT_EXCEEDED = 1;
   */
  INVITE_COUNT_EXCEEDED = 1,

  /**
   * The receiver phone number has already been invited. Regardless of who
   * invited it, the source's invite count is not decremented when this is
   * returned.
   *
   * @generated from enum value: ALREADY_INVITED = 2;
   */
  ALREADY_INVITED = 2,

  /**
   * The source  user has not been invited.
   *
   * @generated from enum value: USER_NOT_INVITED = 3;
   */
  USER_NOT_INVITED = 3,

  /**
   * The receiver phone number failed validation.
   *
   * @generated from enum value: INVALID_RECEIVER_PHONE_NUMBER = 4;
   */
  INVALID_RECEIVER_PHONE_NUMBER = 4,

  /**
   * The invite code doesn't exist.
   *
   * @generated from enum value: INVITE_CODE_NOT_FOUND = 5;
   */
  INVITE_CODE_NOT_FOUND = 5,

  /**
   * The invite code has been revoked.
   *
   * @generated from enum value: INVITE_CODE_REVOKED = 6;
   */
  INVITE_CODE_REVOKED = 6,

  /**
   * The invite code has expired.
   *
   * @generated from enum value: INVITE_CODE_EXPIRED = 7;
   */
  INVITE_CODE_EXPIRED = 7,
}
// Retrieve enum metadata with: proto3.getEnumType(InvitePhoneNumberResponse_Result)
proto3.util.setEnumType(InvitePhoneNumberResponse_Result, "code.invite.v2.InvitePhoneNumberResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVITE_COUNT_EXCEEDED" },
  { no: 2, name: "ALREADY_INVITED" },
  { no: 3, name: "USER_NOT_INVITED" },
  { no: 4, name: "INVALID_RECEIVER_PHONE_NUMBER" },
  { no: 5, name: "INVITE_CODE_NOT_FOUND" },
  { no: 6, name: "INVITE_CODE_REVOKED" },
  { no: 7, name: "INVITE_CODE_EXPIRED" },
]);

/**
 * @generated from message code.invite.v2.GetInvitationStatusRequest
 */
export class GetInvitationStatusRequest extends Message<GetInvitationStatusRequest> {
  /**
   * The user being queried for their invitation status.
   *
   * @generated from field: code.common.v1.UserId user_id = 1;
   */
  userId?: UserId;

  constructor(data?: PartialMessage<GetInvitationStatusRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.invite.v2.GetInvitationStatusRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "message", T: UserId },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetInvitationStatusRequest {
    return new GetInvitationStatusRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetInvitationStatusRequest {
    return new GetInvitationStatusRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetInvitationStatusRequest {
    return new GetInvitationStatusRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetInvitationStatusRequest | PlainMessage<GetInvitationStatusRequest> | undefined, b: GetInvitationStatusRequest | PlainMessage<GetInvitationStatusRequest> | undefined): boolean {
    return proto3.util.equals(GetInvitationStatusRequest, a, b);
  }
}

/**
 * @generated from message code.invite.v2.GetInvitationStatusResponse
 */
export class GetInvitationStatusResponse extends Message<GetInvitationStatusResponse> {
  /**
   * @generated from field: code.invite.v2.GetInvitationStatusResponse.Result result = 1;
   */
  result = GetInvitationStatusResponse_Result.OK;

  /**
   * The user's invitation status
   *
   * @generated from field: code.invite.v2.InvitationStatus status = 2;
   */
  status = InvitationStatus.NOT_INVITED;

  constructor(data?: PartialMessage<GetInvitationStatusResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.invite.v2.GetInvitationStatusResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "enum", T: proto3.getEnumType(GetInvitationStatusResponse_Result) },
    { no: 2, name: "status", kind: "enum", T: proto3.getEnumType(InvitationStatus) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetInvitationStatusResponse {
    return new GetInvitationStatusResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetInvitationStatusResponse {
    return new GetInvitationStatusResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetInvitationStatusResponse {
    return new GetInvitationStatusResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetInvitationStatusResponse | PlainMessage<GetInvitationStatusResponse> | undefined, b: GetInvitationStatusResponse | PlainMessage<GetInvitationStatusResponse> | undefined): boolean {
    return proto3.util.equals(GetInvitationStatusResponse, a, b);
  }
}

/**
 * @generated from enum code.invite.v2.GetInvitationStatusResponse.Result
 */
export enum GetInvitationStatusResponse_Result {
  /**
   * @generated from enum value: OK = 0;
   */
  OK = 0,
}
// Retrieve enum metadata with: proto3.getEnumType(GetInvitationStatusResponse_Result)
proto3.util.setEnumType(GetInvitationStatusResponse_Result, "code.invite.v2.GetInvitationStatusResponse.Result", [
  { no: 0, name: "OK" },
]);

/**
 * @generated from message code.invite.v2.InviteCode
 */
export class InviteCode extends Message<InviteCode> {
  /**
   * Regex for invite codes
   *
   * @generated from field: string value = 1;
   */
  value = "";

  constructor(data?: PartialMessage<InviteCode>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.invite.v2.InviteCode";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InviteCode {
    return new InviteCode().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InviteCode {
    return new InviteCode().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InviteCode {
    return new InviteCode().fromJsonString(jsonString, options);
  }

  static equals(a: InviteCode | PlainMessage<InviteCode> | undefined, b: InviteCode | PlainMessage<InviteCode> | undefined): boolean {
    return proto3.util.equals(InviteCode, a, b);
  }
}

/**
 * @generated from message code.invite.v2.PageToken
 */
export class PageToken extends Message<PageToken> {
  /**
   * @generated from field: bytes value = 1;
   */
  value = new Uint8Array(0);

  constructor(data?: PartialMessage<PageToken>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.invite.v2.PageToken";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PageToken {
    return new PageToken().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PageToken {
    return new PageToken().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PageToken {
    return new PageToken().fromJsonString(jsonString, options);
  }

  static equals(a: PageToken | PlainMessage<PageToken> | undefined, b: PageToken | PlainMessage<PageToken> | undefined): boolean {
    return proto3.util.equals(PageToken, a, b);
  }
}

