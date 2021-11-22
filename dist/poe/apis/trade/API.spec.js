"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const API = __importStar(require("./API"));
describe("Path of Exile - Trade", function () {
    this.timeout(10000);
    it("#getLeagues() - should return list of trade leagues", () => __awaiter(this, void 0, void 0, function* () {
        yield chai_1.expect(API.getLeagues()).to.be.fulfilled;
    }));
    it("#getItems() - should return list of trade items", () => __awaiter(this, void 0, void 0, function* () {
        yield chai_1.expect(API.getItems()).to.be.fulfilled;
    }));
    it("#getStats() - should return list of trade stats", () => __awaiter(this, void 0, void 0, function* () {
        yield chai_1.expect(API.getStats()).to.be.fulfilled;
    }));
    it("#getStatic() - should return list of trade static items", () => __awaiter(this, void 0, void 0, function* () {
        yield chai_1.expect(API.getStatic()).to.be.fulfilled;
    }));
    it("#search(league, query) - should return search results", () => __awaiter(this, void 0, void 0, function* () {
        const query = {
            query: { status: { option: "online" }, stats: [{ type: "and", filters: [] }] },
            sort: { price: "asc" },
        };
        yield chai_1.expect(API.search("Standard", query)).to.be.fulfilled;
    }));
    it("#exchange(league, query) - should return exchange results", () => __awaiter(this, void 0, void 0, function* () {
        const query = {
            exchange: {
                status: { option: "any" },
                have: ["ancient-orb"],
                want: ["mirror", "delirium-orb"],
            },
        };
        yield chai_1.expect(API.exchange("Standard", query)).to.be.fulfilled;
    }));
    it("#getFromHashes(hashes) - should return search results", () => __awaiter(this, void 0, void 0, function* () {
        const hashes = ["77ca9a932eb8c2dd078fd301d37cb872b54a862ee6a1467fdfd243334ac0a889"];
        yield chai_1.expect(API.getFromHashes(hashes)).to.be.fulfilled;
    }));
    it("#getIgnoredAccounts() - should return list of ignored accounts", () => __awaiter(this, void 0, void 0, function* () {
        yield chai_1.expect(API.getIgnoredAccounts()).to.be.fulfilled;
    }));
});
