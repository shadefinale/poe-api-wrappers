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
exports.getPlayerHistory = exports.get = void 0;
const functions_1 = require("../../../common/functions");
const PlayerHistory_1 = require("./PlayerHistory");
const Season_1 = require("./Season");
/**
 * @endpoint https://www.pathofexile.com/api/seasons
 * @param options
 * @returns A list of all seasons
 * @throws [[APIError]]
 */
const get = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const url = functions_1.buildURL(`https://www.pathofexile.com/api/seasons`, options);
    return yield functions_1.requestTransformedArray(Season_1.Season, url);
});
exports.get = get;
/**
 * @remarks
 * This data is available even if the profile of the account is set to private
 *
 * @endpoint https://www.pathofexile.com/api/season-player-history
 * @param seasonId
 * @param accountName
 * @param options
 * @throws [[APIError]]
 */
const getPlayerHistory = (seasonId, accountName, options) => __awaiter(void 0, void 0, void 0, function* () {
    const url = functions_1.buildURL(`https://www.pathofexile.com/api/season-player-history`, options, null, {
        seasonId,
        id: accountName,
    });
    return yield functions_1.requestTransformed(PlayerHistory_1.PlayerHistory, url);
});
exports.getPlayerHistory = getPlayerHistory;
