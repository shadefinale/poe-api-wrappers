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
exports.getAccountPointTransactions = exports.getPointTransactions = exports.getStashHistory = exports.get = void 0;
const functions_1 = require("../../../common/functions");
const Guild_1 = require("./Guild");
const PointTransactions_1 = require("./PointTransactions");
const StashHistory_1 = require("./StashHistory");
/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @endpoint https://www.pathofexile.com/api/guild
 * @returns Guild data of the account the session ID belongs to
 * @throws [[APIError]]
 */
const get = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = new URL(`https://www.pathofexile.com/api/guild`);
    return yield functions_1.requestTransformed(Guild_1.Guild, url);
});
exports.get = get;
/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @endpoint https://www.pathofexile.com/api/guild/<id>/stash/history
 * @param guildId
 * @param options
 * @throws [[APIError]]
 */
const getStashHistory = (guildId, options) => __awaiter(void 0, void 0, void 0, function* () {
    const url = functions_1.buildURL(`https://www.pathofexile.com/api/guild/${guildId}/stash/history`, options);
    return yield functions_1.requestTransformed(StashHistory_1.StashHistory, url);
});
exports.getStashHistory = getStashHistory;
/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @endpoint https://www.pathofexile.com/api/guild/point-transactions
 * @param options
 * @returns Point transactions for the guild the session ID belongs to
 * @throws [[APIError]]
 */
const getPointTransactions = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const url = functions_1.buildURL(`https://www.pathofexile.com/api/guild/point-transactions`, options);
    return yield functions_1.requestTransformed(PointTransactions_1.PointTransactions, url);
});
exports.getPointTransactions = getPointTransactions;
/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @endpoint https://www.pathofexile.com/api/account/guild/point-transactions
 * @param options
 * @returns Point transactions the account the session ID belongs to has made to guilds
 * @throws [[APIError]]
 */
const getAccountPointTransactions = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const url = functions_1.buildURL(`https://www.pathofexile.com/api/account/guild/point-transactions`, options);
    return yield functions_1.requestTransformed(PointTransactions_1.PointTransactions, url);
});
exports.getAccountPointTransactions = getAccountPointTransactions;
