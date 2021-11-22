import * as Fetch from "./fetch";
import * as Ignore from "./ignore";
import * as Items from "./items";
import * as Leagues from "./leagues";
import * as Search from "./search";
import * as Static from "./static";
import * as Stats from "./stats";
/**
 * @endpoint https://www.pathofexile.com/api/trade/data/leagues
 * @throws [[APIError]]
 */
export declare const getLeagues: () => Promise<Leagues.League[]>;
/**
 * @endpoint https://www.pathofexile.com/api/trade/data/items
 * @throws [[APIError]]
 */
export declare const getItems: () => Promise<Items.Group[]>;
/**
 * @endpoint https://www.pathofexile.com/api/trade/data/stats
 * @throws [[APIError]]
 */
export declare const getStats: () => Promise<Stats.Group[]>;
/**
 * @endpoint https://www.pathofexile.com/api/trade/data/static
 * @throws [[APIError]]
 */
export declare const getStatic: () => Promise<Static.Group[]>;
/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @endpoint https://www.pathofexile.com/api/trade/ignore
 * @param page Between `1` and `10`, will default to `1` if out of range
 * @returns A list of up to 50 ignored accounts
 * @throws [[APIError]]
 */
export declare const getIgnoredAccounts: (page?: number) => Promise<Ignore.Collection>;
/**
 * Execute a search query
 *
 * @endpoint https://www.pathofexile.com/api/trade/search/league
 * @param league
 * @param query
 * @throws [[APIError]]
 */
export declare const search: (league: string, query: Search.SearchQueryContainer) => Promise<Search.Result>;
/**
 * Execute an exchange query
 *
 * @endpoint https://www.pathofexile.com/api/trade/exchange/league
 * @param league
 * @param query
 * @throws [[APIError]]
 */
export declare const exchange: (league: string, query: Search.ExchangeQueryContainer) => Promise<Search.Result>;
/**
 * @endpoint https://www.pathofexile.com/api/trade/fetch
 * @param hashes
 * @throws [[APIError]]
 */
export declare const getFromHashes: (hashes: string[]) => Promise<Fetch.Result[]>;
