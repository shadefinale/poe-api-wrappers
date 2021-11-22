"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformNullToUndefined = void 0;
const class_transformer_1 = require("class-transformer");
const TransformNullToUndefined = () => {
    return class_transformer_1.Transform(({ value }) => (value !== null ? value : undefined), {
        toClassOnly: true,
    });
};
exports.TransformNullToUndefined = TransformNullToUndefined;
