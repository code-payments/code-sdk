import { Client, ClientOptions } from "../client";

const defaultEndpoint = 'https://api.getcode.com/v1';
let client: Client | undefined;

export function useClient(opt: ClientOptions) : Client {
    const endpoint = opt.endpoint ?? defaultEndpoint;

    if (!client) {
        client = new Client(endpoint, opt.fetch);
    }

    return client;
}