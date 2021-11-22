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
exports.get = void 0;
const functions_1 = require("../../../common/functions");
const Response_1 = require("./Response");
/**
 * @endpoint https://www.pathofexile.com/api/streams
 * @returns A list of all streams displayed on the official Path of Exile home page
 * @throws [[APIError]]
 */
const get = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = new URL(`https://pathofexile.com/api/streams`);
    const response = yield functions_1.requestTransformed(Response_1.Response, url);
    return response.streams;
});
exports.get = get;
