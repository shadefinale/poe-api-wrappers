import { ExternalAPIError } from "./models/ExternalAPIError";
export declare class APIError extends Error {
    code: number;
    constructor(error: ExternalAPIError);
}
