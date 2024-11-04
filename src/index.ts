type Result<T> = [T | null, Error | null];

/**
 * Executes a function and returns a tuple containing the result and error (if any)
 * Similar to Go's error handling pattern
 * 
 * @param fn Function to execute
 * @returns Tuple of [result, error]
 */
export function gotry<T>(fn: () => T): Result<T> {
  try {
    const result = fn();
    return [result, null];
  } catch (error) {
    return [null, error instanceof Error ? error : new Error(String(error))];
  }
}

/**
 * Executes an async function and returns a tuple containing the result and error (if any)
 * Similar to Go's error handling pattern
 * 
 * @param fn Async function to execute
 * @returns Promise of tuple [result, error]
 */
export async function gotryAsync<T>(fn: () => Promise<T>): Promise<Result<T>> {
  try {
    const result = await fn();
    return [result, null];
  } catch (error) {
    return [null, error instanceof Error ? error : new Error(String(error))];
  }
} 