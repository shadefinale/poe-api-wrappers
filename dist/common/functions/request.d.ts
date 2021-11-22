import { Method } from "axios";
export declare const request: (url: URL, method?: Method, payload?: unknown) => Promise<string>;
export declare const requestTransformed: <T>(cls: new () => T, url: URL, method?: Method, payload?: unknown) => Promise<T>;
export declare const requestTransformedArray: <T>(cls: new () => T, url: URL, method?: Method, payload?: unknown) => Promise<T[]>;
export declare const buildHeaders: (url: URL) => Record<string, string>;
export declare const stripByteOrderMark: (str: string) => string;
