/// <reference types="node" />
import { URL } from "url";
interface Parameters {
    [key: string]: string;
}
export declare function buildURL<T>(url: string, optionalParameters?: T, defaults?: T, additionalParameters?: Parameters): URL;
export {};
