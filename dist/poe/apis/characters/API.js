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
exports.getPassiveSkills = exports.getItems = exports.get = void 0;
const functions_1 = require("../../../common/functions");
const Character_1 = require("./Character");
const Items_1 = require("./Items");
const PassiveSkills_1 = require("./PassiveSkills");
/**
 * @remarks
 * Requires `sessionId` to be set in [[Settings]] if profile or character tab is private.
 *
 * @endpoint https://www.pathofexile.com/character-window/get-characters
 * @param accountName
 * @param options
 * @returns A list of characters of an account
 * @throws [[APIError]]
 */
const get = (accountName, options) => __awaiter(void 0, void 0, void 0, function* () {
    const url = functions_1.buildURL(`https://www.pathofexile.com/character-window/get-characters`, options, null, {
        accountName,
    });
    return yield functions_1.requestTransformedArray(Character_1.Character, url);
});
exports.get = get;
/**
 * @remarks
 * Requires `sessionId` to be set in [[Settings]] if profile or character tab is private.
 *
 * @endpoint https://www.pathofexile.com/character-window/get-items
 * @param accountName
 * @param character
 * @param options
 * @throws [[APIError]]
 */
const getItems = (accountName, character, options) => __awaiter(void 0, void 0, void 0, function* () {
    const url = functions_1.buildURL(`https://www.pathofexile.com/character-window/get-items`, options, null, {
        accountName,
        character,
    });
    return yield functions_1.requestTransformed(Items_1.Items, url);
});
exports.getItems = getItems;
/**
 * @remarks
 * Requires `sessionId` to be set in [[Settings]] if profile or character tab is private.
 *
 * @endpoint https://www.pathofexile.com/character-window/get-passive-skills
 * @param accountName
 * @param character
 * @param options
 * @throws [[APIError]]
 */
const getPassiveSkills = (accountName, character, options) => __awaiter(void 0, void 0, void 0, function* () {
    const url = functions_1.buildURL(`https://www.pathofexile.com/character-window/get-passive-skills`, options, null, { accountName, character });
    return yield functions_1.requestTransformed(PassiveSkills_1.PassiveSkills, url);
});
exports.getPassiveSkills = getPassiveSkills;
