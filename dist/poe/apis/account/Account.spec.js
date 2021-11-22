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
describe("Path of Exile - Accounts - Account", function () {
    this.timeout(30000);
    it("#getCharacters() - should return list of account characters", () => __awaiter(this, void 0, void 0, function* () {
        const account = new _1.Account();
        account.name = "klayveR";
        yield chai_1.expect(account.getCharacters()).to.be.fulfilled;
    }));
});
