import * as jspb from 'google-protobuf'



export class CustomerCreateRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): CustomerCreateRequest;

  getFirstName(): string;
  setFirstName(value: string): CustomerCreateRequest;

  getLastName(): string;
  setLastName(value: string): CustomerCreateRequest;

  getBirthdate(): string;
  setBirthdate(value: string): CustomerCreateRequest;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): CustomerCreateRequest;

  getAddress(): string;
  setAddress(value: string): CustomerCreateRequest;

  getGender(): number;
  setGender(value: number): CustomerCreateRequest;

  getImageUrl(): string;
  setImageUrl(value: string): CustomerCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerCreateRequest): CustomerCreateRequest.AsObject;
  static serializeBinaryToWriter(message: CustomerCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerCreateRequest;
  static deserializeBinaryFromReader(message: CustomerCreateRequest, reader: jspb.BinaryReader): CustomerCreateRequest;
}

export namespace CustomerCreateRequest {
  export type AsObject = {
    username: string,
    firstName: string,
    lastName: string,
    birthdate: string,
    phoneNumber: string,
    address: string,
    gender: number,
    imageUrl: string,
  }
}

export class CustomerReadRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CustomerReadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerReadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerReadRequest): CustomerReadRequest.AsObject;
  static serializeBinaryToWriter(message: CustomerReadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerReadRequest;
  static deserializeBinaryFromReader(message: CustomerReadRequest, reader: jspb.BinaryReader): CustomerReadRequest;
}

export namespace CustomerReadRequest {
  export type AsObject = {
    id: string,
  }
}

export class CustomerRead extends jspb.Message {
  getId(): string;
  setId(value: string): CustomerRead;

  getUsername(): string;
  setUsername(value: string): CustomerRead;

  getFirstName(): string;
  setFirstName(value: string): CustomerRead;

  getLastName(): string;
  setLastName(value: string): CustomerRead;

  getBirthdate(): string;
  setBirthdate(value: string): CustomerRead;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): CustomerRead;

  getAddress(): string;
  setAddress(value: string): CustomerRead;

  getGender(): string;
  setGender(value: string): CustomerRead;

  getImageUrl(): string;
  setImageUrl(value: string): CustomerRead;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerRead.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerRead): CustomerRead.AsObject;
  static serializeBinaryToWriter(message: CustomerRead, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerRead;
  static deserializeBinaryFromReader(message: CustomerRead, reader: jspb.BinaryReader): CustomerRead;
}

export namespace CustomerRead {
  export type AsObject = {
    id: string,
    username: string,
    firstName: string,
    lastName: string,
    birthdate: string,
    phoneNumber: string,
    address: string,
    gender: string,
    imageUrl: string,
  }
}

export class CustomerReadResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): CustomerReadResponse;

  getMessage(): string;
  setMessage(value: string): CustomerReadResponse;

  getId(): string;
  setId(value: string): CustomerReadResponse;

  getUsername(): string;
  setUsername(value: string): CustomerReadResponse;

  getFirstName(): string;
  setFirstName(value: string): CustomerReadResponse;

  getLastName(): string;
  setLastName(value: string): CustomerReadResponse;

  getBirthdate(): string;
  setBirthdate(value: string): CustomerReadResponse;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): CustomerReadResponse;

  getAddress(): string;
  setAddress(value: string): CustomerReadResponse;

  getGender(): string;
  setGender(value: string): CustomerReadResponse;

  getImageUrl(): string;
  setImageUrl(value: string): CustomerReadResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerReadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerReadResponse): CustomerReadResponse.AsObject;
  static serializeBinaryToWriter(message: CustomerReadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerReadResponse;
  static deserializeBinaryFromReader(message: CustomerReadResponse, reader: jspb.BinaryReader): CustomerReadResponse;
}

export namespace CustomerReadResponse {
  export type AsObject = {
    status: string,
    message: string,
    id: string,
    username: string,
    firstName: string,
    lastName: string,
    birthdate: string,
    phoneNumber: string,
    address: string,
    gender: string,
    imageUrl: string,
  }
}

export class GenderReadRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GenderReadRequest;

  getName(): string;
  setName(value: string): GenderReadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenderReadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenderReadRequest): GenderReadRequest.AsObject;
  static serializeBinaryToWriter(message: GenderReadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenderReadRequest;
  static deserializeBinaryFromReader(message: GenderReadRequest, reader: jspb.BinaryReader): GenderReadRequest;
}

export namespace GenderReadRequest {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class GenderReadResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): GenderReadResponse;

  getMessage(): string;
  setMessage(value: string): GenderReadResponse;

  getResultsList(): Array<GenderReadRequest>;
  setResultsList(value: Array<GenderReadRequest>): GenderReadResponse;
  clearResultsList(): GenderReadResponse;
  addResults(value?: GenderReadRequest, index?: number): GenderReadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenderReadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenderReadResponse): GenderReadResponse.AsObject;
  static serializeBinaryToWriter(message: GenderReadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenderReadResponse;
  static deserializeBinaryFromReader(message: GenderReadResponse, reader: jspb.BinaryReader): GenderReadResponse;
}

export namespace GenderReadResponse {
  export type AsObject = {
    status: string,
    message: string,
    resultsList: Array<GenderReadRequest.AsObject>,
  }
}

export class BusReadResponse extends jspb.Message {
  getId(): number;
  setId(value: number): BusReadResponse;

  getName(): string;
  setName(value: string): BusReadResponse;

  getImageUrl(): string;
  setImageUrl(value: string): BusReadResponse;

  getDepartureStation(): string;
  setDepartureStation(value: string): BusReadResponse;

  getArrivalStation(): string;
  setArrivalStation(value: string): BusReadResponse;

  getDepartureTime(): string;
  setDepartureTime(value: string): BusReadResponse;

  getArrivalTime(): string;
  setArrivalTime(value: string): BusReadResponse;

  getRangeTime(): string;
  setRangeTime(value: string): BusReadResponse;

  getPrice(): number;
  setPrice(value: number): BusReadResponse;

  getSeatType(): string;
  setSeatType(value: string): BusReadResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusReadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BusReadResponse): BusReadResponse.AsObject;
  static serializeBinaryToWriter(message: BusReadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusReadResponse;
  static deserializeBinaryFromReader(message: BusReadResponse, reader: jspb.BinaryReader): BusReadResponse;
}

export namespace BusReadResponse {
  export type AsObject = {
    id: number,
    name: string,
    imageUrl: string,
    departureStation: string,
    arrivalStation: string,
    departureTime: string,
    arrivalTime: string,
    rangeTime: string,
    price: number,
    seatType: string,
  }
}

export class BusReadListResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): BusReadListResponse;

  getMessage(): string;
  setMessage(value: string): BusReadListResponse;

  getResultsList(): Array<BusReadResponse>;
  setResultsList(value: Array<BusReadResponse>): BusReadListResponse;
  clearResultsList(): BusReadListResponse;
  addResults(value?: BusReadResponse, index?: number): BusReadResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusReadListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BusReadListResponse): BusReadListResponse.AsObject;
  static serializeBinaryToWriter(message: BusReadListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusReadListResponse;
  static deserializeBinaryFromReader(message: BusReadListResponse, reader: jspb.BinaryReader): BusReadListResponse;
}

export namespace BusReadListResponse {
  export type AsObject = {
    status: string,
    message: string,
    resultsList: Array<BusReadResponse.AsObject>,
  }
}

export class BusReadRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusReadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BusReadRequest): BusReadRequest.AsObject;
  static serializeBinaryToWriter(message: BusReadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusReadRequest;
  static deserializeBinaryFromReader(message: BusReadRequest, reader: jspb.BinaryReader): BusReadRequest;
}

export namespace BusReadRequest {
  export type AsObject = {
  }
}

