import { App as VueApp, createApp, reactive } from 'vue';
import { 
    ElementEventEmitter, 
    ElementEvents, 
    ElementOptions, 
    ElementType, 
    IntentType, 
    validateElementOptions
} from '@code-wallet/intents';

import { withoutReactivity } from './utils/state';
import { ErrUnknownElementType } from './errors';
import { 
    ButtonFlow,
    PageFlow,
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
abstract class BaseElement implements CodeElement {
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
 * Concrete class representing a specialized button element.
 */
class CodeButton extends BaseElement {
    /**
     * Constructs a new CodeButton with specific options.
     * @param options - Partial element options.
     */
    constructor(options: Partial<ElementOptions>) {
        super(options, createApp(ButtonFlow));
    }
}

/**
 * Concrete class representing a specialized page element.
 */
class CodePage extends BaseElement {
    /**
     * Constructs a new CodePage with specific options.
     * @param options - Partial element options.
     */
    constructor(options: Partial<ElementOptions>) {
        super(options, createApp(PageFlow));
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
    create: (type: ElementType, options: Omit<ElementOptions, 'signers'>): { 
        button?: CodeElement, 
        page?: CodeElement,
    } => {
        switch (type) {
            case 'button':
                return { button: new CodeButton(options) };
            case 'page':
                return { page: new CodePage(options) };
            case 'card':
                throw new Error('Card elements are not yet supported.');
            default:
                throw ErrUnknownElementType(type);
        }
    }
}

export {
    elements
}