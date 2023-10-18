/**
 * A type defining an event emitter.
 */
export type Emitter<T> = <K extends keyof T>(event: K, args?: T[K]) => void;

/**
 * A type defining an event handler.
 */
export type Handler<T> = <K extends keyof T>(event: K, callback: (args: T[K]) => void) => void;

/**
 * A class that manages communication channels between frames or windows through postMessage.
 */
class EventChannel<T> {
    private connectionId: string;
    private listeners: { [key: string]: Function[] } = {};
    private targetWindow: Window | null = null;

    private readyResolver: (() => void) | null = null;
    private readyPromise?: Promise<void>;

    /**
     * Constructs an EventChannel.
     * @param id - Identifier for the connection.
     * @param targetWindow - The iframe element to communicate with. If not provided, communicates with parent window.
     */
    constructor(id: string = EventChannel.getId(), targetWindow?: HTMLIFrameElement) {
        this.connectionId = id;
        this.setTargetWindow(targetWindow);
    }

    /**
     * Sets the target window for communication.
     * @param targetWindow - The iframe element to communicate with.
     */
    setTargetWindow = (targetWindow?: HTMLIFrameElement) => {
        this.readyPromise = new Promise<void>((resolve) => {
            this.readyResolver = resolve;
        });

        if (targetWindow?.contentWindow) {
            this.targetWindow = targetWindow.contentWindow;
            targetWindow.addEventListener('load', () => {
                if (this.readyResolver) {
                    this.readyResolver();
                }
            });
        } else {
            this.targetWindow = window.parent;
            if (this.readyResolver) {
                this.readyResolver();
            }
        }
    }

    /**
     * Emits an event to the target window.
     */
    emit: Emitter<T> = async (event, args) => {
        await this.ready();

        if (this.targetWindow) {
            this.targetWindow.postMessage({
                id: this.connectionId,
                type: 'event',
                payload: { event, args },
            }, '*');
        }

        const eventStr: string = event as string;
        this.listeners[eventStr]?.forEach((fn) => {
            try {
                fn(args);
            } catch (err) {
                console.error(`Error in listener for event "${eventStr}": ${err}`);
            }
        });
    };

    /**
     * Registers an event listener.
     */
    on: Handler<T> = (event, fn) => {
        window.addEventListener('message', (e) => {
            //console.log('catch', event);
            if (e.data.type === 'event' && e.data.payload.event === event && e.data.id === this.connectionId) {
                fn(e.data.payload.args);
            }
        });

        const eventStr: string = event as string;
        this.listeners[eventStr] = [...(this.listeners[eventStr] || []), fn];
    };

    /**
     * Awaits until the event channel is ready.
     */
    async ready() {
        await this.readyPromise;
    }

    /**
     * Gets the connection identifier for this event channel.
     */
    get id() {
        return this.connectionId;
    }

    /**
     * Generates a unique identifier for the event channel.
     */
    static getId = () => {
        return Math.random().toString(36).substring(2, 15);
    };
}

export {
    EventChannel
}