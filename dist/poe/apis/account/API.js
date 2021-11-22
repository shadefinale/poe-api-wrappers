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
exports.getMicrotransactions = exports.getNameByCharacter = exports.getStash = exports.getShowcasePins = exports.getAvatars = exports.getProfile = void 0;
const functions_1 = require("../../../common/functions");
const Avatars = __importStar(require("./avatars"));
const MTX = __importStar(require("./mtx"));
const Name_1 = require("./Name");
const profile_1 = require("./profile");
const ShowcasePins = __importStar(require("./showcase-pins"));
const stash_1 = require("./stash");
/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @endpoint https://www.pathofexile.com/api/profile
 * @throws [[APIError]]
 */
const getProfile = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = new URL(`https://www.pathofexile.com/api/profile`);
    return yield functions_1.requestTransformed(profile_1.Profile, url);
});
exports.getProfile = getProfile;
/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @endpoint https://pathofexile.com/api/account-avatar
 * @param options
 * @throws [[APIError]]
 */
const getAvatars = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const url = functions_1.buildURL(`https://www.pathofexile.com/api/account-avatar`, options, {
        page: 1,
        perPage: 16,
        custom: false,
    });
    const collection = yield functions_1.requestTransformed(Avatars.Collection, url);
    if (options) {
        collection.options = options;
    }
    return collection;
});
exports.getAvatars = getAvatars;
/**
 * @remarks
 * This data is available even if the profile of the account is set to private
 *
 * @endpoint https://www.pathofexile.com/api/account/showcase-pins
 * @param accountName
 * @param options
 * @throws [[APIError]]
 */
const getShowcasePins = (accountName, options) => __awaiter(void 0, void 0, void 0, function* () {
    const url = functions_1.buildURL(`https://www.pathofexile.com/api/account/showcase-pins`, options, null, {
        account: accountName,
    });
    return yield functions_1.requestTransformed(ShowcasePins.Collection, url);
});
exports.getShowcasePins = getShowcasePins;
/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @endpoint https://www.pathofexile.com/character-window/get-stash-items
 * @param accountName
 * @param league
 * @param tabIndex
 * @param options
 * @throws [[APIError]]
 */
const getStash = (accountName, league, tabIndex, options) => __awaiter(void 0, void 0, void 0, function* () {
    const url = functions_1.buildURL(`https://www.pathofexile.com/character-window/get-stash-items`, options, null, { accountName, league, tabIndex: tabIndex.toString() });
    return yield functions_1.requestTransformed(stash_1.Stash, url);
});
exports.getStash = getStash;
/**
 * @endpoint https://pathofexile.com/character-window/get-account-name-by-character
 * @param characterName
 * @throws [[APIError]]
 */
const getNameByCharacter = (characterName) => __awaiter(void 0, void 0, void 0, function* () {
    const url = functions_1.buildURL(`https://pathofexile.com/character-window/get-account-name-by-character`, null, null, { character: characterName });
    const account = yield functions_1.requestTransformed(Name_1.Name, url);
    return account.name;
});
exports.getNameByCharacter = getNameByCharacter;
/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @endpoint https://pathofexile.com/character-window/get-mtx-stash-items
 * @param accountName
 * @param options
 * @throws [[APIError]]
 */
const getMicrotransactions = (accountName, sortOrder = "category") => __awaiter(void 0, void 0, void 0, function* () {
    const url = functions_1.buildURL(`https://pathofexile.com/character-window/get-mtx-stash-items`);
    const payload = {
        accountName,
        sortOrder,
    };
    const response = yield functions_1.requestTransformed(MTX.Response, url, "post", payload);
    return response.groups;
});
exports.getMicrotransactions = getMicrotransactions;
