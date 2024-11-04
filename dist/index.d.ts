type Result<T> = [T | null, Error | null];
/**
 * Executes a function and returns a tuple containing the result and error (if any)
 * Similar to Go's error handling pattern
 *
 * @param fn Function to execute
 * @returns Tuple of [result, error]
 */
export declare function gotry<T>(fn: () => T): Result<T>;
/**
 * Executes an async function and returns a tuple containing the result and error (if any)
 * Similar to Go's error handling pattern
 *
 * @param fn Async function to execute
 * @returns Promise of tuple [result, error]
 */
export declare function gotryAsync<T>(fn: () => Promise<T>): Promise<Result<T>>;
export {};
