import { App as VueApp, createApp, reactive } from 'vue';

import { 
    ElementEventEmitter, 
    ElementEvents, 
    ElementOptions, 
    ElementType, 
    IntentType, 
    validateElementOptions
} from '@code-wallet/library';

import { ErrUnknownElementType } from './errors';
import { 
    ButtonFlow,
    IntentRequestModalDesktop,
} from './components';

const defaultMode = 'payment';
const defaultLocale = 'en';

/**
 * Interface defining the structure and functionalities of a CodeElement.
 */
export interface CodeElement {
    getMode(): IntentType;
    getLocale(): string | undefined;
    getAppearance(): string | undefined;
    getOptions(): ElementOptions;
    update(options: Partial<ElementOptions>): void;
    on<K extends keyof ElementEvents>(event: K, callback: (args: ElementEvents[K]) => Promise<boolean | void>): void;
    mount(el: HTMLElement | string): any;
    unmount(): void;
}

/**
 * Abstract class representing a general element with common functionalities.
 */
abstract class AbstractElement implements CodeElement {
    listeners: { event: string, callback: (args: any) => Promise<boolean | void> }[];
    intent: ElementOptions;
    app: VueApp<any>;
    el: HTMLElement | undefined;

    /**
     * Constructor initializes the element with given parameters and Vue application.
     * @param params - Partial element options.
     * @param app - Vue application instance.
     */
    constructor(params: Partial<ElementOptions>, app: VueApp<any>) {
        const opt = { ...params } as ElementOptions;
        opt.mode = opt.mode ?? defaultMode;
        opt.locale = opt.locale ?? defaultLocale;

        // A bit of an evil cast here...
        this.intent = reactive(opt) as ElementOptions;
        this.listeners = [];
        this.app = app;

        this.validate();
    }

    /**
     * Validates the current element options.
     * @returns True if the options are valid.
     */
    validate() {
        return validateElementOptions(this.intent);
    }

    /**
     * Retrieves the locale of the element.
     * @returns The locale string or undefined.
     */
    getLocale() {
        return this.intent.locale;
    }

    /**
     * Retrieves the mode of the element.
     * @returns The mode of the element.
     */
    getMode(): IntentType {
        return this.intent.mode ?? defaultMode;
    }

    /**
     * Retrieves the appearance of the element.
     * @returns The appearance string or undefined.
     */
    getAppearance() {
        return this.intent.appearance;
    }

    /**
     * Retrieves the current options of the element.
     * @returns The element options.
     */
    getOptions(): ElementOptions {
        return this.intent;
    }

    /**
     * Updates the element with new options.
     * @param options - New options to update the element with.
     */
    update(options: Partial<ElementOptions>) {
        Object.assign(this.intent, options);
        this.validate();
    }

    /**
     * Subscribes to an event with a callback.
     * @param event - The event to subscribe to.
     * @param callback - The function to call back when the event occurs.
     */
    on<K extends keyof ElementEvents>(event: K, callback: (args: ElementEvents[K]) => Promise<boolean | void>) {
        this.listeners.push({ event, callback });
    }

    /**
     * Mounts the Vue component onto an HTML element.
     * @param el - The element or a selector string for mounting.
     * @returns The mounted element.
     */
    mount(el: HTMLElement | string) {
        const targetElement = typeof el === 'string' ? document.querySelector(el) : el;
        if (targetElement && targetElement.hasAttribute('data-v-app')) {
            console.warn("A component is already mounted on this element: " + el);
            return null;
        }

        const emitter: ElementEventEmitter = async (event: string, args?: any) => {
            const data = withoutReactivity(args);
            const listeners = this.listeners.filter(listener => listener.event === event);
            const results = await Promise.all(listeners.map(listener => listener.callback(data)));
            return results.some(r => r === true);
        }

        this.app.provide('locale', this.getLocale());
        this.app.provide('options', this.getOptions());
        this.app.provide('emit', emitter);

        const instance = this.app.mount(el);
        return instance.$el;
    }

    /**
     * Unmounts the Vue component from the HTML element.
     */
    unmount() {
        return this.app.unmount();
    }
}

/**
 * Utility function to create a deep clone of the object without Vue's reactivity system.
 * @param obj - The object to process.
 * @returns A deep clone of the object without reactivity.
 */
function withoutReactivity(obj?: unknown) {
    if (typeof obj !== 'object') { return obj; }
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Concrete class representing a specialized button element.
 */
class CodeButton extends AbstractElement {
    /**
     * Constructs a new CodeButton with specific options.
     * @param options - Partial element options.
     */
    constructor(options: Partial<ElementOptions>) {
        super(options, createApp(ButtonFlow));
    }
}

/**
 * Concrete class representing a specialized card element.
 */
class CodeCard extends AbstractElement {
    /**
     * Constructs a new CodeCard with specific options.
     * @param options - Partial element options.
     */
    constructor(options: Partial<ElementOptions>) {
        super(options, createApp(IntentRequestModalDesktop));
    }
}

/**
 * Factory object with a method for creating instances of CodeElements.
 */
const elements = {
    /**
     * Creates a new element based on the specified type.
     * @param type - The type of the element to create.
     * @param options - The options for the element.
     * @returns An object containing the newly created element.
     */
    create: (type: ElementType, options: Omit<ElementOptions, 'signers'>): { button?: CodeElement, card?: CodeElement } => {
        switch (type) {
            case 'button':
                return { button: new CodeButton(options) };
            case 'card':
                return { card: new CodeCard(options) };
            default:
                throw ErrUnknownElementType(type);
        }
    }
}

export {
    elements
}