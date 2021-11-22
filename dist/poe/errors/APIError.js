"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIError = void 0;
class APIError extends Error {
    constructor(error) {
        super(error.error.message);
        this.code = 0;
        Object.setPrototypeOf(this, APIError.prototype);
        this.code = error.error.code;
    }
}
exports.APIError = APIError;
