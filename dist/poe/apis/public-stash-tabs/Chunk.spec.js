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
require("reflect-metadata");
require("mocha");
const chai_1 = require("chai");
const Chunk_1 = require("./Chunk");
describe("Path of Exile - Public stash tabs - Chunk", function () {
    this.timeout(30000);
    it("#getNext(id) - should return next public stash tab chunk", () => __awaiter(this, void 0, void 0, function* () {
        const chunk = new Chunk_1.Chunk();
        chunk.nextChangeId = "2949-5227-4536-5439-1849";
        yield chai_1.expect(chunk.getNext()).to.be.fulfilled;
    }));
});
