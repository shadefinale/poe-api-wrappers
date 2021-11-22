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
const trade_search_json_1 = __importDefault(require("../../../resource/trade_search.json"));
const Result_1 = require("./Result");
describe("Path of Exile - Trade - Search - Result", function () {
    let result;
    before(() => {
        result = class_transformer_1.plainToClass(Result_1.Result, trade_search_json_1.default);
    });
    describe("#getNext()", () => {
        it("should get the next 3 items", () => __awaiter(this, void 0, void 0, function* () {
            const items = yield result.getNextItems();
            chai_1.expect(items).to.not.be.null;
            chai_1.expect(items === null || items === void 0 ? void 0 : items.length).to.be.equal(3);
        }));
        it("should return null if no more hashes available", () => __awaiter(this, void 0, void 0, function* () {
            const items = yield result.getNextItems();
            chai_1.expect(items).to.be.null;
        }));
    });
});
