"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("mocha");
const chai_1 = require("chai");
const class_transformer_1 = require("class-transformer");
const twitch_streams_json_1 = __importDefault(require("../../resource/twitch_streams.json"));
const Response_1 = require("./Response");
describe("Path of Exile - Streams - Stream", function () {
    let response;
    before(() => {
        response = class_transformer_1.plainToClass(Response_1.Response, twitch_streams_json_1.default);
    });
    it("#url - should return profile url", () => {
        chai_1.expect(response.streams[0].url).to.equal("https://twitch.tv/zizaran");
        chai_1.expect(response.streams[1].url).to.equal("https://twitch.tv/raizqt");
    });
});
