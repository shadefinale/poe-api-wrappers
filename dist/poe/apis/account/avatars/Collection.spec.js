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
const Collection_1 = require("./Collection");
describe("Path of Exile - Account - Avatars - Collection", function () {
    this.timeout(10000);
    describe("#getNextPage()", () => {
        let mockCollection;
        before(() => {
            mockCollection = new Collection_1.Collection();
            mockCollection.collection = [];
        });
        it("should fetch the next 16 avatars", () => __awaiter(this, void 0, void 0, function* () {
            const avatars = yield mockCollection.getNextPage();
            chai_1.expect(avatars).to.not.be.null;
            chai_1.expect(avatars === null || avatars === void 0 ? void 0 : avatars.length).to.be.equal(16);
        }));
        it("should have appended the avatars to the collection", () => {
            chai_1.expect(mockCollection.collection.length).to.be.equal(16);
        });
        it("should return null if no more entries available", () => __awaiter(this, void 0, void 0, function* () {
            mockCollection.options = { page: 1000 };
            const avatars = yield mockCollection.getNextPage();
            chai_1.expect(avatars).to.be.null;
        }));
    });
});
