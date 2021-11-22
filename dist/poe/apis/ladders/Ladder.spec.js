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
describe("Path of Exile - Ladders - Ladder", function () {
    let ladder;
    before(() => {
        ladder = class_transformer_1.plainToClass(Ladder_1.Ladder, ladder_json_1.default);
    });
    describe("#getNextEntries()", () => {
        let mockLadder;
        before(() => {
            mockLadder = new Ladder_1.Ladder();
            mockLadder.entries = [];
            mockLadder.total = 15000;
        });
        it("should fetch the next 20 entries", () => __awaiter(this, void 0, void 0, function* () {
            const entries = yield mockLadder.getNextEntries();
            chai_1.expect(entries).to.not.be.null;
            chai_1.expect(entries === null || entries === void 0 ? void 0 : entries.length).to.be.equal(20);
        }));
        it("should have appended the entries to the ladder", () => {
            chai_1.expect(mockLadder.entries.length).to.be.equal(20);
        });
        it("should set the limit correctly if it would otherwise exceed the total", () => __awaiter(this, void 0, void 0, function* () {
            mockLadder.options = { offset: 14975 };
            const entries = yield mockLadder.getNextEntries();
            chai_1.expect(entries).to.not.be.null;
            chai_1.expect(entries === null || entries === void 0 ? void 0 : entries.length).to.be.equal(5);
        }));
        it("should return null if no more entries available", () => __awaiter(this, void 0, void 0, function* () {
            mockLadder.options = { offset: 15000 };
            const result = yield mockLadder.getNextEntries();
            chai_1.expect(result).to.be.null;
        }));
    });
    it("#filterByCharacter() - should return all Scions", () => {
        const occultists = ladder.filterByCharacter("class", "Scion");
        chai_1.expect(occultists.length).to.equal(6);
    });
    it("#filterBy() - should return all public entries", () => {
        const publicEntries = ladder.filterBy("public", true);
        chai_1.expect(publicEntries.length).to.equal(9);
    });
    // I have no idea how to test this stuff
    it("#toPlain() - should return a plain javascript object", () => {
        const plain = ladder.toPlain();
        chai_1.expect(Object.prototype.hasOwnProperty.call(plain, "entries")).to.be.true;
    });
});
