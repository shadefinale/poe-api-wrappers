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
const League_1 = require("./League");
describe("Path of Exile - Leagues - League", function () {
    describe("#getLadder()", () => {
        let mockLeague;
        before(() => {
            mockLeague = new League_1.League();
            mockLeague.id = "Standard";
        });
        it("should fetch the ladder and store it", () => __awaiter(this, void 0, void 0, function* () {
            const ladder = yield mockLeague.getLadder();
            chai_1.expect(ladder).to.not.be.null;
        }));
        it("should have stored the ladder in the league", () => {
            chai_1.expect(mockLeague.ladder).to.not.be.undefined;
        });
    });
});
