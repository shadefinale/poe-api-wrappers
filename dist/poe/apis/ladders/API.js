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
exports.get = void 0;
const functions_1 = require("../../../common/functions");
const Ladder_1 = require("./Ladder");
/**
 * @remarks
 * There is a restriction in place on the last ladder entry you are able to retrieve which is set to `15000`.
 *
 * @example
 * Get the first 200 characters in the SSF Standard ladder. We also set `track: 1` to add a unique identifier to each character.
 *
 * ```typescript
 * const ladder = await PathOfExile.Ladders.get("SSF Standard", { limit: 200, track: 1 });
 * ```
 *
 * @endpoint https://www.pathofexile.com/api/ladders/id
 * @param id
 * @param options
 * @throws [[APIError]]
 */
const get = (id, options) => __awaiter(void 0, void 0, void 0, function* () {
    const url = functions_1.buildURL(`https://www.pathofexile.com/api/ladders/${id}`, options);
    const ladder = yield functions_1.requestTransformed(Ladder_1.Ladder, url);
    ladder.leagueId = id;
    if (options) {
        ladder.options = options;
    }
    return ladder;
});
exports.get = get;
