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
exports.stripByteOrderMark = exports.buildHeaders = exports.requestTransformedArray = exports.requestTransformed = exports.request = void 0;
const axios_1 = __importDefault(require("axios"));
const class_transformer_1 = require("class-transformer");
const poe_1 = require("../../poe");
const errors_1 = require("../../poe/errors");
const request = (url, method = "get", payload = {}) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const config = {
            url: url.toString(),
            method: method,
            headers: exports.buildHeaders(url),
            data: payload,
            transformResponse: [
                (data) => {
                    return data;
                },
            ],
        };
        const response = yield axios_1.default(config);
        const data = response.data;
        return exports.stripByteOrderMark(data);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error) && error.response) {
            if (url.host.includes("pathofexile.com")) {
                const data = JSON.parse(error.response.data);
                throw new errors_1.APIError(data);
            }
        }
        throw error;
    }
});
exports.request = request;
const requestTransformed = (cls, url, method = "get", payload = {}) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield exports.request(url, method, payload);
    const obj = JSON.parse(response);
    return class_transformer_1.plainToClass(cls, obj);
});
exports.requestTransformed = requestTransformed;
const requestTransformedArray = (cls, url, method = "get", payload = {}) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield exports.request(url, method, payload);
    const obj = JSON.parse(response);
    return class_transformer_1.plainToClass(cls, obj);
});
exports.requestTransformedArray = requestTransformedArray;
const buildHeaders = (url) => {
    const headers = {};
    if (url.host.includes("pathofexile.com")) {
        if (poe_1.Settings.sessionId != null) {
            headers["Cookie"] = `POESESSID=${poe_1.Settings.sessionId}`;
        }
        if (poe_1.Settings.userAgent != null) {
            headers["User-Agent"] = poe_1.Settings.userAgent;
        }
    }
    return headers;
};
exports.buildHeaders = buildHeaders;
const stripByteOrderMark = (str) => {
    if (str.charCodeAt(0) === 0xfeff) {
        str = str.slice(1);
    }
    return str;
};
exports.stripByteOrderMark = stripByteOrderMark;
