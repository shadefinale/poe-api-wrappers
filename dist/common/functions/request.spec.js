"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("mocha");
const chai_1 = require("chai");
const request_1 = require("./request");
describe("Common - Functions", function () {
    describe("#stripByteOrderMark()", function () {
        it("should strip UTF-8 BOM", () => {
            const str = request_1.stripByteOrderMark("\ufeffsomething");
            chai_1.expect(str.charCodeAt(0)).to.not.equal(0xfeff);
        });
        it("should not strip anything", () => {
            const str = request_1.stripByteOrderMark("valid string");
            chai_1.expect(str.charAt(0)).to.equal("v");
        });
    });
});
