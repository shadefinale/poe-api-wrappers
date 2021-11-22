import { League } from "./League";
import { LeagueOptions, ListOptions } from "./models";
import { Rule } from "./Rule";
/**
 * @example
 * Get the list of the leagues that are currently active on the PlayStation realm.
 *
 * ```typescript
 * const data = await PathOfExile.Leagues.get({ type: "main", realm: "sony" });
 * ```
 *
 * @endpoint https://www.pathofexile.com/api/leagues
 * @param options
 * @throws [[APIError]]
 */
export declare const get: (options?: ListOptions | undefined) => Promise<League[]>;
/**
 * @example
 * Get the data from the Metamorph league, including the first 100 entries of the ladder.
 *
 * ```typescript
 * const data = await PathOfExile.Leagues.getById("Metamorph", { ladder: 1, limit: 100 });
 * ```
 *
 * @endpoint https://www.pathofexile.com/api/leagues/id
 * @param id
 * @param options
 * @throws [[APIError]]
 */
export declare const getById: (id: string, options?: LeagueOptions | undefined) => Promise<League>;
/**
 * @endpoint https://www.pathofexile.com/api/league-rules
 * @throws [[APIError]]
 */
export declare const getRules: () => Promise<Rule[]>;
/**
 * @endpoint https://www.pathofexile.com/api/league-rules/id
 * @param id
 * @throws [[APIError]]
 */
export declare const getRuleById: (id: string) => Promise<Rule>;
