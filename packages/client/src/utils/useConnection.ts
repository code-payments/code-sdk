import { Connection, ConnectionOptions } from "../connection";

const defaultEndpoint = 'https://api.getcode.com/v1';
let client: Connection | undefined;

export function useConnection(opt: ConnectionOptions) : Connection {
    const endpoint = opt.endpoint ?? defaultEndpoint;

    if (!client) {
        client = new Connection(endpoint, opt.fetch);
    }

    return client;
}