import { Chunk } from "./Chunk";
/**
 * @endpoint http://api.pathofexile.com/public-stash-tabs
 * @param nextChangeId The next change ID you received from previously fetching changes
 * @throws [[APIError]]
 */
export declare const getChunk: (nextChangeId?: string | undefined) => Promise<Chunk>;
