import { 
    ErrUnexpectedError, 
    ErrUnexpectedHttpStatus, 
    ErrUnexpectedServerError 
} from "./errors";

export interface ConnectionOptions {
    endpoint?: string,
    fetch?: Function,
}

/**
 * Represents a connection to an endpoint with methods to perform HTTP requests.
 */
class Connection {
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

    /**
     * Performs an HTTP GET request to the specified method with provided parameters.
     *
     * @param method - The API method to call.
     * @param params - The parameters for the method.
     * @returns The response JSON object on success.
     * @throws Will throw an error if the HTTP status is not 200 or if the server returns an error.
     */
    async get(method: string, params: any) {
        const url = `${this.endpoint}/${method}?${new URLSearchParams(params)}`;

        const req = await this.fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        if (req.status !== 200) {
            const msg = await req.text();
            throw ErrUnexpectedHttpStatus(req.status, msg);
        }

        const json =  await req.json();
        if (json.error) {
            throw ErrUnexpectedServerError(json.error);
        }

        if (json.success) {
            return json;
        }

        console.error(json);
        throw ErrUnexpectedError();
    }

    /**
     * Performs an HTTP POST request to the specified method with provided body data.
     *
     * @param method - The API method to call.
     * @param body - The data to be sent in the request body.
     * @returns `true` on success.
     * @throws Will throw an error if the HTTP status is not 200 or if the server returns an error.
     */
    async post(method: string, body: any) {
        const url = `${this.endpoint}/${method}`;

        const req = await this.fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' }
        });

        if (req.status !== 200) {
            const msg = await req.text();
            throw ErrUnexpectedHttpStatus(req.status, msg);
        }

        const json = await req.json();
        if (json.error) {
            throw ErrUnexpectedServerError(json.error);
        }

        if (json.success) {
            return json;
        }

        console.error(json);
        throw ErrUnexpectedError();
    }
}

export {
    Connection,
}