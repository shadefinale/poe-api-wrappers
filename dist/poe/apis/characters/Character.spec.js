"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("mocha");
const chai_1 = require("chai");
const class_transformer_1 = require("class-transformer");
const characters_json_1 = __importDefault(require("../../resource/characters.json"));
const characters_1 = require("../characters");
describe("Path of Exile - Character - Character", function () {
    describe("Classes", () => {
        let characters;
        before(() => {
            characters = class_transformer_1.plainToClass(characters_1.Character, characters_json_1.default);
        });
        it("#levelProgression - should return level progression of the character", () => {
            chai_1.expect(characters[0].levelProgression).to.be.below(1);
            chai_1.expect(characters[1].levelProgression).to.be.above(1);
            chai_1.expect(characters[2].levelProgression).to.be.above(15);
            chai_1.expect(characters[23].levelProgression).to.equal(0);
        });
    });
});
