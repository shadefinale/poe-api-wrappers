import { Guild } from "./Guild";
import { StashHistoryOptions } from "./models";
import { PointTransactions } from "./PointTransactions";
import { StashHistory } from "./StashHistory";
/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @endpoint https://www.pathofexile.com/api/guild
 * @returns Guild data of the account the session ID belongs to
 * @throws [[APIError]]
 */
export declare const get: () => Promise<Guild>;
/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @endpoint https://www.pathofexile.com/api/guild/<id>/stash/history
 * @param guildId
 * @param options
 * @throws [[APIError]]
 */
export declare const getStashHistory: (guildId: string, options?: StashHistoryOptions | undefined) => Promise<StashHistory>;
/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @endpoint https://www.pathofexile.com/api/guild/point-transactions
 * @param options
 * @returns Point transactions for the guild the session ID belongs to
 * @throws [[APIError]]
 */
export declare const getPointTransactions: (options?: StashHistoryOptions | undefined) => Promise<PointTransactions>;
/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @endpoint https://www.pathofexile.com/api/account/guild/point-transactions
 * @param options
 * @returns Point transactions the account the session ID belongs to has made to guilds
 * @throws [[APIError]]
 */
export declare const getAccountPointTransactions: (options?: StashHistoryOptions | undefined) => Promise<PointTransactions>;
