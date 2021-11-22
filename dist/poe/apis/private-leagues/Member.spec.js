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
const _1 = require("./");
describe("Path of Exile - Private Leagues - Member", function () {
    this.timeout(30000);
    it("#getCharacters() - should return list of member characters", () => __awaiter(this, void 0, void 0, function* () {
        const member = new _1.Member();
        member.memberName = "klayveR";
        yield chai_1.expect(member.getCharacters()).to.be.fulfilled;
    }));
});
