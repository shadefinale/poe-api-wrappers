import { Stream } from "./Stream";
/**
 * @endpoint https://www.pathofexile.com/api/streams
 * @returns A list of all streams displayed on the official Path of Exile home page
 * @throws [[APIError]]
 */
export declare const get: () => Promise<Stream[]>;
