/**
 * Describes the set of events that an element can emit.
 */
interface ElementEvents {
    /** Triggered upon successful completion of an action. */
    success: any;

    /** Triggered when the user cancels an action or interaction. */
    cancel: any;

    /** Triggered when there's an error during an action or interaction. */
    error: { message: string };

    /** Triggered when the action or interaction is invoked. */
    invoke: undefined;
}

/**
 * Defines the signature for an event emitter function, which allows for emitting
 * specified events and optionally sending associated data with those events.
 *
 * @param event - The name/type of the event to emit.
 * @param args - Optional data associated with the emitted event.
 * @returns A promise that resolves to a boolean, often indicating success or failure.
 */
type ElementEventEmitter = <K extends keyof ElementEvents>(event: K, args?: ElementEvents[K]) => Promise<boolean>;

export type {
    ElementEvents,
    ElementEventEmitter,
};