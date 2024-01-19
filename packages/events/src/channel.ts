/**
 * A type defining an event emitter.
 */
export type Emitter<T> = <K extends keyof T>(event: K, args?: T[K]) => void;

/**
 * A type defining an event handler.
 */
export type Handler<T> = <K extends keyof T>(event: K | K[], callback: (args: T[K]) => void) => void;

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
    on: Handler<T> = (eventOrEvents, fn) => {
        const addListener = (event: keyof T) => {
            // Ensure the event is treated as a string for indexing purposes
            const eventStr: string = event as unknown as string;
            window.addEventListener('message', (e) => {
                if (e.data.type === 'event' && e.data.payload.event === eventStr && e.data.id === this.connectionId) {
                    fn(e.data.payload.args);
                }
            });

            this.listeners[eventStr] = [...(this.listeners[eventStr] || []), fn];
        };

        if (Array.isArray(eventOrEvents)) {
            // If it's an array of events, register the listener for each event
            eventOrEvents.forEach(event => addListener(event));
        } else {
            // If it's a single event, register the listener
            addListener(eventOrEvents);
        }
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