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
exports.getHistory = exports.get = void 0;
const functions_1 = require("../../../common/functions");
const History_1 = require("./History");
const Collection_1 = require("./Collection");
/**
 * @endpoint https://poe.ninja/api/data/CurrencyOverview
 * @param league
 * @param type
 * @param language
 */
const get = (league, type, language = "en") => __awaiter(void 0, void 0, void 0, function* () {
    const url = functions_1.buildURL(`https://poe.ninja/api/data/CurrencyOverview`, null, null, {
        league,
        type,
        language,
    });
    return yield functions_1.requestTransformed(Collection_1.Collection, url);
});
exports.get = get;
/**
 * @endpoint https://poe.ninja/api/data/CurrencyHistory
 * @param league
 * @param type
 * @param id
 */
const getHistory = (league, type, id) => __awaiter(void 0, void 0, void 0, function* () {
    const url = functions_1.buildURL(`https://poe.ninja/api/data/CurrencyHistory`, null, null, {
        league,
        type,
        currencyId: id.toString(),
    });
    return yield functions_1.requestTransformed(History_1.History, url);
});
exports.getHistory = getHistory;
