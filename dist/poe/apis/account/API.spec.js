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
require("reflect-metadata");
require("mocha");
const chai_1 = require("chai");
const errors_1 = require("../../errors");
const API = __importStar(require("./API"));
const Settings_1 = require("../../Settings");
describe("Path of Exile - Accounts", function () {
    this.timeout(10000);
    describe("#getProfile()", function () {
        it("should return account profile", () => __awaiter(this, void 0, void 0, function* () {
            yield chai_1.expect(API.getProfile()).to.be.fulfilled;
        }));
        it("should throw APIError if invalid session id is supplied", () => __awaiter(this, void 0, void 0, function* () {
            Settings_1.Settings.sessionId = "invalid";
            yield chai_1.expect(API.getProfile()).to.be.rejectedWith(errors_1.APIError);
        }));
        after(() => {
            Settings_1.Settings.sessionId = process.env["POESESSID"];
        });
    });
    it("#getAvatars() - should return account avatars", () => __awaiter(this, void 0, void 0, function* () {
        yield chai_1.expect(API.getAvatars()).to.be.fulfilled;
    }));
    it("#getAvatars(options) - should return account avatars with options", () => __awaiter(this, void 0, void 0, function* () {
        yield chai_1.expect(API.getAvatars({ page: 2 })).to.be.fulfilled;
    }));
    it("#getNameByCharacter(character) - should return account name", () => __awaiter(this, void 0, void 0, function* () {
        yield chai_1.expect(API.getNameByCharacter("klayCA")).to.be.fulfilled;
    }));
    it("#getStash(account, league, tab) - should return stash tab items", () => __awaiter(this, void 0, void 0, function* () {
        yield chai_1.expect(API.getStash("klayveR", "Standard", 0, { tabs: 1 })).to.be.fulfilled;
    }));
    it("#getShowcasePins(account) - should return showcase pins", () => __awaiter(this, void 0, void 0, function* () {
        yield chai_1.expect(API.getShowcasePins("Chris")).to.be.fulfilled;
    }));
    it("#getMicrotransactions(account) - should return mtx owned by account", () => __awaiter(this, void 0, void 0, function* () {
        yield chai_1.expect(API.getMicrotransactions("klayveR")).to.be.fulfilled;
    }));
});
