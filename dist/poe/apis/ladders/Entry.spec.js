"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("mocha");
const chai_1 = require("chai");
const class_transformer_1 = require("class-transformer");
const ladder_json_1 = __importDefault(require("../../resource/ladder.json"));
const Ladder_1 = require("./Ladder");
describe("Path of Exile - Ladders - Entry", function () {
    let ladder;
    before(() => {
        ladder = class_transformer_1.plainToClass(Ladder_1.Ladder, ladder_json_1.default);
    });
    it("#profileUrl - should return profile url", () => {
        chai_1.expect(ladder.entries[0].profileUrl).to.equal("https://www.pathofexile.com/account/view-profile/Jin_melike");
    });
    it("#characterWindowUrl - should return character window url", () => {
        chai_1.expect(ladder.entries[0].characterWindowUrl).to.equal("https://www.pathofexile.com/account/view-profile/Jin_melike/characters?characterName=PenDora");
    });
});
