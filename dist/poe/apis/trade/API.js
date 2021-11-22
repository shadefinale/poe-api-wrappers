"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.getFromHashes = exports.exchange = exports.search = exports.getIgnoredAccounts = exports.getStatic = exports.getStats = exports.getItems = exports.getLeagues = void 0;
const functions_1 = require("../../../common/functions");
const Fetch = __importStar(require("./fetch"));
const Ignore = __importStar(require("./ignore"));
const Items = __importStar(require("./items"));
const Leagues = __importStar(require("./leagues"));
const Search = __importStar(require("./search"));
const Static = __importStar(require("./static"));
const Stats = __importStar(require("./stats"));
/**
 * @endpoint https://www.pathofexile.com/api/trade/data/leagues
 * @throws [[APIError]]
 */
const getLeagues = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = new URL(`https://www.pathofexile.com/api/trade/data/leagues`);
    const response = yield functions_1.requestTransformed(Leagues.Response, url);
    return response.result;
});
exports.getLeagues = getLeagues;
/**
 * @endpoint https://www.pathofexile.com/api/trade/data/items
 * @throws [[APIError]]
 */
const getItems = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = new URL(`https://www.pathofexile.com/api/trade/data/items`);
    const response = yield functions_1.requestTransformed(Items.Response, url);
    return response.result;
});
exports.getItems = getItems;
/**
 * @endpoint https://www.pathofexile.com/api/trade/data/stats
 * @throws [[APIError]]
 */
const getStats = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = new URL(`https://www.pathofexile.com/api/trade/data/stats`);
    const response = yield functions_1.requestTransformed(Stats.Response, url);
    return response.result;
});
exports.getStats = getStats;
/**
 * @endpoint https://www.pathofexile.com/api/trade/data/static
 * @throws [[APIError]]
 */
const getStatic = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = new URL(`https://www.pathofexile.com/api/trade/data/static`);
    const response = yield functions_1.requestTransformed(Static.Response, url);
    return response.result;
});
exports.getStatic = getStatic;
/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @endpoint https://www.pathofexile.com/api/trade/ignore
 * @param page Between `1` and `10`, will default to `1` if out of range
 * @returns A list of up to 50 ignored accounts
 * @throws [[APIError]]
 */
const getIgnoredAccounts = (page = 1) => __awaiter(void 0, void 0, void 0, function* () {
    const url = functions_1.buildURL(`https://www.pathofexile.com/api/trade/ignore`, null, null, {
        page: page.toString(),
    });
    return yield functions_1.requestTransformed(Ignore.Collection, url);
});
exports.getIgnoredAccounts = getIgnoredAccounts;
/**
 * @throws [[APIError]]
 */
const getSearchResult = (league, endpoint, query) => __awaiter(void 0, void 0, void 0, function* () {
    const url = new URL(`https://www.pathofexile.com/api/trade/${endpoint}/${league}`);
    const result = yield functions_1.requestTransformed(Search.Result, url, "post", query);
    return result;
});
/**
 * Execute a search query
 *
 * @endpoint https://www.pathofexile.com/api/trade/search/league
 * @param league
 * @param query
 * @throws [[APIError]]
 */
const search = (league, query) => __awaiter(void 0, void 0, void 0, function* () {
    return yield getSearchResult(league, "search", query);
});
exports.search = search;
/**
 * Execute an exchange query
 *
 * @endpoint https://www.pathofexile.com/api/trade/exchange/league
 * @param league
 * @param query
 * @throws [[APIError]]
 */
const exchange = (league, query) => __awaiter(void 0, void 0, void 0, function* () {
    return yield getSearchResult(league, "exchange", query);
});
exports.exchange = exchange;
/**
 * @endpoint https://www.pathofexile.com/api/trade/fetch
 * @param hashes
 * @throws [[APIError]]
 */
const getFromHashes = (hashes) => __awaiter(void 0, void 0, void 0, function* () {
    const hashString = hashes.join(",");
    const url = new URL(`https://www.pathofexile.com/api/trade/fetch/${hashString}`);
    const response = yield functions_1.requestTransformed(Fetch.Response, url);
    return response.result;
});
exports.getFromHashes = getFromHashes;
