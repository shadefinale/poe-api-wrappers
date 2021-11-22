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
exports.getMembers = void 0;
const functions_1 = require("../../../common/functions");
const Collection_1 = require("./Collection");
/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @remarks
 * The account tied to the provided session id must be part of the private league.
 *
 * @endpoint https://www.pathofexile.com/api/private-league-member/<id>
 * @param id ID of the private league without `PL` prefix
 * @param options
 * @throws [[APIError]]
 */
const getMembers = (id, options) => __awaiter(void 0, void 0, void 0, function* () {
    const url = functions_1.buildURL(`https://www.pathofexile.com/api/private-league-member/${id.toString()}`, options);
    return yield functions_1.requestTransformed(Collection_1.Collection, url);
});
exports.getMembers = getMembers;
