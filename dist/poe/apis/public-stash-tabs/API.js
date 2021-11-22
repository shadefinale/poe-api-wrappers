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
exports.getChunk = void 0;
const functions_1 = require("../../../common/functions");
const Chunk_1 = require("./Chunk");
/**
 * @endpoint http://api.pathofexile.com/public-stash-tabs
 * @param nextChangeId The next change ID you received from previously fetching changes
 * @throws [[APIError]]
 */
const getChunk = (nextChangeId) => __awaiter(void 0, void 0, void 0, function* () {
    let urlString = `http://api.pathofexile.com/public-stash-tabs`;
    if (nextChangeId) {
        urlString += `/${nextChangeId}`;
    }
    const url = new URL(urlString);
    return yield functions_1.requestTransformed(Chunk_1.Chunk, url);
});
exports.getChunk = getChunk;
