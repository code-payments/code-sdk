import { Client, ClientOptions } from "../client";

const defaultEndpoint = 'https://cash.getcode.com/v1';

export function useClient(opt: ClientOptions = {}) : Client {
    const endpoint = opt.endpoint ?? defaultEndpoint;

    return new Client(endpoint, opt.fetch);
}