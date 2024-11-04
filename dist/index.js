"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gotryAsync = exports.gotry = void 0;
/**
 * Executes a function and returns a tuple containing the result and error (if any)
 * Similar to Go's error handling pattern
 *
 * @param fn Function to execute
 * @returns Tuple of [result, error]
 */
function gotry(fn) {
    try {
        const result = fn();
        return [result, null];
    }
    catch (error) {
        return [null, error instanceof Error ? error : new Error(String(error))];
    }
}
exports.gotry = gotry;
/**
 * Executes an async function and returns a tuple containing the result and error (if any)
 * Similar to Go's error handling pattern
 *
 * @param fn Async function to execute
 * @returns Promise of tuple [result, error]
 */
function gotryAsync(fn) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield fn();
            return [result, null];
        }
        catch (error) {
            return [null, error instanceof Error ? error : new Error(String(error))];
        }
    });
}
exports.gotryAsync = gotryAsync;
