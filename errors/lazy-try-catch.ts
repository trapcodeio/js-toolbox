/**
 * Try Catch functions using Go-Lang style of handling errors.
 * Returns and array of error and data.
 *
 * error will be undefined if there is no error.
 * @param fn
 */
export function tryCatch<T, E = Error>(fn: () => T): [undefined, T] | [E, undefined] {
    try {
        return [undefined, fn()]
    } catch (e) {
        return [e, undefined]
    }
}


/**
 * Try Catch Promises using Go-Lang style of handling errors.
 * Returns and array of error and data.
 *
 * error will be undefined if there is no error.
 * @param fn
 */
export async function resolve<T, E = Error>(fn: () => Promise<T>): Promise<[undefined, T] | [E, undefined]> {
    try {
        return [undefined, await fn()]
    } catch (e) {
        return [e, undefined]
    }
}