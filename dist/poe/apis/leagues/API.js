"use strict";
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
exports.getRuleById = exports.getRules = exports.getById = exports.get = void 0;
const functions_1 = require("../../../common/functions");
const League_1 = require("./League");
const Rule_1 = require("./Rule");
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
const get = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const url = functions_1.buildURL(`https://www.pathofexile.com/api/leagues`, options);
    return yield functions_1.requestTransformedArray(League_1.League, url);
});
exports.get = get;
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
const getById = (id, options) => __awaiter(void 0, void 0, void 0, function* () {
    const url = functions_1.buildURL(`https://www.pathofexile.com/api/leagues/${id}`, options);
    return yield functions_1.requestTransformed(League_1.League, url);
});
exports.getById = getById;
/**
 * @endpoint https://www.pathofexile.com/api/league-rules
 * @throws [[APIError]]
 */
const getRules = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = functions_1.buildURL(`https://www.pathofexile.com/api/league-rules`);
    return yield functions_1.requestTransformedArray(Rule_1.Rule, url);
});
exports.getRules = getRules;
/**
 * @endpoint https://www.pathofexile.com/api/league-rules/id
 * @param id
 * @throws [[APIError]]
 */
const getRuleById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const url = functions_1.buildURL(`https://www.pathofexile.com/api/league-rules/${id}`);
    return yield functions_1.requestTransformed(Rule_1.Rule, url);
});
exports.getRuleById = getRuleById;
