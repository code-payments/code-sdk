/**
 * Utility function to create a deep clone of the object without Vue's reactivity system.
 * @param obj - The object to process.
 * @returns A deep clone of the object without reactivity.
 */
function withoutReactivity(obj?: unknown) {
    if (typeof obj !== 'object') { return obj; }
    return JSON.parse(JSON.stringify(obj));
}

export { withoutReactivity };