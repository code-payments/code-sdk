import * as proto from "@code-wallet/rpc";
import { ErrInvalidResponse, ErrNetworkError } from "./errors";

export interface ClientOptions {
    endpoint?: string,
    fetch?: Function,
}

/**
 * Represents a connection to an endpoint with methods to perform HTTP requests.
 */
class Client {
    endpoint: string;
    fetch: any;

    /**
     * Initializes a new connection to the provided endpoint.
     *
     * @param endpoint - The URL of the endpoint to connect to.
     * @param fetch - Optional fetch function. Defaults to global fetch.
     */
    constructor(endpoint: string, fetch: Function = globalThis.fetch) {
        // The Fetch API is supported experimentally in Node 17.5+ and natively in Node 18+.
        this.endpoint = endpoint;

        // Ensure that the fetch function is called with the right context and
        // doesn't trigger "Illegal invocation".
        this.fetch = (...args: any) => fetch.apply(globalThis, args);
    }

    private getDecoder <T extends proto.MethodInfo>(method: T) {
        return (data: Uint8Array) : InstanceType<T['O']> => {
            return method.O.fromBinary(data) as InstanceType<T['O']>;
        }
    }

    private getEncoder <T extends proto.MethodInfo>(_: T){
        return (data: InstanceType<T['I']>) : Uint8Array => {
            return data.toBinary();
        }
    }

    private getSender <T extends proto.MethodInfo>(_: T) {
        const url = `${this.endpoint}/v1/api/`;

        return (payload: any): Promise<proto.Common.Response> => {
            return new Promise(async (resolve, reject) => {

                try {
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/octet-stream',
                        },
                        body: payload,
                    });

                    if (response.ok) { // Check if status code is in the range 200-299
                        const buffer = await response.arrayBuffer();
                        const envelope = proto.Common.Response.fromBinary(new Uint8Array(buffer));
                        resolve(envelope);
                    } else {
                        reject(ErrInvalidResponse(response.status));
                    }
                } catch (error) {
                    reject(ErrNetworkError(error));
                }
            });
        }
    }

    private useService <T extends proto.MethodInfo>(service: T) {
        const decode = this.getDecoder(service);
        const encode = this.getEncoder(service);
        const send   = this.getSender(service);

        return { 
            decode,
            encode, 
            send
        };
    }

    private getServiceName(service: proto.ServiceType<any>) {
        return service.typeName.split(".").pop() as string;
    }

    async send<S extends proto.ServiceType<any>, M extends keyof S['methods']>(
        service: S,
        methodName: M & string,
        request: proto.Request<S, M>,
    ): Promise<proto.Response<S, M>> {

        const serviceName = this.getServiceName(service);
        const { encode, decode, send } = this.useService(service.methods[methodName]);

        const payload = encode(request);
        const req = new proto.Common.Request({
            service: serviceName,
            method: methodName,
            body: payload,
        });

        const envelope = await send(req.toBinary());
        const res = decode(envelope.body);
        return res;
    }
}

export {
    Client,
}